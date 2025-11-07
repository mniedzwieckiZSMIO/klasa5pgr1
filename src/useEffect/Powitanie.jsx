import React, {useEffect, useState} from 'react';

const Powitanie = () => {
    const [tekst, setTekst] = useState("Klasa 5P");
    useEffect(() => {
        console.log("Komponent został wyrenderowany!");
    });
    return (
        <div>
            <h3>Powitanie - {tekst}</h3>
            <button onClick={()=>setTekst("Grupa 1")}>Zmień tekst</button>
        </div>
    );
};

export default Powitanie;
