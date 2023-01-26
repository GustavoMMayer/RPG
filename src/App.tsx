import { keyboardKey } from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import * as C from './App.styled'
import Character from './components/Character'
import {useCharacter} from './hooks/useCharacter'

const App =() => {

  const char = useCharacter("Gustavo");
  const char2 = useCharacter("Miguel");

  const keypress = (e: KeyboardEvent) => {
      switch(e.key){
      case 'ArrowUp':
      char.moveUp();
      break;
      case 'ArrowDown':
      char.moveDown();
      break;
      case 'ArrowLeft':
      char.moveLeft();
      break;
      case 'ArrowRight':
      char.moveRight();
      break;
    }


  }

  const keypress2 = (e: KeyboardEvent) => {
    switch(e.key){
    case 'w':
    char2.moveUp();
    break;
    case 's':
    char2.moveDown();
    break;
    case 'a':
    char2.moveLeft();
    break;
    case 'd':
    char2.moveRight();
    break;
  }


}
   
useEffect(()=>{
  window.addEventListener('keydown',keypress);
  window.addEventListener('keydown',keypress2);

},[]);

  return(
    <C.Container>
     <C.Map>
      <Character x={char.x} y={char.y} side={char.side} name={char.name}/>
      <Character x={char2.x} y={char2.y} side={char2.side} name={char2.name} />
     </C.Map>

    </C.Container>
  );
};

export default App;