import React, {useState} from 'react';
import {dane} from './dane.js';
const Egzamin = () => {
    const [obrazy, setObrazy] = useState(dane);
    const [filtry, setFiltry] = useState({
        kwiaty: true,
        zwierzeta: true,
        auta: true
    });
    const filtruj = (e) => {
        const { name, checked} = e.target;
        setFiltry((prev) => ({ ...prev, [name]: checked }));
    }
    const filtrujDane = obrazy.filter( img => {
        if (img.category === 1 && filtry.kwiaty) return true;
        if (img.category === 2 && filtry.zwierzeta) return true;
        if (img.category === 3 && filtry.auta) return true;
        return false;
    });
    const policzPobrania = (id) => {
        setObrazy(prev => prev.map( img =>
            img.id === id ? { ...img, downloads: img.downloads + 1 } : img
        ));
    }
    return (
        <>
            <h1>Kategorie zdjęć</h1>
            <label htmlFor="">
                <input type="checkbox" name="kwiaty"
                       onChange={filtruj}
                       checked={filtry.kwiaty} />Kwiaty
            </label>
            <label htmlFor="">
                <input type="checkbox" name="zwierzeta"
                       onChange={filtruj}
                       checked={filtry.zwierzeta} />Zwierzęta
            </label>
            <label htmlFor="">
                <input type="checkbox" name="auta"
                       onChange={filtruj}
                       checked={filtry.auta} />Samochody
            </label>
            <div className="galeria">

                {
                    filtrujDane.map(item =>
                        <div key={item.id}>
                            <img className="obraz"
                                 src={item.filename}
                                 alt={item.alt} />
                            <h4>Pobrań: {item.downloads}</h4>
                            <button
                                onClick={()=>policzPobrania(item.id)}>
                                Pobierz
                            </button>
                        </div>
                    )
                }
            </div>
        </>

    );
};

export default Egzamin;


// ‒ W stanie początkowym włączone są wszystkie pola switch
// co powoduje wyświetlenie wszystkich zdjęć
// ‒ Wyświetlane są tylko zdjęcia z kategorii dla której jest włączone pole switch (obraz 4)
// ‒ Gdy przycisk „Pobierz” zostanie kliknięty, wzrasta o jeden liczba pobrań dla danego zdjęcia. Liczba
//                     pobrań jest zapisywana w tablicy z obiektami zdjęć, co na bieżąco powoduje wyświetlenie tej
//                     modyfikacji na ekranie (obraz 5)
// ‒ W aplikacji zastosowano pętle oraz warunki do wyświetlebnloiak ów zdjęć. Aplikacja jest napisana
//                     uniwersalnie i działa poprawnie też dla innej liczby zdjęć
// ‒ Aplikacja powinna być zapisana czytelnie, z zachowaniem zasad czystego formatowania kodu, należy
//                     stosować znaczące nazwy zmiennych i funkcji.