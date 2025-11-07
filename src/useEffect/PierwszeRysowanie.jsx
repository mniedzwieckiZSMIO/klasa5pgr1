import React, {useEffect} from 'react';

const PierwszeRysowanie = () => {
    useEffect(() => {
        console.log('Komponent został uruchomiony tylko raz!');
    }, []);
    return (
        <div>
            <h3>Zadanie 2</h3>
        </div>
    );
};

export default PierwszeRysowanie;
