import React from "react";
import './components-css/Gameboard.css';
import { useState } from "react";

const Gameboard = ({updateScore}) =>{
    const [cardColors,setcardColors] = useState([]);
    const [clickedColor, setclickedColor] = useState('')
    
    let firstClick = false;
    let score = 0;

    window.onload =() =>{
        resetColors();
    }

    const resetColors =() =>{

        let i = 6;
        let tempArr = []
        while(i>0){
            const rgb = 'rgb('+ Math.floor(Math.random()* 256) +','+Math.floor(Math.random()* 256)+','+Math.floor(Math.random()* 256)+')';
            tempArr.push(rgb)
            i--;
        }

        setcardColors([...tempArr])

    }

    const randomizeColors = () =>{
        let tempArr = [...cardColors];
        for (let i = tempArr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let tempVar = tempArr[i];
            tempArr[i] =tempArr[j];
            tempArr[j] = tempVar;
        }
        setcardColors([...tempArr])
    }


    const clickedCard =(color)=>{
        if(clickedColor === '' || clickedColor !== color){
            if(firstClick){
                score -= 1;
                updateScore(score);
                firstClick = false
            }else{
                setclickedColor(color);
                firstClick=true;
            }
            randomizeColors();
        }else if(clickedColor === color){
            setclickedColor('');
            resetColors();
            score += 1;
            updateScore(score);
        }
    }



    return(
            <div id="cardHolder">
                    {cardColors.map((card)=>
                    <div key={card} className='colorCard' style={{backgroundColor: card}} value={card} onClick={()=> clickedCard(card)}></div>
                    )}
            </div>

    )
}

export default Gameboard