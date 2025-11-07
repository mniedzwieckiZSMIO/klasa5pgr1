import React, { useState, useEffect } from 'react';
import data from './data.js';  // Zakładamy że plik z danymi jest w tej samej lokalizacji i ma rozszerzenie .txt, ale należy go formatować do JSON'a

const ImageGallery = () => {
    const [images, setImages] = useState(data); // Tu powinny być sformatowane dane z pliku txt
    const [categories, setCategories] = useState([1,2,3]); // Domyślnie wszystkie kategorie są włączone

    useEffect(() => {
        setImages(data);
    }, []);
    const handleCategoryChange = (category) => () =>  {
        setCategories(prevState => prevState.includes(category) ?
            prevState.filter(cat => cat !== category) : [...prevState, category]   // Włącz inną kategorię lub ją usuń z tablicy aktywnych
        );
    }
    const handleDownload = (id) =>  () => {
        setImages(prevState => prevState.map(image => image.id === id ? {...image, downloads: image.downloads + 1} : image));
    };

    return (
        <div>
            <h1>Kategorie zdjęć</h1>
            Kwiaty <input type="checkbox" checked onChange={handleCategoryChange(1)} />
            Zwierzęta <input type="checkbox" checked onChange={handleCategoryChange(2)} />
            Samochody <input type="checkbox" checked onChange={handleCategoryChange(3)} />

            {images.filter(({category}) => categories.includes(category)) // Filtruj zdjęcia według aktywnych kategorii
                .map(({id, alt, filename, downloads}, index) =>
                    <div key={index} style={{margin: '5px', borderRadius: '5px'}}>
                        <img src={`./assets/${filename}`} alt={alt}/>
                        <h4>Pobrane: {downloads}</h4>
                        <button onClick={handleDownload(id)}>Pobierz</button>
                    </div>
                )}
        </div>
    );
};

export default ImageGallery;
