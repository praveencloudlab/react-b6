import React,{useState,useEffect} from 'react';

const BtnGen = ({btnLable,hitsEvent,resetCount}) => {

    const[hitCount,setHitCount] =useState(0)


    function handleBtnCount(){
        setHitCount(hitCount+1)
        hitsEvent(btnLable)
    }

    useEffect(() => {
        // reset child hitCount value whenever the resetCount prop value changes
        setHitCount(0);
      }, [resetCount]);

    const handleReset=()=>{
        hitsEvent(-(hitCount*btnLable))
        setHitCount(0)
    }
    return (
            <div className='card card-body'>
            <span><h2>{hitCount}</h2></span>
            <hr/>
             <button onClick={()=>handleBtnCount()} className='btn btn-primary'><h2>{btnLable}</h2></button>
            <hr/>
            <button onClick={handleReset}>Reset</button>
            </div>
    );
};

export default BtnGen;