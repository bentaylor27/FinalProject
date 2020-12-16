import React, { useState, useEffect } from 'react'
// import Axios from 'axios' // using fetch instead..?
// update below with new components
// import { DogContainer } from './components/DogContainer'
// import NewDogForm from './components/NewDogForm'

function App() {
  const [initialData, setInitialData] = useState([{}])

  useEffect(() => {
    fetch('/api').then(
      response => response.json()
    ).then(data => setInitialData(data))
  }, []);

    return (
      <div className='App'>
        <h1>{initialData.date}</h1>
        <h2>{initialData.venue}</h2>
        <h3>{initialData.location}</h3>
      </div>
    )
}

export default App;


