import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ItemListContainer = (greeting) => {
    greeting = "Hola humano!"
    return (
        <div className='greeting'>
            {greeting}  
            
        
        </div>
    );
}

export default ItemListContainer;
