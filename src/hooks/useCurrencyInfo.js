import {useState,useEffect} from "react"

 function useCurrencyInfo(){
    const [data,setData]=useState({})
    useEffect(()=>{
    fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_D1d3jb9KXoNiCXLB9MpUZxxhh4ckgtMQ9InTaENc`)
    .then((res)=>res.json())
    .then((res)=> setData(res["data"]))
    },[])
    return data;
}

export default useCurrencyInfo;