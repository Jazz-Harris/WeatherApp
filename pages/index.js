import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Spinner from "../components/Spinner";
import Weather from "../components/Weather";


export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setErrors(null);
    setLoading(true);
    axios.get(url).then((response) => {
   
      setWeather(response.data);
    }).catch(err =>{    
      if(err.response){
        console.log(err.response)
      }
      setErrors("City not found. Please enter a valid city");
      
    });
    
    return [setCity(""),setLoading(false),errors];
  };
  if (loading) {
    return <Spinner/>;
  } else {
    return (
      <div>
        <Head>
          <title>Weather - Next App</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]' />
        {/* Background image */}
        <Image
        src="https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" 
        layout='fill'
          className='object-cover'
        />

        {/* Search */}
        <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-5 px-2  text-white z-10'>
          <form
            onSubmit={fetchWeather}
            className='flex justify-between items-center w-full m-auto  p-3 bg-transparent border border-white border-2  text-white rounded-2xl'
          >
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                className='bg-transparent border-none text-white font-bold focus:outline-none text-2xl'
                type='text'
                
                placeholder='Enter a city name '
              />
           {errors && <div>{errors}</div>}
            </div>
            
            <button onClick={fetchWeather} >
              <BsSearch size={22} />
            </button>
          </form>
         
         
        </div>

 
    
        {weather.main && <Weather data={weather} />}
    </div>
  );
    }
}