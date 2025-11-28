import React from "react"
import { useState } from "react"
import axios from "axios"

import sun from "./assets/sun.png"
import snow from "./assets/snow.png"
import clouds from "./assets/clouds.png"
import drops from "./assets/drops.png"

function Weather() {

    const [city, setCity] = useState("")

    const [weather, setWeather] = useState("")
    const [temperature, setTemperature] = useState("")
    const [description, setDescription] = useState("")

    function handleCity(evt) {
        setCity(evt.target.value)
    }

    function getWeather() {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bdef47c790d76eb484f50470a4706532`)

        weatherData.then((success) => {

            console.log(success.data)

            setWeather(success.data.weather[0].main)
            setTemperature(success.data.main.temp)
            setDescription(success.data.weather[0].description)
        })
    }


    return (
        <div className="bg-gradient-to-r from-[rgb(163,166,165)] to-violet-700 p-20 w-screen h-screen">

            <div className="flex justify-center gap-16 md:gap-96">
                <img src={sun} alt="sun" className="w-28 animate-slowSpin" />
                <img src={snow} alt="snow" className="w-28 animate-snowFall" />
            </div>


            <div className="flex justify-center gap-96">

                <div className="bg-gradient-to-r from-[#0cd4c0] to-white p-10 rounded-xl mt-5 w-fit hover:scale-105 transition-all duration-300">

                    <div>
                        <h1 className="text-2xl font-medium">Weather Report</h1>
                        <p>I can give you a weather report about your city !</p>
                        <input onChange={handleCity} type="text" className="mt-2 border border-black rounded-md p-1" placeholder="Search Your City" /> <br />
                        <button onClick={getWeather} className="bg-violet-500 text-white p-2 rounded-md mt-2 hover:scale-105 transition-all duration-300">Get Report</button>

                        <div className="mt-2">
                            <p><b>Weather : </b> {weather} </p>
                            <p><b>Temperature : </b> {temperature} </p>
                            <p><b>Description : </b> {description} </p>
                        </div>

                    </div>

                </div>

                <div className="hidden  md:flex justify-center h-32 gap-96 items-center mt-28"> 
                    <img src={clouds} alt="clouds" className="w-32 animate-cloudFloat " />
                    <img src={drops} alt="heavy-rain" className="w-32 animate-rainFall" />
                </div>

            </div>

        </div>
    )
}


export default Weather