import React from 'react'

/* 
    ! Challenge Details:
        - Build out a Counter Component which will have two buttons (+), (-) and a span element that will take its value from a count state variable.
        - This should be within it's own folder.
        - Create two functions that will work as onClick event listeners.
        - One function will increment the current state.
        - One function will decrement the current state.
        
        Hard Mode:
        - Leave the count inside App.jsx

        * App.css has available styling for this component
    */

function Counter(props) {

    function countDown() {
        props.setCount(props.count - 1);
    }

    function countUp() {
        props.setCount(props.count + 1);
    }

    return (
        <div className='counter'>
            <button onClick={countDown}>-</button>
            <span>{props.count}</span>
            <button onClick={countUp}>+</button>
        </div>
    )
}

export default Counter