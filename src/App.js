//npm run deploy
import './App.css';
import {useState, useEffect} from "react";





function App() {

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true);

  },[])

  const detectKeyDown = (e) => {
    console.log("clicked key",e.key)
    let player = document.querySelector('.player');

    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
    let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"))


    if (e.key === " "){
      console.log("Key Clicked: Spacebar")
    }

    switch (e.key){
      case 'ArrowRight': player.style.left = (playerLeft+5) + "px";
      console.log(playerLeft)
      break;
      
      case 'ArrowLeft': player.style.left = (playerLeft-5) + "px";
      console.log(playerLeft)
      break;

      case 'ArrowUp': player.style.top = (playerTop-5) + "px";
      console.log(playerTop)
      break;

      case 'ArrowDown': player.style.top = (playerTop+5) + "px";
      console.log(playerTop)
      break;
  }


  }

  return (
    <div className="App">
      <div className='container'>
        <div className="player"></div>
      </div>
      
    </div>
  );
}

export default App;
