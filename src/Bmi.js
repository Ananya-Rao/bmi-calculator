import React, { useState } from 'react';
import './style.css';
import { Button } from 'react-bootstrap';
function Bmi(){
    const [female, setFemale]=useState(false);
    const [height,setHeight]=useState(null);
    const [weight,setWeight]=useState(null);
    const [output,setOutput]=useState('');
    const [bmival,setBmival]=useState(null);
    const reset=()=>{
        setFemale(()=>false);
        setHeight(()=>0);
        setWeight(()=>0);
        setOutput(()=>'')
        setBmival(()=>null);
        // console.log(female);
        // console.log(height);
        // console.log(weight);
    }
    const calculateBMI=()=>{
        console.log(height)
        console.log(weight)
        let val=(weight/(height*height));
        setBmival('Your BMI value: '+val);
        if(val<18.5){
            female?setOutput('Hey gorgeous!! take a healthy diet. You are UNDERWEIGHT :('):setOutput('Hey handsome!! take a healthy diet. You are UNDERWEIGHT :(')
        }else if(val>=18.5 && val<25){
            female?setOutput('Hey gorgeous!! Your weight is NORMAL'):setOutput('Hey handsome!! Your weight is NORMAL')
        }else if(val>=25 && val<30){
            female?setOutput('Hey gorgeous!! take a healthy diet. You are OVERWEIGHT :('):setOutput('Hey handsome!! take a healthy diet. You are OVERWEIGHT :(')
        }else{
            female?setOutput('Hey gorgeous!! take a healthy diet. You are OBESE :('):setOutput('Hey handsome!! take a healthy diet. You are OBESE :(')
        }
    }
    return(
        
        <div className="centered">
        
        
        <Button variant="success" onClick={()=>setFemale(true)} className="but1">Female</Button>
        <Button variant="danger" onClick={()=>setFemale(false)} className="but2">Male</Button> 
        <p className="text">HEIGHT(m):</p>
        <input className="input1" type='text' value={height} onChange={(e)=>setHeight(e.target.value)} placeholder="Enter your height (in m)"></input>
        
        <p className="text">WEIGHT(kg):</p>
        <input className="input1" value={weight} type='text' onChange={(e)=>setWeight(e.target.value)} placeholder="Enter your weight (in kg)"></input>

        <Button variant="primary" onClick={calculateBMI} className="but3">Calculate</Button>
        <p className="text">{output}</p>
        <p className="text">{bmival}</p>
        <Button variant="warning" className="but4" onClick={reset}>Reset</Button>
        </div>
        
    );
}

export default Bmi;