import React, { useContext, useReducer } from "react";
import { useEffect } from "react";
import reducer from "./reducer";
import {data} from './data';

const AppContext = React.createContext();

// const API = "http://safdarapi.herokuapp.com";

const intialState = {
  name: "",
  image: "",
  para: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Sheheryar Khan",
        image: "./images/about1.png",
        para: "I'm Sheheryar Khan, a talented 3D artist and a high school student. Even though I'm a student of pre-engineering, I have a knack for 3D modeling and animations and to implement these to my Game-Dev hobby.",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Sheheryar Khan",
        image: "./images/hero.svg",
        para: "Hello! I'm Sheheryar Khan, a 3D artist, who enjoys making 3D models and animations. I'm a Pre-Engineering high school student, and want to persue Computer Science major.",
        
      },
    });
  };

  // to get the api data

  // const getServices = async (url) => {

  //     const res = await fetch(url);
  //     const data = await  res.json();
  //     console.log(data)
  //     dispatch({ type: "GET_SERVICES", payload: data });

  // };

  



  // dispatch({ type: "GET_SERVICES", payload: data });


  // to call the api

  

  // fetch(API)
  //   .then((res) => res.json())
  //   .then((DDD) => setApiData(DDD));

  // const getServices = async () =>{
  //   const res = await fetch(API);
  //   const data = await res.json();
  //   dispatch({ type: "GET_SERVICES", payload: data });
  // }

  // getServices();

  useEffect(() => {
    // getServices();
    dispatch({ type: "GET_SERVICES", payload: data })
    
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
