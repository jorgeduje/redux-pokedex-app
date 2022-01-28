import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {InitialFetch, ErrorControl} from "../redux/actions/Actions"
import axios from 'axios'

export const FetchComponent = () => {

    const dispatch = useDispatch()

    const initialData = useSelector( state => state.rootReducer.initialData)

    useEffect(() => {
        
        const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=200'

        if(initialData.length === 0){

            axios.get(url)
            .then(resp => resp.data.results?.map((item)=>
                axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
                .then(resp => dispatch(InitialFetch(resp.data)))
                .catch(err => dispatch(ErrorControl(err)))
            ))
            .catch(err => dispatch(ErrorControl(err)))
        }

       
        
    }, [ dispatch, initialData.length ]);

  return <div></div>;
};

