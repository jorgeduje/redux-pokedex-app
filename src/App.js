import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProtectedRoutes } from "./components/ProtectedRoutes"
import {Login} from "./views/Login"
import { Home } from "./views/Home"
import { PokemonTypeSelected } from "./views/PokemonTypeSelected"
import {FetchComponent} from "./FETCH-COMP/FetchComponent"
import { SingledOutPokemon } from "./views/SingledOutPokemon";
import { ErrorView } from "./views/ErrorView";

function App() {


  return (
   
    <BrowserRouter>
      <Routes>

          <Route path="/" element={ 
          
          <>
            <Login /> 
            <FetchComponent/>
          </>
        }/>


          <Route element={ <ProtectedRoutes /> }>

              <Route path="/pokedex" element={ <Home /> }/>
              <Route path="/pokedex/type/:type" element={ <PokemonTypeSelected /> }/>
              <Route path="/pokedex/pokemon/:name" element={ <SingledOutPokemon /> }/>
              <Route path="/pokedex/:nameError" element={ <ErrorView />}/>

          </Route>


      </Routes>
    </BrowserRouter>

  );
}

export default App;
