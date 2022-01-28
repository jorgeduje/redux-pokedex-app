
import React from "react";


export const Stats = ({ ability, integer,species })=>{

    const margin = 110 - integer
    const marginTotal = `${margin}%`
   



    return(

        <div className="contain-stat">
            <article style={{marginRight: marginTotal}} id={species}>   
            {/* <p>{ability === "hp" ? "Health Power" : ability}: </p> */}
            <p><i className={ability === "hp" ? "fas fa-heartbeat" :
                 ability === "attack" ? "fas fa-chess-knight" :
                 ability === "defense" ? "fas fa-shield-alt" :
                 ability === "special-attack" ? "fas fa-fighter-jet" :
                 ability === "special-defense" ? "fas fa-shield-virus" : "fas fa-tachometer-alt"}>
                </i>
                
            </p> 
                <div className="bright" ></div>
            </article>
        </div>
    )
}

