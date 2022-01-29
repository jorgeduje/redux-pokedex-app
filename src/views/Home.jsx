import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';

import male from "../img/maleTrainer.png"
import female from "../img/femaleTrainer.png"

import { FloatingCards } from '../components/FloatingCards';
import { Loader } from '../components/Loader';

import { FilterSelector, ResetValue, searchPokemon } from '../redux/actions/Actions';




export const Home = () => {

  const [nameInput, setNameInput] = useState("")

  const dispatch = useDispatch()

  const userInfo = useSelector( store => store.rootReducer.infoUser)
  const InitialData = useSelector( store => store.rootReducer.initialData)
  const navigate = useNavigate()

  const PokemonType = ( param )=>{
      dispatch( FilterSelector( param ) )
      navigate(`/pokedex/type/${param}`)
  }


  useEffect(()=>{
    dispatch(ResetValue())

  }, [dispatch])

 
  const pokeSearch = ( e )=>{

    e.preventDefault()

    const nameTrim = nameInput.trim()

    const doesExist = InitialData.filter( pokemon => pokemon.name === nameTrim)

   if(doesExist.length > 0){

      dispatch(searchPokemon(nameTrim))
      navigate(`/pokedex/pokemon/${nameTrim}`)

   }else{

    navigate(`/pokedex/${nameTrim}`)

   }


  }

  return (

    <div className='container-home'>
     
        <div className='container-img-home'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
        </div>

        <section className='container-avatar'>
            <ul>
              <div className='name'>
                <li>Name: {userInfo?.name}</li>
              </div>
              <div className='nick-name'>
                <li>Known as: {userInfo?.nickName}</li>
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png" alt="" />
            </ul>
     
            <div className='container-img-avatar'>
                {
                  userInfo?.male === true ?
                  <img src={male} alt='' />
                  :
                  <img src={female} alt=''/>
                }
            </div>
          
        </section>

        <form onSubmit={(e)=>pokeSearch(e)}>
              <input type="text" onChange={(e)=> setNameInput(e.target.value.toLowerCase())}/>
             <button type='submit'><i className="fab fa-searchengin"></i></button>
        </form>

        <ul>
          <li onClick = {()=> PokemonType('grass')}><i className="fas fa-leaf grass pointer"></i></li>
          <li onClick = {()=> PokemonType('fire')}><i className="fas fa-fire fire pointer"></i></li>
          <li onClick = {()=> PokemonType('water')}><i className="fas fa-tint water pointer"></i></li>
          <li onClick = {()=> PokemonType('rock')}><i className="fas fa-gem rock pointer"></i></li>
          <li onClick = {()=> PokemonType('fighting')}><i className="fas fa-universal-access fighting pointer"></i></li>
          <li onClick = {()=> PokemonType('ground')}><i className="fas fa-mountain ground pointer"></i></li>
          <li onClick = {()=> PokemonType('bug')}><i className="fas fa-bug bug pointer"></i></li>
          <li onClick = {()=> PokemonType('psychic')}><i className="fas fa-brain psychic pointer"></i></li>
          <li onClick = {()=> PokemonType('normal')}><i className="fas fa-wind normal pointer"></i></li>
          <li onClick = {()=> PokemonType('electric')}><i className="fas fa-bolt electric pointer"></i></li>
          <li onClick = {()=> PokemonType('poison')}><i className="fas fa-skull-crossbones poison pointer"></i></li>
          <li onClick = {()=> PokemonType('ghost')}><i className="fas fa-ghost ghost pointer"></i></li>
        </ul>
        
        <section className='main-container-cards'>
          {
            InitialData.length === 1?
            <Loader/>:
            <div className='container-cards'>
            {
              InitialData?.map((item, index) =>
                <FloatingCards
                  key={index}
                  id={item.id}
                  name={item.name}
                  species={item.types[0].type.name}
                  avatar={item.sprites.other.dream_world.front_default}
                />
              )
            }
          </div>
          }
        </section>


    </div>

  )

};
