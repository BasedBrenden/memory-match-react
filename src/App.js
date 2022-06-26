import './App.css';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';
import {useState} from 'react'

/*
  This game will load 4 squares each with a different color. When a user clicks a color, 
  it saves that squares color to a variable. When another color is clicked, it checks to see if they match.
  If they match, player score goes up one.
*/

function App() {

  const [score, setscore] = useState(0);
  const [bestScore, setbestScore] = useState(0)

  const updateScore = (input) =>{
    setscore(score+input);


    if(score >= bestScore){
      setbestScore(score+1)
    }

  }


  return (
    <div className="App">
      <h1> Memory card match!</h1>
      <Scoreboard userScore={score} bestScore={bestScore}/>
      <Gameboard  updateScore={updateScore}/>
    </div>
  );
}

export default App;
