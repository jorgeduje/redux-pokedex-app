
import React, { useState } from "react";
import { useSelector } from "react-redux";

import {Stats} from "../components/Stats"

import pokebola from "../img/PokeballGray.png"


export const SingledOutPokemon = ()=>{

    const singlePoke = useSelector(state => state.rootReducer.singlePoke)
    const [ pokemon ] = singlePoke

    const [ toggleOne, setToggleOne ] = useState(false)
    const [ toggleTwo, setToggleTwo ] = useState(false)
    const [ toggleThree, setToggleThree ] = useState(false)
    const [ toggleFour, setToggleFour ] = useState(false)



    const settingsToggle = ( param ) =>{

        if( param === 1){

            setToggleOne(true)

        }else if(param === 2){

            setToggleTwo(true)

        }else if(param === 3){

            setToggleThree(true)

        }else if(param === 4){

            setToggleFour(true)

        }

    }


    return ( 

        <div className="container-single-poke">

            <header id={pokemon.types[0].type.name}>

                <div className="header-text">
                    <span>{pokemon.name}</span>
                    <span>#{pokemon.id}</span>
                </div>

                <div className="pokeball">
                    <img src={pokebola} alt="" />
                </div>

                <div className="container-img-single">
                    <img src={pokemon?.sprites?.other?.dream_world?.front_default} alt="" />
                </div>

            </header>

            <section className="">

               <article className="single-type">
                    <h3>Type: {pokemon.types[0].type.name} </h3>
               </article>

                <article className="container-sprites">  
                    <img src={pokemon?.sprites?.front_shiny} alt="" />
                    <img src={pokemon?.sprites?.back_shiny} alt="" />
                    <img src={pokemon?.sprites?.front_default} alt="" />
                    <img src={pokemon?.sprites?.back_default} alt="" />
                    <div className="container-poke-effect">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png" onClick={()=>settingsToggle(1)} className={toggleOne ? "fade" : null} alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png" onClick={()=>settingsToggle(2)} className={toggleTwo ? "fade" : null} alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png" onClick={()=>settingsToggle(3)} className={toggleThree ? "fade" : null} alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png" onClick={()=>settingsToggle(4)} className={toggleFour ? "fade" : null} alt="" />
                    </div>
                </article>

                <article>
                    <h3 className="abilititi-h3">Abilities Stats</h3>
                    <div className="container-stats">
                        {
                            pokemon?.stats?.map( element => 
                            <Stats 
                                    key={element?.stat?.name}
                                    ability={element?.stat?.name}
                                    integer={element?.base_stat}
                                    species={pokemon?.types[0]?.type?.name}
                                  
                            />
                            )
                        }
                    </div>
                </article>

            </section>
            
        </div>
    )
}

