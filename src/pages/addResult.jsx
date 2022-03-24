import React from "react";
import { createQuiz, updateQuiz, getQuiz } from "../databaseFunctions/quizzes";
import "@aws-amplify/ui-react/styles.css";
import { Form, Button, FloatingLabel, Dropdown } from "react-bootstrap";
import { Auth, Storage } from "aws-amplify";
import { QuizQuestion, BeeQuizResult } from "../components";

import Amplify, { Hub } from "aws-amplify";
import config from "../aws-exports";
import {useState} from "react";
Amplify.configure(config);
/* Add Result Function handles adding and deleting results*/
function AddResult() {
  /* array of results */
  const [resultList, setResultList] = useState([
    {result:"" },
  ]);
  console.log(resultList);
  /* adds result to array */
  const handleResultAdd = () =>{
  setResultList([...resultList, { result: ""}])
  }
  
  const handleResultRemove = (index) =>{
  const list = [...resultList];
  list.splice(index, 1);
  setResultList(list);

  }
  /* on changing the text value for each result this 
  function updates the value for that result held in the resultList
  this is logged in the console atm */
  const handleResultChange = (e, index) => {
  const {name, value} = e.target;
  const list = [...resultList];
  list[index][name] = value;
  setResultList(list);

  }
  
    return (
      
      <form className='add_result'>
        <div className ="container">
          <label className="results">Results</label>
            <h2 className="font-weight-light mt-5">Results</h2>
            {/* for each result in the list render it */}
            {resultList.map((singleResult, index)=> (
                <div key={index} className = "results">
                  <div className="firstdiv">
                  {/* had to use input instead of our Quiz Result Component 
                  because the component didnt have a way for me to add the 
                  onchange event listener for a value change...possibly there
                  is a way to do this it just wasnt working for me  */}
                  <input name="result" type="text" id={index+1} 
                  value = {singleResult.result}
                  onChange = {(e) => handleResultChange(e,index)}/>
                  {/* <BeeQuizResult rNumber={index+1} 
                  value = {singleResult.result}
                  onChange = {(e) => handleResultChange(e,index)}/> */}
                  {/*adds ADD button at end of results  */}
                  {resultList.length -1 === index && resultList.length < 20 &&
                  (<Button variant="outline-primary" size="lg"
                  onClick={handleResultAdd}>
                  Add Result +
                  </Button>)}
                
                  </div>
                  {/* delete button for each result */}
                  <div className="seconddiv">
                    {resultList.length > 1 && (
                      <Button variant="outline-primary" size="lg"
                      onClick={()=> handleResultRemove(index)}>
                      Delete Result -
              </Button>
                    )}
                
                </div>
                    
                </div>
            
            ))}
          
            {/* <div className = "output">
                <h2> Output</h2>
            </div> */}
          
        </div>

      </form>

     
      
    );
  
}

export default AddResult;
