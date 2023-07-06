import axios from "axios"   
import { useEffect, useState } from "react"



function GetCountry(){
    const [country,setCountry]=useState("")
    const [datas,setDatas]=useState([])
    const [error, setError] = useState("");
    useEffect(()=>{
        if(country){
            const url = `https://restcountries.com/v3.1/name/${country}`
            axios
            .get(url).then(({data})=>{
                setDatas(data)
                setError("")
            })
            .catch((error)=>{
                setError("Country not found")
                console.log(error)
                setDatas([])
            })

        }

    },[country])

    return <div style={{textAlign:"center"}}>
        <input type="text" onChange={(e)=>{
                setCountry(e.target.value)
            
        }} placeholder="Enter the country" style={{width:300,height:40,marginTop:30}}/>
         {error && <h1 style={{color:"red"}}>{error}</h1>}
    { 
      country &&   datas.map((countries)=>{
             return <div key={countries.cca2} style={{marginTop:30,fontFamily:"cursive"}}>
                <img src={countries.flags.png}/>
                <h1>{countries.name.common}</h1>
                <p>Capital : {countries.capital}</p>
                <p>Continents : {countries.continents}</p>
                <p>Population : {countries.population}</p>
                <p>FIFA : {countries.fifa}</p>
                {/* <p>Language : {countries.languages[0]}</p> */}
                <p>{countries.independent===true?"Independent":"Dependent"}</p>
            </div>
        })
    }
    </div>
}

export default GetCountry