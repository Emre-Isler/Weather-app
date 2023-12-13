import { useEffect, useState } from 'react';
import TurkeyMap from 'turkey-map-react';
import axios from 'axios';
import Sonuc from './Sonuc';

function App() {
  const [city,setCity] = useState('')
  const [response, setResponse] = useState('')
  const key = "f9dba21823ae48f4cfac34cff8830e82"

useEffect(() => {
  async function getApi(){
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=tr`)
      setResponse(response)
    }catch(error){
      console.error(error)
    }
  }
  if(city !== ''){
    getApi()
  }
},[city])

  console.log(response)
  return (
    <div >
      <TurkeyMap
      // hoverable = {true}
        onClick={({name}) =>setCity(name) }
      />
      {response && <Sonuc response={response}/>}
    </div>
  );
}

export default App;