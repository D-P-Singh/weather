import React from 'react'
import logo from '../logo.svg';
const Todays = ({props}) => {
    console.log("props",props);
    const dataobj = new Date(props?.location.localtime.replace(" ","T"));
    const options = {weekday:"long",day:"numeric",month:"long"};
const formatted = dataobj.toLocaleDateString('ens-US',options)
    return (
        <div className='font-bold'>
            <p className='ml-3 pt-2 text-3xl'>{props?.location.name}, {props?.location.country}</p>
            <p className='ml-3 font-light '>{formatted}</p>
            <div className='flex flex-row justify-between m-4 '>
                <img className='' src={props?.forecast.forecastday[0].day.condition.icon} alt="not found"  width={150} height={150}/>
                <div className=''>
                    <p className='text-5xl mr-5 '>{props?.forecast.forecastday[0].day.avgtemp_c}&deg;</p>
                    <p className=''> {props?.forecast.forecastday[0].day.condition.text}</p>
                </div>
            </div>

        </div>
    )
}

export default Todays