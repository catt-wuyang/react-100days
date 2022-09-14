import "./style.css";
import React, { useEffect, useState } from "react";
import Select from "./select";
import fetchJsonp from "fetch-jsonp";

const fetchData = async (url) => {
  try {
    const response = await fetchJsonp(url, {
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
  const [location, setLocation] = useState({});

  useEffect(() => {
    fetchData(
      "https://apis.map.qq.com/ws/district/v1/list?output=jsonp&key=5N7BZ-R6YCX-PEP4F-T6Z4A-UF3B6-GYBGY"
    ).then((data) => {
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
    if (provinceId) {
      const loc = location;
      loc["province"] = provinceId;
      setLocation(loc);

      fetchData(
        `https://apis.map.qq.com/ws/district/v1/getchildren?id=${provinceId}&output=jsonp&key=5N7BZ-R6YCX-PEP4F-T6Z4A-UF3B6-GYBGY`
      ).then((data) => {
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
      const loc = location;
      loc["city"] = cityId;
      setLocation(loc);

      fetchData(
        `https://apis.map.qq.com/ws/district/v1/getchildren?id=${cityId}&output=jsonp&key=5N7BZ-R6YCX-PEP4F-T6Z4A-UF3B6-GYBGY`
      ).then((data) => {
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
      const loc = location;
      loc["district"] = districtId;
      setLocation(loc);
    }
  }

  return (
    <div>
      <Select options={provinces} onChange={onSelectProvince} />
      <Select
        options={cities}
        onChange={onSelectCity}
        disabled={location["province"] == undefined}
      />
      <Select
        options={districts}
        onChange={onSelectDistrict}
        disabled={location["city"] === undefined}
      />
    </div>
  );
};

export default Location;
