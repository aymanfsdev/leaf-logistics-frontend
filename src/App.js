import {BrowserRouter} from 'react-router-dom';
import AppRouter from './Components/Router/AppRouter';
import NavBar from './Components/Header/NavBar';
import {useState} from 'react';

function App() {

    const [country, setCountry]=useState('')

    const setCountryHandler = (value) => {
        setCountry(value)
    }

    return (
      <BrowserRouter>
          <NavBar setCountry={setCountryHandler}/>
        <AppRouter country={country}/>
      </BrowserRouter>
  );
}

export default App;
