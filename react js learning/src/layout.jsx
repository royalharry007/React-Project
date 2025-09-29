import { useState } from "react";
import questions from "./assets/questions";
import './Quiz.css'
export const Layout = () =>{

    let [index, setIndex] = useState(0);
    let [data] = useState(questions);
    let [lock, setLock] = useState(false)

    //It is use to select which li is clicked and how to validate the correct ans
    const checkAns = (el , ans)=>{ 

       if(lock == false){
            if(data[index].correctIndex === ans){
            el.target.classList.add("correct");
            setLock(true);
        }
        else{
            el.target.classList.add("wrong");
            setLock(true);  
        }
        }
        
       }

       // this part is for the next button when user click on the next button the next question will be shown 

       const next = () => {
        if(lock == true){
            setIndex(index + 1);

            document.querySelectorAll("li").forEach(li => li.classList.remove("correct", "wrong"));

            
            setLock(false)

        }

       }
        

    return(
        <>
        <div className="container h-110 w-3xl mx-auto mt-10 bg-white rounded-sm">
        <h1 className="text-3xl flex justify-center items-center">Quiz App</h1>
        <hr className="border-1 mt-2"/>
            <h2 className="text-xl font-bold ml-5 mt-5">{index+1}.{data[index].question}</h2>
            <ul className="space-y-3 mt-8">
                <li 
                onClick={ (el) =>{checkAns(el,1)} }
              
                className="font-serif h-10 w-2xl ml-5 border flex items-center text-xl pl-2 hover:cursor-pointer">
                    {data[index].option1}
                </li>

                <li
                onClick={ (el)=> {checkAns(el, 2)} }
                 className="font-serif h-10 w-2xl ml-5 border flex items-center text-xl pl-2 hover:cursor-pointer">
                    {data[index].option2}
                 </li>

                <li 
                onClick={ (el)=> {checkAns(el, 3)} }
                className="font-serif h-10 w-2xl ml-5 border flex items-center text-xl pl-2 hover:cursor-pointer">
                    {data[index].option3}
                </li>

                <li 
                onClick={ (el)=> {checkAns(el, 4)} }
                className="font-serif h-10 w-2xl ml-5 border flex items-center text-xl pl-2 hover:cursor-pointer">
                    {data[index].option4}
                </li>

            </ul>
           <button
           onClick={next}
            className="bg-blue-500 mt-5 p-3 w-40 rounded-2xl flex items-center justify-center mx-auto ">
            Next
            </button>
           <div className="text-sm  flex items-center justify-center mt-5">
            {index+1} of {data.length} Question
            </div>
        </div>
    
        </>
        

    );

}