import React, { useState } from 'react'
import './AddMovie.css'
import { v4 as uuidv4 } from 'uuid'

const AddMovie = ({handelAdd}) => {

  const [text,setText]=useState('')
  const[image,setImage]=useState('')
  const[rate,setRate]=useState('')

const Add=()=>{
  handelAdd({ id:uuidv4(),title: text   , image: image    ,rate:  rate    });
  setImage('');
  setText('');
  setRate('');
  alert('va voir ton')
}
  return (
    <div className='bodyForm'>
    <div className="login">
    <h1>Add Movie</h1>
    <form >
      <input type="text" name="titre movie" placeholder="titre" required="required"  value={text} onChange={(e)=>setText(e.target.value)}   />
   
        <input
        type="text"
        name="image"
        placeholder="image"
        required="required"
        value= {image}
        onChange={(e)=>setImage(e.target.value)}
      />   <input
      type="text"
      name="rate"
      placeholder="rate"
      required="required"
      value={rate}
      onChange={(e)=>setRate(e.target.value)}
    />

      <button type="button" className="btn btn-primary btn-block btn-large"  onClick={()=>Add()}>
ADD ME       </button>
    </form>
  </div>
  </div>
  )
}

export default AddMovie
