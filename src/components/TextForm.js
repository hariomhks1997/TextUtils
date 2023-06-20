import React,{useState}from 'react'

export default function TextForm(props) {
    const handleupclick=()=>{
        let newText=text.toUpperCase();
     setText(newText)
    }
    const handleOnchange=(event)=>[
     setText(event.target.value)
    ]
    const [text,setText]=useState('Enter text here')
  return (
    <div>
  <h1>{props.heading}</h1>     
<div className="mb-3">
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnchange} rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleupclick}>Convert To Uppercase</button>
    </div> 
  )
}
