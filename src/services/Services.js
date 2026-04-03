import { useEffect, useState } from 'react'

export async function getCurrentWeather(weatherApiKey, city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`)
    const data = await res.json()

    return data
}

export function getFiveDayForecast() {
    
}