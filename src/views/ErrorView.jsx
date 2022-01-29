import React from 'react';
import { useParams } from 'react-router-dom';

export const ErrorView = () => {

  const {nameError} = useParams()
  

  return(

      <div>
         <h1>{nameError} doesnt exist</h1>
       
      </div>
  )
};
