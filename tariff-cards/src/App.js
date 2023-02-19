import rates from './data.json';
import './App.css';
import TariffCard from './components/TariffCard'



function App() {
  return ( <div className = "App"> {
      rates.map((rate) =>
        <TariffCard 
        key = {rate.id} 
        name = {rate.name} 
        price = {rate.price} 
        speed = {rate.speed} 
        backgroundColorPrice = {rate.backgroundColorPrice} 
        backgroundColorHead = {rate.backgroundColorHead} 
        info = {rate.info} 
        />
      )
    }
    </div>
    )}


export default App;
