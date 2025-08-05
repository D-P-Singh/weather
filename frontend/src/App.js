import logo from './logo.svg';
import './App.css';
import NextDay  from './components/NextDay'
import { useEffect, useState } from 'react';
import Today from './components/Today';
import Todays from './components/Todays';
import Search from './components/Search';
function App() {
  const [forcast ,setForcast] = useState();
  const [nextDay,setNextday] =useState([]);
  const[search,setSearch]=useState("delhi india");
  if(search=="") setSearch("delhi india")
const fetchData = async()=>{
  let res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c416a1a51626456582872016250508&q=${search}&aqi=no&days=3`);
  res = await res.json();
if(res.error){
  setSearch("delhi india")
  return alert("location doest not matched")
}
  console.log("forcast",res);
  setForcast(res);
   setNextday(res.forecast.forecastday);
}
useEffect(()=>{
  fetchData();
},[search])
//  console.log("res",nextDay);
/* console.log("search",search); */
  return (
    <div className="bg-blue-600 text-white sm:w-1/3 mx-auto capitalize min-h-screen">
   <Search search={search} setSearch={setSearch}/>
        <Todays props={forcast} />
        <div className='border w-[90%] mx-auto'></div>
<Today props={forcast} />
  <div className='border w-[90%] mx-auto'></div>

<div className='w-full '></div>
 <div className='mt-6 ml-2' >Next 3 Days</div>
<div className=' mt-1 ml-2 overflow-auto whitespace-nowrap space-x-1'>
   
 {
        nextDay?.map((item,i)=><NextDay key={i} props={item}/>)
      }
</div>
     
    </div>
  );
}

export default App;
