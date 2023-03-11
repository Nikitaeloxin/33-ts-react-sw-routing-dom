import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {defaultHero, friends, navItems, StarWarsContext} from "../utils/constants";

export const pageWrapper = (WrappedComponent:any) => function () {
    const {heroId = ''} = useParams();
    const {setHero: changeHero} = useContext(StarWarsContext);
    const navigate = useNavigate();
    const {nav} = useContext(StarWarsContext);

    useEffect(() => {
        if (!friends.includes(heroId)) {
            navigate(`/${nav}/${defaultHero}`);
        } else {
            changeHero(heroId);
        }
    }, [heroId]);

    return(
        <WrappedComponent/>)
    
}