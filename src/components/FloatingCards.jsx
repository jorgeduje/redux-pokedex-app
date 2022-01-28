import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { SingleOut } from '../redux/actions/Actions';


export const FloatingCards = ({ id, name, species, avatar }) => {

  const dispatch = useDispatch()

  
  const navigate = useNavigate()

  const getPokemon = ( param )=>{
    
    dispatch(SingleOut(param))

    navigate(`/pokedex/pokemon/${name}`)

  }


  return (
    
      <article className="card" id={species}>
          <aside id='pokemon-avatar'>
            <img src={avatar} alt="" /> 
          </aside>
          <aside id='pokemon-description'>
                <h4>{name}</h4>
                <h4>{species}</h4>
                <button className={species} onClick={()=>getPokemon(id)}> Go </button>
          </aside>
      </article>
  );

};