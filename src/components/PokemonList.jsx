import React from 'react';
import { ContainerImgCard } from './ContainerImgCard';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { SingleOut } from '../redux/actions/Actions';

export const PokemonList = ({name, image, species, dispImg1, dispImg2, id}) => {


  const dispatch = useDispatch()

  
  const navigate = useNavigate()

  const getPokemon = ( param )=>{
    
    dispatch(SingleOut(param))

    navigate(`/pokedex/pokemon/${name}`)

  }


  return (

      <div className='pokemon-card' id={species} onClick={()=>getPokemon(id)}>
        <h3>{name}</h3>
        <img src={image} alt="" />
        <ContainerImgCard 
          
          img1 = {dispImg1}
          img2 = {dispImg2}
          
        />
      </div>


  )
};
