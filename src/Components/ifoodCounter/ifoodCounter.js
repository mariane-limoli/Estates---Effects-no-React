import React, {useState, useEffect} from 'react';
import '../ifoodCounter/ifoodCounter.css';

export default function IfoodCounter() {

    const [value, setValue ] = useState(1)
    const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active')

    useEffect(()=>{
        document.getElementById('coin').innerHTML = 2.00 * value;
    }, [value])

    function down(){

        if(value<=1){
            //mudar o css
            setButtonStyle('ounter-button-minus-desactive')
        }

        if(value > 0){
             setValue(value-1)
        }
    }

    function up(){
        setValue(value+1)
        setButtonStyle('counter-button-minus-active')
    }

  return (
    <div className='counter-wrapper'>
      <button
      className={buttonStyle}
      onClick={down}
      >
        -
      </button>

      <p>{value}</p>

      <button 
      className='counter-button-plus-active'
      onClick={up}
      >
        +
      </button>

      <button id='coin' >

      </button>
    </div>
  )
}
