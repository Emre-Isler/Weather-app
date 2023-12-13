import React from 'react'

function Sonuc({response}) {
  return (
    <div>
      <h1>{response.data.name}</h1>
      <h2>Derece: {Math.floor(response.data.main.temp)}</h2>
      <h2>Nem: %{response.data.main.humidity}</h2>
      <h2>açıklama: {response.data.weather[0].description}</h2>
      </div>
  )
}

export default Sonuc