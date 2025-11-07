import React, {useState} from 'react';

const Counter = () => {
    const [licznik, setLicznik] = useState(0);
    const [tekst, setTekst] = useState("");
    let isLoggedIn = true;
    return (
        <div>

            <button
                value={licznik}
                onClick={() => setLicznik(licznik+1)}>
                {licznik}
            </button>
            <input type="text"
                   value={tekst}
                   onChange={(e) => setTekst(e.target.value)} />
            <p>{tekst}</p>
            
            { isLoggedIn ? <p>Witaj użytkowniku.</p> : <p>Zaloguj się</p>}
        </div>
    );
};

export default Counter;
