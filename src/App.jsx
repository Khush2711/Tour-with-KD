import { useState } from 'react'
import './App.css'
import data from './data'
import Tours from './Components/Tours';
import NoTour from './Components/NoTour';

function App() {

  const [tours, setTours] = useState(data);

  function onRemoveTourHandler(id) {
    let newTour = tours.filter((tourData) => id !== tourData.id);
    setTours(newTour);
  }

  function onRefreshHandler(){
    setTours(data);
  }

  return (
    <>
      { tours.length !==  0 ?  <Tours data={tours} onRemoveTourHandler={onRemoveTourHandler} /> : <NoTour onRefreshHandler={onRefreshHandler}/> }

    </>
  )
}

export default App
