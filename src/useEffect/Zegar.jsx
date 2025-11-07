import React, {useEffect, useState} from 'react';

const Zegar = () => {
    const [czas, setCzas] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const timer = setInterval(() => {
            setCzas(new Date().toLocaleTimeString());
            console.log("Zegar dodany");
        }, 1000);
        return () => clearInterval(timer);
    },[]);
    return (
        <div>
            <h3>Godzina: {czas}</h3>
        </div>
    );
};

export default Zegar;
