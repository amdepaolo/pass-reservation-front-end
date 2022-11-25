import './App.css';
import { useEffect, useState } from 'react'; 
import ReservationForm from './components/ReservationForm';
import Passes from './components/Passes';
import DisplayReservations from './components/DisplayReservations';
import CreatePassForm from './components/CreatePassForm';

function App() {
  const [passes, setPasses] = useState([]);
  const [currentPass, setCurrentPass] = useState({reservations:[]});

  useEffect(()=>{
    fetch('http://localhost:9292/passes')
    .then(r => r.json())
    .then(setPasses)
  },[])

  function handlePassClick(id){
    fetch(`http://localhost:9292/passes/${id}`)
    .then(r => r.json())
    .then(setCurrentPass)
  }

  function updatePasses(response){
    const updatedPasses = [...passes, response];
    setPasses(updatedPasses);
  };

  function updateReservations(response){
    if (!response.error){
      const updatedPass = {...currentPass, reservations: response};
      console.log(updatedPass);
      setCurrentPass(updatedPass)
    } else {window.alert(response.error)}
  };

  function updateResWithEdit(response){
    if (!response.error){
      const updatedResArr = currentPass.reservations.map(reservation =>{
        if (reservation.id === response.id){
          return response
        }
        else return reservation
      });
      const updatedPass = {...currentPass, reservations: updatedResArr};
      setCurrentPass(updatedPass)
    } else {window.alert(response.error)}
  };
  
  return (
    <div className="App">
      <Passes passes={passes} onPassClick={handlePassClick}/>
      <CreatePassForm onResponse={updatePasses}/>
      <ReservationForm passId={currentPass.id} passName={currentPass.name} onResponse={updateReservations}/>
      <DisplayReservations currentPass={currentPass} onResponse={updateResWithEdit}/>
    </div>
  );
}

export default App;
