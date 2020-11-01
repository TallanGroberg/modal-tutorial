import React, { useState } from 'react';
import styled from 'styled-components';
import CloseModal from './component/CloseModal';

function App() {
  const [showModal, setShowModal] = useState(false)


  return (<>
      <AppStyles>
       

       {showModal === true 
          ?
          <div className="modal">
              <CloseModal 
                setShowModal={setShowModal}
                />
                <form>
                  <input />
                  <input />
                </form>
            </div>
          : 
          <button onClick={() => setShowModal(prev => (!prev))}>Show</button>
        }
        
        
        
     
      </AppStyles>
  </>);
}


const AppStyles = styled.div`

    display: flex;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
    

.modal {
  display: flex;
  flex-direction: row-reverse;
  width: 80%; 
  height: 80vh;
  border: 1px solid black;
}

form {
  margin: auto;
  display: flex;
  flex-direction: column;
}

.close-button {
    border: 1px solid black;
    width: 32px;
    height: 32px;
}


#up {
  border: 2px solid black;
  transform: rotate(-45deg);
  position: relative;
  top: 14px;
  right: 6px;
  width: 40px;
  background-color: black;
  border-radius: 25px;

}
#down {
  border: 2px solid black;
  transform: rotate(45deg);
  position: relative;
  top: 10px;
  right: 6px;
  width: 40px;
  background-color: black;
  border-radius: 25px;

}
`;

export default App;
