const API_KEY = "ENTER YOUR API KEY";
const BASE_URL = "http://api.weatherapi.com/v1";

// http://api.weatherapi.com/v1/forecast.json?key=f3d8f0eec7cf49cab3555754231201&q=London&days=10&aqi=no&alerts=no
// http://api.weatherapi.com/v1/current.json?key=f3d8f0eec7cf49cab3555754231201&q=London&aqi=yes

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ key: API_KEY, ...searchParams });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const { name, country, localtime } = data.location;
  const { wind_kph, humidity, feelslike_c, temp_c } = data.current;
  const high = parseFloat(temp_c + 10).toFixed(2);
  const low = parseFloat(temp_c - 5).toFixed(2);
  const { icon, text } = data.current.condition;

  return {
    name,
    country,
    localtime,
    wind_kph,
    humidity,
    feelslike_c,
    temp_c,
    high,
    low,
    icon,
    text,
  };
};

const formatForecastWeather = (data) => {
  const { localtime } = data.location;
  const startHr = parseInt(localtime.split(" ")[1].split(":")[0]) + 1;
  const endHr = startHr + 6 >= 24 ? 24 : startHr + 6;
  const hourly = data.forecast.forecastday;
  const { sunrise, sunset } = hourly[0].astro;

  const hourArray = hourly[0];
  const hours = hourArray.hour.slice(startHr, endHr);
  const hoursDetail = hours.map((day) => {
    return {
      temp: day.feelslike_c,
      hour: day.time.split(" ")[1],
      icon: day.condition.icon,
    };
  });

  const days = data.forecast.forecastday;
  const next5days = days.slice(1, 6);
  const next5forcast = next5days.map((perday, idx) => {
    return {
      hour: perday.astro.sunrise,
      temp: perday.day.maxtemp_c,
      icon: perday.day.condition.icon,
    };
  });
  const forecastObj = {
    sunset: sunset,
    sunrise: sunrise,
    hourly: hoursDetail,
    forecast: next5forcast,
  };

  return forecastObj;
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "current.json",
    searchParams
  ).then(formatCurrentWeather);

  searchParams = { ...searchParams, days: 6 };
  const formattedForecastWeather = await getWeatherData(
    "forecast.json",
    searchParams
  ).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

export const iconUrlFromCode = (iconURL) => `http:${iconURL}`;

export default getFormattedWeatherData;
