import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {LogInUser} from "../redux/actions/Actions"
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const [ logValues, setLogValues ] = useState({name:'', nickName:'', male:false, female:false})
  const dispatch = useDispatch()
  const submit = (e)=>{
    e.preventDefault()
    if(logValues?.name.length >= 4){
      dispatch(LogInUser(logValues))
      navigate('/pokedex')
      e.target.reset()
      setLogValues({name:''})
    }else{
      setLogValues({...logValues, name:'Character should be > 4 characters'})
    }
  }

  return(
    <div className='container-login'>

      <div className='logo-image'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
        <div className='spinning-o'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png" alt="" />
        </div>
      </div>

    
      <form onSubmit={(e)=> submit(e)}>

        <section>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id='name'
              value = {logValues?.name || ""}
              onChange={(e)=> setLogValues({...logValues, name: e.target.value})}
            />
        </section>

        <section>
            <label htmlFor="nickname">Traineer Nickname</label>
            <input type="text" id='nickname' onChange={(e)=> setLogValues({...logValues, nickName: e.target.value})}/>
        </section>

       

        <section className='container-radio'>

            <div>
              <label htmlFor="male">Male</label>
              <input type="radio" id='male' name='gender' onChange={(e)=> setLogValues({...logValues, male: e.target.checked, female:false})}/>
            </div>

            <div>
              <label htmlFor="female">Female</label>
              <input type="radio" id='female' name='gender' onChange={(e)=> setLogValues({...logValues, male: false, female: e.target.checked})}/>
            </div>

        </section>

        <button type="submit" >Enter</button>
      </form>

    </div>  

      
  )
};
