import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Result.css';

const Result= ({name, score}) =>{

    const navigate= useNavigate();

    useEffect(()=>{
        if(!name){
            navigate('/');
        }

    }, [name, navigate]);

    return(
        <div className="result">
            <span className="tittle">Final Score: {score}</span>
            <Button variant="contained" color="secondary" size="large" style={{alignSelf: "center", marginTop: 20}} href="/">Go to HomePage</Button>
        </div>
    );
    
}

export default Result;