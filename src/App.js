import './App.css';
import { useEffect, useState } from 'react'; 
import ReservationForm from './components/ReservationForm';
import Passes from './components/Passes';
import DisplayReservations from './components/DisplayReservations';
import CreatePassForm from './components/CreatePassForm';

function App() {
  const [passes, setPasses] = useState([])
  const [currentPassAndRes, setCurrentPassAndRes] = useState({reservations:[]})

  useEffect(()=>{
    fetch('http://localhost:9292/passes')
    .then(r => r.json())
    .then(setPasses)
  },[])

  function handlePassClick(id){
    fetch(`http://localhost:9292/passes/${id}`)
    .then(r => r.json())
    .then(setCurrentPassAndRes)
  }
  
  return (
    <div className="App">
      <Passes passes={passes} onPassClick={handlePassClick}/>
      <CreatePassForm />
      <ReservationForm currentPassAndRes={currentPassAndRes}/>
      <DisplayReservations currentPassAndRes={currentPassAndRes} />
    </div>
  );
}

export default App;
