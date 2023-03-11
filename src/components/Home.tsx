import React, {useContext, useEffect} from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import {useNavigate, useParams} from "react-router-dom";
import {defaultHero, friends, navItems, StarWarsContext} from "../utils/constants";
import {pageWrapper} from "../hoc/pageWrapper";

const Home = () => {

    const {setNav} = useContext(StarWarsContext);
    useEffect(() => {
        setNav(navItems[0].route)
        }, [])
    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    );
};

export default pageWrapper(Home);