import React from 'react';

const StoryBox = (props) => {
    let{storyTitle,author,type}=props
    return (
        <div>
            <h1>Story Box</h1> <hr/>

            <h2>Title: {storyTitle}</h2>
            <h2>Author: {author}</h2>
            <h2>Story Type: {type}</h2>

            
        </div>
    );
};

export default StoryBox;