import React from "react";

const Scoreboard =({userScore, bestScore}) =>{
    return(
            <div>
                <p> Your score: <span>{userScore}</span>. BestScore: <span>{bestScore}</span></p>
            </div>
    );
}

export default Scoreboard