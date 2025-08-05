import React from 'react'
import logo from '../logo.svg';
const NextDay = ({props}) => {
 console.log("nextday",props);
  const dataobj = new Date(props?.date.replace(" ", "T"));
  const options = { weekday: "long", };
  const formatted = dataobj.toLocaleDateString('ens-US', options)
 // console.log("date",formatted);
  return (
    <div className='inline-block relative w-16 h-28 border rounded-lg bg-blue-800 text-white'>
      <p className='absolute  left-5'>{formatted.length>3?formatted.slice(0,3):formatted}</p>
      <img className='absolute top-6' src={props?.day.condition.icon} width={100} alt='not found' />
      <div className='flex absolute left-2 bottom-2'>
        <p>{Math.round(props?.day.mintemp_c)}</p> - <p>{Math.round(props?.day.maxtemp_c)}</p>
      </div>
    </div>
  )
}

export default NextDay