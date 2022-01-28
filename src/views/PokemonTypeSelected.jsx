import React from 'react';
import { useSelector } from 'react-redux';
import { PokemonList } from '../components/PokemonList';

export const PokemonTypeSelected = () => {

 
  const dataFiltered = useSelector(store => store.rootReducer.dataFiltered)

  return(

     <div className='container-cards-types'>
       {
         dataFiltered?.map((item)=>
       
          <PokemonList 
            key={item.id}
            id={item.id}
            name={item?.forms[0]?.name}
            image= {item?.sprites?.other?.dream_world?.front_default}
            species={item?.types[0]?.type?.name}
            dispImg1 = {item?.sprites?.other?.home?.front_default}
            dispImg2 = {item?.sprites?.other?.home?.front_shiny}
          />

          )
       }
     </div>

  )
  
};
