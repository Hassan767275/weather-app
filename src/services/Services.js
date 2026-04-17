export async function getCurrentWeather(weatherApiKey, city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`)
    const data = await res.json()

    return data
}

export async function getFiveDayForecast(weatherApiKey, city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}&units=metric`)
    const data = await res.json()

    return data
}

export function getHighsAndLows(data) {
    const fiveDayForecast = data.list
    const forecastObject = {}

    for (let i = 0; i < fiveDayForecast.length; i++) {
        const dateObject = new Date(fiveDayForecast[i].dt * 1000)
        const options = { weekday: 'long'}
        const date = new Intl.DateTimeFormat('en-US', options).format(dateObject)
        const {temp_max, temp_min} = fiveDayForecast[i].main
        const description = fiveDayForecast[i].weather[0].main

        if (!forecastObject[date]) {
            forecastObject[date] = {
                temps: [],
                description
            }
        }
        forecastObject[date].temps.push(temp_max, temp_min)
    }
    
    for (const[date, data] of Object.entries(forecastObject)) {
        const maxTemp = Math.max(...data.temps)
        const minTemp = Math.min(...data.temps)
        
        forecastObject[date] = {
            maxTemp,
            minTemp,
            description: data.description
        }
    }
    return forecastObject
}