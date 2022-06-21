import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({question}) => {
 const [toggle, setToggle]= React.useState(false)
 const ToggleHandler=()=>{
  setToggle(!toggle)
 }
  return (
    <article className='question'>
    <header>
      <h4>{question.title}</h4>
      <button className='btn' onClick={ToggleHandler}>{!toggle ? <AiOutlinePlus />:<AiOutlineMinus />}</button>
    </header>
    {toggle &&<p>{question.info}</p>}  
    </article>
  )
};

export default Question;
