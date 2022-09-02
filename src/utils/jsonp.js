function jsonp(url, data = {}, callback = "callback") {
  data.callback = callback;
  let params = [];
  for (let key in data) {
    params.push(`key=${data[key]}`);
  }

  let script = document.createElement("script");
  script.src = url + "?" + params.join("&");
  script.type = "text/javascript";
  document.body.appendChild(script);

  return new Promise((resolve, reject) => {
    window[callback] = (data) => {
      try {
        resolve(data);
      } catch (e) {
        reject(e);
      } finally {
        script.parentNode.removeChild(script);
      }
    };
  });
}

jsonp(
  "https://domain.com/api",
  {
    params1: "hello",
    params2: 2,
  },
  "jsonpcallback"
)
  .then((data) => {
    console.log(data);
  })
  .catch((e) => console.log(e));
