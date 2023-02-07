import React, { useState } from "react";
import image from "./img/image.gif";

export function Calculator()  {
    
    const[currentNumber, setcurrentNumber] = useState("0");    
    const[firstnum, setfirstnum] = useState(0);       
    const[operator, setoperator] = useState("$"); 
    const[history, sethistory] = useState("");
    

    const [lists, setList] = React.useState(["History Appears below....."]);
    
    const writehistory = (text: string) => {
        setList([...lists, text]);
      }   

    const setclear = () => {
        setcurrentNumber("0");
    }

    const clearhistory = () => {
        setList([]);
    }

    //switch case to select the respective(digits/operations) button clicked
    const setdigit = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button: HTMLButtonElement = event.currentTarget;

        switch (true){
            
        case (!isNaN(parseInt(button.name)) && currentNumber==="0"):
            setcurrentNumber(button.name);
            break;
        
        case (currentNumber.split(".").length===1 && currentNumber.charAt(currentNumber.length-1)!='.' && ((button.name.includes('.') || !isNaN(parseInt(button.name))))):    
            setcurrentNumber(currentNumber + button.name);
            break;
        

        // case (currentNumber.charAt(currentNumber.length-1)!='.' && button.name.includes('.')):  
        // alert("character is " + currentNumber.charAt(currentNumber.length-1))      
        //     setcurrentNumber(currentNumber + button.name);
        //     break;
        

        case (!isNaN(parseInt(button.name)) && parseInt(currentNumber)>0):                   
            setcurrentNumber(currentNumber + button.name);
            break;

        case button.name.includes('/'):     
                       
              setfirstnum(parseInt(currentNumber))
              setoperator("/")
              setcurrentNumber("0");
              break; 

        case button.name.includes('*'):{
                   
            setfirstnum(parseInt(currentNumber))
            setoperator("*")
            setcurrentNumber("0");
            break;
            }

        case button.name.includes('+'):     
                  
          setfirstnum(parseInt(currentNumber))
          setoperator("+")          
          setcurrentNumber("0");
          break; 

        case button.name.includes('-'):{
            
            setfirstnum(parseInt(currentNumber))
            setoperator("-")
            setcurrentNumber("0");
            break;
        }

        }
    };

    const calculate = () => {
        
    var output=0;
  
        switch (operator){

            case "+":
                output = firstnum + parseInt(currentNumber)     
                setcurrentNumber(output.toString())
                sethistory("Addition  Performed --> " + firstnum + " + " + parseInt(currentNumber) + " = " + output)
                writehistory("Addition Performed --> " + firstnum + " + " + parseInt(currentNumber) + " = " + output)
                setoperator("");
                
                break;

            case "-":
                output = firstnum -  parseInt(currentNumber)     
                setcurrentNumber(output.toString())
                sethistory("Addition Performed --> " + firstnum + " - " + parseInt(currentNumber) + " = " + output)
                writehistory("Subtraction Performed --> " + firstnum + " - " + parseInt(currentNumber) + " = " + output)
                setoperator("");
                
                break;

            case "*":
                output = firstnum * parseInt(currentNumber)     
                setcurrentNumber(output.toString())
                sethistory("Multiplication Performed --> " + firstnum + " * " + parseInt(currentNumber) + " = " + output)
                writehistory("Multiplication  Performed --> " + firstnum + " * " + parseInt(currentNumber) + " = " + output)
                setoperator("");
                
                break;

            case "/":
                output = firstnum / parseInt(currentNumber)     
                setcurrentNumber(output.toString())
                sethistory("Division  Performed --> " + firstnum + " / " + parseInt(currentNumber) + " = " + output)
                writehistory("Division  Performed --> " + firstnum + " / " + parseInt(currentNumber) + " = " + output)
                setoperator("");
                
                break;
             }
    }
    

    return<>   
    <body style={{ backgroundImage:`url(${image})` }}>
    <input type="text" name="input" placeholder="0" value={currentNumber} width="30" />

    <button className="button" name="=" onClick={calculate}>=</button> 

    <table>
            <tbody>                          
               
               <tr>
                    <th><button className="button" name="7" onClick={setdigit}  >7</button> </th>
                    <th><button className="button" name="8" onClick={setdigit}  >8</button> </th>
                    <th><button className="button" name="9" onClick={setdigit} >9</button> </th>
                    <th><button className="button" name="/" onClick={setdigit}  >/</button> </th>
                
                </tr>
                <tr>
                    <th><button className="button" name="4" onClick={setdigit} >4</button> </th>
                    <th><button className="button" name="5" onClick={setdigit}  >5</button> </th>
                    <th><button className="button" name="6" onClick={setdigit}  >6</button> </th>
                    <th><button className="button" name="*" onClick={setdigit}  >*</button> </th>
                
                </tr>

                <tr>
                    <th><button className="button" name="1" onClick={setdigit}  >1</button> </th>
                    <th><button className="button" name="2" onClick={setdigit}  >2</button> </th>
                    <th><button className="button" name="3" onClick={setdigit} >3</button> </th>
                    <th><button className="button" name="+" onClick={setdigit}  >+</button> </th>
                
                </tr>

                <tr>
                    <th><button className="button" name="CE"onClick={setclear}  >CE</button> </th>
                    <th><button className="button" name="0" onClick={setdigit}  >0</button> </th>
                    <th><button className="button" name="." onClick={setdigit}  >.</button> </th>
                    <th><button className="button" name="-" onClick={setdigit}  >-</button> </th>
                
                </tr>

                
            </tbody>         
    </table>

    <tbody>
        <tr> 
            <th> <button className="button" onClick={clearhistory}  >Clear History</button></th>
            
        </tr>
    </tbody>

    <div>
    <ul>
    {lists.map((history, index) => (
            <li key={index} style={{ backgroundColor: "grey" ,  height: '30px' }} >{history} </li>
        ))}
        </ul>
        </div>
        </body>

        </>
}

 