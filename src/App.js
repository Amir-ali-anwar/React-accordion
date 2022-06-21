import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [question,Setquestion]=useState(data)
  return (
    <main>
      <div className='container'>
      <h3>questions and answers about login</h3>
      <section className='info'>
      {
        data?.map((item)=>(
          <SingleQuestion question={item} key={item.id} />
        ))
      }
      </section>
      </div>
    </main>
  )
}

export default App;
