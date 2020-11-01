import React, { useState } from 'react';
import styled from 'styled-components';
import CloseModal from './component/CloseModal';

function App() {
  const [showModal, setShowModal] = useState(false)

  console.log("congrats")
  console.log("you found the easter egg")
  console.log("please sign-up for my news letter to make a friend that shows you how to make web dev more fun!!")
  console.log(`https://newsletter-tutorial.surge.sh/`)

  return (<>
      <AppStyles>
       {showModal === true 
          ?
          <div className="modal">
              <CloseModal 
                setShowModal={setShowModal}
                />

                <form>
                  <h4>form for illustration</h4>
                  <input />
                  <input />
                  <br />
                  <a href="">Back to tutorial</a>
                  <p>or...</p>
                  <a href="https://github.com/TallanGroberg/modal-tutorial">Github</a>
                </form>
            </div>
          :
          <>
          <h4>Click the button to show the modal.</h4>
          <button onClick={() => setShowModal(prev => (!prev))}>Show</button>

          </>
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
  padding: 4px;
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
