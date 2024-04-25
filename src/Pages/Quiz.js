import { CircularProgress } from "@mui/material";
import './Quiz.css';
import React, { useEffect, useState } from "react";
import Question from "../components/Question/Question";


const Quiz= ({name, questions, setQuestions, score, setScore}) =>{

    const [options, setOptions]= useState();
    const [currQuest, setCurrQuest]= useState(0);

    useEffect(()=>{
        console.log(questions);

        setOptions(questions && handleShuffle([questions[currQuest]?.correct_answer, ...questions[currQuest]?.incorrect_answers,]));

    }, [questions, currQuest]);

    console.log(options);

    const handleShuffle= (optionss)=>{
        return optionss.sort(()=> Math.random() - 0.5);
    }

    return(
        <div className="quiz">
            <span className="subtittle">Welcome, {name}</span>
            {questions ? 
            <>
                <div className="quizInfo">
                    <span>{questions[currQuest].category}</span>
                    <span>score: {score}</span>
                </div>
                
                <Question 
                  currQuest={currQuest} 
                  setCurrQuest={setCurrQuest} 
                  questions={questions} 
                  options={options} 
                  correct={questions[currQuest]?.correct_answer}
                  score={score}
                  setScore={setScore}
                  setQuestions={setQuestions}
                  ></Question>
            </> : 
            <CircularProgress style={{margin: 100}} color="inherit" size={150} thickness={1}></CircularProgress>
            }
        </div>
    );
    
}

export default Quiz;