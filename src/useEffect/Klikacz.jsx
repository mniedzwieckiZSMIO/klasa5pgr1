import React, {useEffect, useState} from 'react';

const Klikacz = () => {
    const [ilosc, setIlosc] = useState(0);
    useEffect(() => {
        console.log(`Efekt został uruchomiony. Kliknięto ${ilosc} razy.`)
    },[ilosc]);
    return (
        <div>
            <button onClick={()=>setIlosc(prev => prev + 1)}>Klikacz</button>
            <h3>Kliknięto {ilosc} razy</h3>
        </div>
    );
};

export default Klikacz;
