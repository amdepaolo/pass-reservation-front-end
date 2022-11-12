import './App.css';
import { useEffect, useState } from 'react'; 
import ReservationForm from './components/ReservationForm';
import Passes from './components/Passes';
import DisplayReservations from './components/DisplayReservations';

function App() {
  const [passes, setPasses] = useState([])

  useEffect(()=>{
    fetch('http://localhost:9292/passes')
    .then(r => r.json())
    .then(setPasses)
  },[])

  function handlePassClick(id){
    fetch(`http://localhost:9292/passes/${id}`)
    .then(r => r.json())
    .then(r => console.log(r))
  }
  
  return (
    <div className="App">
      <Passes passes={passes} onPassClick={handlePassClick}/>
      <ReservationForm />
      <DisplayReservations />
    </div>
  );
}

export default App;
