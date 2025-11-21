import { useState, useEffect } from "react";
function useCurrencyInfo(currency) {
    const [data , setdata] = useState({})
    useEffect(() =>{
fetch(`https://api.exchangerate.host/latest?base=${currency}`)
    
    .then((res)=>res.json())
    .then((res)=>setdata(res[currency]))
},[currency])
    console.log(data)
    return data
}
export default useCurrencyInfo
