import React from 'react';
import joker from 'img/joker.jpg';
import img from 'img';

class Container extends React.Component{

  render(){
    return(
     <div>
        <h1>Funciona</h1>
        <img src={joker} alt="some value" > </img> 
     </div>
    )
  }

}

export default Container;