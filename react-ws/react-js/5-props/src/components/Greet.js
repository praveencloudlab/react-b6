import React from 'react';

const Greet = (props) => {

    console.log(props);
    //props.pname='Ozvitha' -> invalid operation. xoz props by defaukt immutable

    return (
        <div>
            <h1>Greet Component</h1> <hr/>
            <h2>Hello dear {props.pname}</h2>
            <h2>Message: {props.msg}</h2>
        </div>
    );
};

export default Greet;