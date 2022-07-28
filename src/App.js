import './App.css';
import { createContext } from "react";
import ClassBasedComponent from "./components/ClassBasedComponent";
import ClassComponent from "./components/ClassComponent";
import ComponentArray from "./components/ComponentArray";
import ComponentWill from "./components/ComponentWill";
import FunctionalComponentHook from "./components/FunctionalComponentHook";
import FunctionalBasedComponent from "./components/FunctionalBasedComponent";
import FunctionalHoc from "./components/FunctionalHoc";
import UseStateEffect from "./components/UseStateEffect";
import ErrorBoundaries from './ErrorBoundaries';

import { useContext } from 'react';
import Search from "./comp/search";
import MovieList from "./comp/movieList";
import { GlobalContext } from "./GlobalContext";

export const Context = createContext("light");
console.log(Context);

function App() {
  const { movieList } = useContext(GlobalContext);
  return (
    <Context.Provider value="red">
      <div className="App" style={{ background: movieList && movieList.length > 0 && "lightblue" }}>
        <Search />
        <MovieList />
        <hr />
        <ErrorBoundaries> 
          <ClassComponent />
        </ErrorBoundaries>
        <hr />
        <ClassComponent />
        <FunctionalComponentHook />
        <FunctionalHoc />
        <hr />
        <ClassBasedComponent />
        <hr />
        <ComponentWill />
        <hr />
        <UseStateEffect />
        <hr />
        <FunctionalBasedComponent />
        <hr />
        <ComponentArray />
      </div>
    </Context.Provider>
  );
}

export default App;
