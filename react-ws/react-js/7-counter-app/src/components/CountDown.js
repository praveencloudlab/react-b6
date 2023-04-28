import React,{useEffect} from 'react';

const CountDown = () => {
    const Parent = () => {
        useEffect (() => {
        console.log ('') // 4
        },[])
        console.log('') // 1
        return (
           <div>
            <Child/>
           </div>
         )
        }
        
        const Child = () => {
        useEffect (() => {
        console.log('') //3
        }, [])
        console.log('') // 2
        return(
                <div></div>
               )
         }
         
    return (
        <div>
           <h1>Test</h1>
            <Parent/> ̰ ̰
        </div>
    )       
};

export default CountDown;