import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';



function App() {
  const [questions,setQuestions] = useState(data)
  console.log(questions);


  return (
    <main>
      <div className="container">
        <h3>questions and answers about login </h3>
        <section className="info">
          {
            questions.map((question)=>{
              return (
                <div>
                  <SingleQuestion key={question.id}  {...question} />
                  
                </div>
              )
            })
          }
        </section>
      </div>
    </main>

  )
  
  
}

export default App;
