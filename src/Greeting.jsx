import React from 'react';

const Greeting = (props) => {
    return (
        <div>
            <h4>Witaj {props.imie}</h4>
        </div>
    );
};

export default Greeting;
