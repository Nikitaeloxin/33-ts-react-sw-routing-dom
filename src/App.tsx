import React, {useState} from "react";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {defaultHero, navItems, StarWarsContext} from "./utils/constants";

const App = () => {

    const [hero, setHero] = useState(defaultHero);
    const [nav,setNav] = useState(navItems[0].route)
    return (
        <div className="container-fluid">
            <StarWarsContext.Provider value={
                {
                    hero, setHero,nav,setNav
                }
            }>
                <Header/>
                <Main/>
            </StarWarsContext.Provider>
            <Footer/>
        </div>
    );

}

export default App;
