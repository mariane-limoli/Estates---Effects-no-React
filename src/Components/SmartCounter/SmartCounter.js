import {useState} from 'react';

function SmartCounter(){
    // retona um vetor
    // 1 - variável statefull
    //2 - função amarrada a essa variável
    const [ quantity, upQuantity] = useState(1);

    return[
        <>
            <h1>{quantity}</h1>
            <button onClick={()=> upQuantity(quantity + 1)}>Aumentar</button>
        </>
    ]
}

export default SmartCounter;