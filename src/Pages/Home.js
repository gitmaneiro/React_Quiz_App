import React, { useState } from "react";
import './Home.css';
import { Button, MenuItem, TextField } from "@mui/material";
import Categories from "../Data/Categories";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const Home= ({name, setName, fetchQuestions}) =>{

    const [category, setCategory]= useState("");
    const [difficulty, setDifficulty]= useState("");
    const [error, setError]= useState(false);
    const navigate= useNavigate();

    const submit= ()=>{
        if(!category || !difficulty || !name){
            setError(true)
            return
        }else{
            setError(false)
            fetchQuestions(category, difficulty)
            navigate("/quiz")
        }
    }

    return(
        <div className="content">
            <div className="settings">
                <span style={{fontSize: 30}}>Quiz settings</span>

                <div className="settings_select">
                    {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
                    <TextField style={{marginBottom: 25}} label="Enter your name" variant="outlined" onChange={(e)=>setName(e.target.value)}/>
                    <TextField style={{marginBottom: 30}} select  label="Select category" variant="outlined" onChange={(e)=>setCategory(e.target.value)} value={category}>
                        {
                            Categories.map((category)=>(
                                <MenuItem key={category.category} value={category.value}>
                                    {category.category}
                                </MenuItem>
                            ))
                            
                        }
                    </TextField>

                    <TextField style={{marginBottom: 30}} select  label="Select difficulty" variant="outlined" onChange={(e)=>setDifficulty(e.target.value)} value={difficulty}>       
                            <MenuItem key="Easy" value="easy">
                                Easy
                            </MenuItem>
                            <MenuItem key="Mediun" value="mediun">
                                Mediun
                            </MenuItem>
                            <MenuItem key="Hard" value="hard">
                                Hard
                            </MenuItem>   
                    </TextField>
                    <Button variant="contained" color="primary" onClick={submit}>Start Quiz</Button>
                </div>

            </div>

            <img src="/quiz.svg" className="banner" alt="quiz img"/>
        </div>
    );
    
}

export default Home;