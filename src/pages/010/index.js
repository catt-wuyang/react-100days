import "./style.css";
import React, { useEffect, useState } from "react";
import Select from "./select";
import fetchJsonp from "./fetchJsonp";

const fetchData = async (url, ...args) => {
  try {
    const response = await fetchJsonp(url, {
      params: Object.assign(
        {
          key: "5N7BZ-R6YCX-PEP4F-T6Z4A-UF3B6-GYBGY",
          output: "jsonp",
        },
        ...args
      ),
      headers: { Accept: "application/json" },
      jsonpCallback: "cb",
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const Location = function () {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);

  const [citySelectReset, setCitySelectReset] = useState(false);
  const [location, setLocation] = useState({
    province: "",
    city: "",
    district: "",
  });

  useEffect(() => {
    fetchData("https://apis.map.qq.com/ws/district/v1/list").then((data) => {
      const provincesData = [];
      data.result[0].map((item) =>
        provincesData.push({
          text: item.name,
          value: item.id,
        })
      );
      setProvinces(provincesData);
    });
  }, []);

  function onSelectProvince(provinceId) {
    setCitySelectReset(true);
    if (provinceId) {
      const loc = Object.assign(location, {
        province: provinceId,
        city: "",
        district: "",
      });
      setLocation(loc);

      fetchData(`https://apis.map.qq.com/ws/district/v1/getchildren`, {
        id: provinceId,
      }).then((data) => {
        const citiesData = [];
        data.result[0].map((item) => {
          citiesData.push({
            text: item.name,
            value: item.id,
          });
        });
        setCities(citiesData);
      });
    }
  }

  function onSelectCity(cityId) {
    if (cityId) {
      const loc = Object.assign(location, {
        city: cityId,
        district: "",
      });
      setLocation(loc);

      fetchData(`https://apis.map.qq.com/ws/district/v1/getchildren`, {
        id: cityId,
      }).then((data) => {
        const districtsData = [];
        data.result[0].map((item) => {
          districtsData.push({
            text: item.name || item.fullname,
            value: item.id,
          });
        });
        setDistricts(districtsData);
      });
    }
  }

  function onSelectDistrict(districtId) {
    if (districtId) {
      const loc = Object.assign(location, {
        district: districtId,
      });
      setLocation(loc);
    }
  }

  return (
    <div>
      <Select name="province" options={provinces} onChange={onSelectProvince} />
      <Select
        name="city"
        key={`city_${location["province"]}`}
        options={cities}
        onChange={onSelectCity}
        disabled={!location["province"]}
      />
      <Select
        name="district"
        key={`district_${location["city"]}`}
        options={districts}
        onChange={onSelectDistrict}
        disabled={!location["city"]}
      />
    </div>
  );
};

export default Location;
