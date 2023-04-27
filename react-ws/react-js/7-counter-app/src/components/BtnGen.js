import React,{useState} from 'react';

const BtnGen = ({btnLable,hitsEvent}) => {

    const[hitCount,setHitCount] =useState(0)

    function handleBtnCount(){
        setHitCount(hitCount+1)
        hitsEvent(btnLable)
    }
    return (
            <div className='card card-body'>
            <span><h2>{hitCount}</h2></span>
            <hr/>
             <button onClick={()=>handleBtnCount()} className='btn btn-primary'><h2>{btnLable}</h2></button>
            </div>
    );
};

export default BtnGen;