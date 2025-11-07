import React, {useEffect, useState} from 'react';

const LicznikZprogiem = () => {
    const [licznik, setLicznik] = useState(0);
    const [komunikat, setKomunikat] = useState("");
    useEffect(() => {
        if(licznik > 10){
            setKomunikat("Uwaga! Osiągnięto limit kliknięć.");
            console.log("Uwaga! Osiągnięto limit kliknięć.");
        }else{
            setKomunikat("");
        }

    },[licznik]);
    return (
        <div>
            <h3>Licznik - {licznik}</h3>
            <button onClick={()=>setLicznik(prev=>prev+1)}>Zwiększ licznik</button>
            {
                komunikat && <p style={{color:"red"}}>{komunikat}</p>
            }
        </div>
    );
};

export default LicznikZprogiem;
