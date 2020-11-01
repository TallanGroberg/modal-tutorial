import React from 'react';

const CloseModal = (props) => {
    const {setShowModal} = props;


    return ( 
            <div 
            onClick={() => setShowModal(prev => (!prev))} 
            className="close-button">

                <div id="up"></div>
                <div id="down"></div>
            </div>
       
        
    );
};

export default CloseModal;