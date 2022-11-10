import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto  pt-20 text-white z-10 ">
      <div>
        <p className="text-3xl text-center  font-bold pt-10">
          Weather in {data.name}, {data.sys.country}
        </p>
        <p className="text-2xl text-center ">
          Local time zone: {data.timezone}
        </p>
        <div className="relative flex justify-between pt-20 ">
          <div className="flex flex-col items-center">
            <Image
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="/"
              width="100"
              height="100"
            />
            <p className="text-2xl text-gray-100">
              {data.weather[0].description}
            </p>
          </div>
          <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
        </div>

        <div className="flex col-span-2 justify-between text-center pt-20">
          <div className="bg-black/50 relative p-2  rounded-md    mt-2 pt-2 ">
            <p className="font-bold text-2xl">
              {data.main.temp.toFixed(0)}&#176;
            </p>
            <p className="text-xl">Current temp</p>
          </div>
          <div className="bg-black/50 relative p-2 rounded-md  ml-2  mt-2 pt-2 ">
            <p className="font-bold text-2xl">
              {data.main.feels_like.toFixed(0)}&#176;
            </p>
            <p className="text-xl">Feels Like</p>
          </div>
          <div className="bg-black/50 relative p-2 rounded-md  ml-2  mt-2 pt-2 ">
            <p className="font-bold text-2xl">
              {data.main.temp_max.toFixed(0)}&#176;
            </p>
            <p className="text-xl">Max Temp</p>
          </div>
          <div className="bg-black/50 relative p-2 rounded-md   ml-2 mt-2 pt-2 ">
            <p className="font-bold text-2xl">
              {data.main.temp_min.toFixed(0)}&#176;
            </p>
            <p className="text-xl">Min Temp</p>
          </div>
        </div>

        <div className="flex col-span-2 justify-between text-center pt-5 ">
          <div className="bg-black/50 relative p-2  rounded-md   mt-2 pt-2 ">
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div className="bg-black/50 relative p-2 rounded-md   ml-2 mt-2 pt-2 ">
            <p className="font-bold text-2xl">
              {data.wind.speed.toFixed(0)} <span>mph</span>
            </p>
            <p className="text-xl">Wind Speed</p>
          </div>
          <div className="bg-black/50 relative p-2 rounded-md  ml-2  mt-2 pt-2 ">
            <p className="font-bold text-2xl">
              {data.wind.gust} <span>mph</span>
            </p>
            <p className="text-xl">Wind Gust</p>
          </div>
          <div className="bg-black/50 relative p-2 rounded-md  ml-2 mt-2 pt-2 ">
            <p className="font-bold text-2xl">{data.clouds.all}%</p>
            <p className="text-xl">Cloudiness</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
