import React, { useEffect, useState } from 'react';
import './App.css';
import Details from './components/Details';
import DeviceTable from './components/DeviceTable';
import Heaeder from './components/Header';
import MonitoringStatus from './components/MonitoringStatus';
import NavLinks from './components/NavLinks';

function App() {

  const [ appliances, setAppliances ] = useState([])
  const [ viewAppliance, setViewAppliances ] = useState("")
  const getData = async () => {
    const rawData = await fetch("http://localhost:8000/api/v1/appliances")
    const data = await rawData.json()
    setAppliances(data.appliances)
  }
  useEffect(() => {
    getData()
  },[])
  return (
    <div className='mainDiv' style={{backgroundColor: "#ededed"}}>
      <Heaeder/>
      <NavLinks setViewAppliances={setViewAppliances} viewAppliance={viewAppliance}/>
      {viewAppliance ? 
        <Details viewAppliance={viewAppliance}/> 
        : 
        <>
          <MonitoringStatus appliances = {appliances}/>
          <DeviceTable appliances = {appliances} setViewAppliances={setViewAppliances}/>
        </>
      }
    </div>
  );
}

export default App;
