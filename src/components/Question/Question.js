import { Button } from "@mui/material";
import React, { useState } from "react";
import './Question.css';
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
                 
const Question= ({currQuest, setCurrQuest, questions, options, correct, score, setScore, setQuestions}) =>{

    const [selected, setSelected]= useState();
    const [error, setError]= useState(false);

    const navigate= useNavigate();

    const handleSelect=(i)=>{
        if(selected === i && selected === correct) return "select";
        else if(selected === i && selected !== correct) return "wrong"; 
        else if(i === correct) return "select";
    }

    const handleCheck= (i)=>{
            setSelected(i);
            if(i === correct) setScore(score + 1);
            setError(false);
    }

    const handleNext= ()=>{
        if(currQuest > 8){
            navigate('/result');
        }else if(selected){
            setCurrQuest(currQuest + 1)
            setSelected()
        }else{
            setError('Please select an option first')
        }
    }


    const handleQuit= ()=>{
        
    }

    return(
        <div className="question">
           <h1>Question {currQuest + 1}</h1>

           <div className="singleQuestion">
                <h2>{questions[currQuest].question}</h2>

                <div className="options">
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {
                        options && options.map((i)=>(
                            <button key={i} className={`singleOption ${selected && handleSelect(i)}`} onClick={()=> handleCheck(i)} disabled={selected}>
                                {i}
                            </button>
                        ))
                    }

                </div>
                <div className="controls">
                    <Button onClick={handleQuit} variant="contained" color="secondary" size="large" style={{width: 185}} href="/">Quit</Button>
                    <Button onClick={handleNext} variant="contained" color="primary" size="large" style={{width: 185}}>Next Question</Button>
                </div>
           </div>
        </div>
    );
    
}

export default Question;