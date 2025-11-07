import React, {useEffect} from 'react';

const Informacje = ({wiadomosc}) => {
    useEffect(() => {
        console.log("Treść wiadomości: " + wiadomosc);
    },[wiadomosc]);
    return (
        <div>
            
        </div>
    );
};

export default Informacje;
