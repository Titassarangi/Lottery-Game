import { useState } from 'react';
import './App.css';
import Lottery from "./Lottery"; // Ensure this path is correct
import {sum} from "./helper";
function App() {
    let winCondition = (ticket) =>{
        return ticket.every((num) => num == ticket[0]);
    }
    return (
        <>
            <Lottery n={3} winningSum={15} winCondition = {winCondition}/>
        </>
    );
}

export default App;
