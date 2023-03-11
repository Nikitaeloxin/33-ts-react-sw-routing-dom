import React, {useContext, useEffect} from 'react';
import {defaultHero, friends, navItems, StarWarsContext, starWarsInfo} from "../utils/constants";
import styles from '../css/farGalaxy.module.css';
import {useNavigate, useParams} from "react-router-dom";

const StarWars = () => {
    // const {heroId = ''} = useParams();
    // const {setHero: changeHero} = useContext(StarWarsContext);
    // const navigate = useNavigate();
    //
    // useEffect(() => {
    //     if (!friends.includes(heroId)) {
    //         navigate(`/${navItems[2].route}/${defaultHero}`);
    //     } else {
    //         changeHero(heroId);
    //     }
    // }, [heroId]);
    const {setNav} = useContext(StarWarsContext);
    useEffect(() => {
        setNav(navItems[2].route)
    }, [])
    return (
        <div className={styles.farGalaxy}>
            <p>{starWarsInfo}</p>
        </div>
    );
};

export default StarWars;