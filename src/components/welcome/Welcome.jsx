import React from 'react'

function Welcome(props) {

    function removeName() {
        const updateNames = props.names.filter(name => name !== props.name);

        props.setNames(updateNames);
    }

    return (
        <div onClick={removeName} className='welcome'>Welcome, {props.name}</div>
    )
}

export default Welcome