import React, { useState, useRef } from "react"
import './TicTacToe.css'
import circle from '../Assets/circle.png'
import cross from '../Assets/cross.png'

let data = ["", "", "", "", "", "", "", "", ""]

const TicTacToe = () => {
    let titleRef = useRef(null);
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);

    const toggle = (e, num) => {
        if(lock || data[num] !== "") {
            return;
        }
        if(count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross}' alt='X'>`;
            data[num] = "X";
            setCount(++count);
        } else {
            e.target.innerHTML = `<img src='${circle}' alt='O'>`;
            data[num] = "O";
            setCount(++count);
        }
        checkWin();
    }

    const resetGame = () => {
        data = ["", "", "", "", "", "", "", "", ""];
        setCount(0);
        setLock(false);
        titleRef.current.innerHTML = 'Tic Tac Toe In <span>React</span>'
        document.querySelectorAll('.boxes').forEach(box => box.innerHTML = "");
    }

    const checkWin = () => {
        if(data[0] === data[1] && data[1]=== data[2] && data[2]!== "") {
            won(data[2]);
        }
        else if(data[3] === data[4] && data[4]=== data[5] && data[5]!== "") {
            won(data[5]);
        }
        else if(data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        else if(data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[6]);
        }
        else if(data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[7]);
        }
        else if(data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        else if(data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        else if(data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[6]);
        }
    }

    const won = (winner) => {
        setLock(true);
        if(winner ==="X"){
            titleRef.current.innerHTML = `Congratulations: <img src=${cross}> wins`;
        }
        else {
            titleRef.current.innerHTML = `Congratulations: <img src=${circle}> wins`;
        }
    }

    return(
        <div className='container'>
            <h1 className="title" ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
                    <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
                    <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
                    <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
                    <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
                </div>
                <div className="row3">
                    <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
                    <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
                    <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
                </div>
            </div>
            <button className="reset" onClick={resetGame}>Reset</button>
        </div>
    )
}

export default TicTacToe