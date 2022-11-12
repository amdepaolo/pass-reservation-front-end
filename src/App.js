import './App.css';
import ReservationForm from './components/ReservationForm';
import Passes from './components/Passes';
import DisplayReservations from './components/DisplayReservations';

function App() {

  

  return (
    <div className="App">
      <Passes />
      <ReservationForm />
      <DisplayReservations />
    </div>
  );
}

export default App;
