import React, { useState } from 'react'

function AddUser({names, setNames}) {

    // console.log(props);
    const [ text, setText ] = useState('');

    const handleChange = e => {
        // console.log(e.target.value); // We use the event to gain access to the "targets value"
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Submitted')
        // console.log(names, setNames)
        let addUser = [...names];
        addUser.push(text); // using our state variable
        
        setNames(addUser); // replacing old array with a new array
        setText(''); // resetting our text state

    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input 
                onChange={e => handleChange(e)}
                value={text}
                type='text'
                />
            <br />
            <input type="submit" value="Add" />

        </form>
    )
}

export default AddUser