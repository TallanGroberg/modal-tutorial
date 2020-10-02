import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
       {showModal ? 
       <div 
          style={{width: '50%', height: '50px', border: '3px solid white'}}
          className="modal" >
              <button onClick={() => setShowModal(prev => (!prev))}>Show Modal</button>
          </div>
       :
       <button onClick={() => setShowModal(prev => (!prev))}>Show Modal</button>
      }
      </header>
    </div>
  );
}

export default App;
