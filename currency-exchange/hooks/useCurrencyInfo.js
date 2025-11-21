import { useState, useEffect } from "react";
function useCurrencyInfo(currency) {
    const [data , setdata] = useState({})
    useEffect(() =>{
fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent('https://latest.currency-api.pages.dev/v1/currencies/usd.json')}`)
    
    .then((res)=>res.json())
    .then((res)=>setdata(res[currency]))
},[currency])
    console.log(data)
    return data
}
export default useCurrencyInfo
