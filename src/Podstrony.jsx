import React from 'react';
import {BrowserRouter, Link, Route, Routes, useNavigate, useParams} from "react-router-dom";

function Home() {
    return(
        <>
            <h2>Strona główna</h2>
        </>
    )
}
function About() {
    const navigate = useNavigate();
    const kontakt = () =>{
        navigate("/contact");
    }
    return(
        <>
            <h2>O nas</h2>
            <button onClick={kontakt}>Przejdź do kontakt</button>

        </>
    )
}
function Contact() {
    return(
        <>
            <h2>Kontakt</h2>
        </>
    )
}
function NotFound() {
    return(
        <>
            <h2>Strona nie została odnaleziona</h2>
        </>
    )
}
function User() {
    const {id, imie} = useParams();
    return(
        <>
            <h2>Id użytkownika {id} imię: {imie}</h2>
        </>
    )
}

const Podstrony = () => {
    return (
        <div>
            <BrowserRouter>
                <ul>
                    <li><Link to="/">Strona główna</Link></li>
                    <li><Link to="/about">O nas</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                    <li><Link to="/user/1/Andrzej">Użytkownik 1</Link></li>
                    <li><Link to="/user/2/Paweł">Użytkownik 2</Link></li>
                    <li><Link to="/user/3/Jan">Użytkownik 3</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/user/:id/:imie" element={<User/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Podstrony;
