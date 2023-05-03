import React from 'react';

export function useMyHook(){
    function fun1(){console.log('its fun1');}
    function fun2(){}
    function fun3(){}

    return{
        fun1,fun2,fun3
    }
}




