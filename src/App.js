import './App.css';
import Button from './components/Button';
import logo from './images/logo.png'
import Counter from './components/Counter';
import { useState} from 'react'
function App() {

  const [numClics , setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics+1);
  }

  const resetCounter = () => {
    setNumClics(0);
  }
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo' src={logo} alt='logo'/>
      </div>
      <div className='contenedor-principal'>
        <Counter numClics={numClics} />
        <Button texto='Click'
        isClickButton={true}
        manejarClic={manejarClic}/>
        <Button texto='Reset'
        isClickButton={false}
        manejarClic={resetCounter}/>

      </div>
    </div>
  );
}



export default App;
