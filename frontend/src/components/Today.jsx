import React from 'react'

const Today = ({props}) => {
    return (
        <div className='flex flex-col  justify-center '>
            <div className='flex flex-row  justify-between'>
                <div className='  w-1/3 h-20 flex flex-col mt-2  '>
                    <p className=' mx-auto '>{props?.forecast.forecastday[0].day.maxtemp_c}&deg;</p>
                    <p className=' mx-auto '>high</p>
                </div>
                <div className='  w-1/3 h-20 flex flex-col mt-2  '>
                    <p className=' mx-auto '>{props?.forecast.forecastday[0].day.maxwind_kph} Kph</p>
                    <p className=' mx-auto '>wind</p>
                </div>
                <div className='  w-1/3 h-20 flex flex-col mt-2  '>
                    <p className=' mx-auto '>{props?.forecast.forecastday[0].astro.sunrise}</p>
                    <p className=' mx-auto '>sunrise</p>
                </div>
            
            </div>
            <div className='flex flex-row  justify-between'>
                <div className='  w-1/3 h-20 flex flex-col mt-2  '>
                    <p className=' mx-auto '>23&deg;</p>
                    <p className=' mx-auto '>low</p>
                </div>
                <div className='  w-1/3 h-20 flex flex-col mt-2  '>
                    <p className=' mx-auto '>{props?.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
                    <p className=' mx-auto '>rain</p>
                </div>
                <div className='  w-1/3 h-20 flex flex-col mt-2  '>
                    <p className=' mx-auto '>{props?.forecast.forecastday[0].astro.sunset}</p>
                    <p className=' mx-auto '>sunset</p>
                </div>

            </div>

        </div >
    )
}

export default Today