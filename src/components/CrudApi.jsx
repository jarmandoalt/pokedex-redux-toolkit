import React, { useEffect, useState, createRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  READ_ALL_DATA_1,
  READ_ALL_DATA_2,
  READ_ALL_DATA_3,
  STORAGE_SCAN,
} from "../reducers/crudReducer.js";
import pokedex from "../assets/pokedex.png";
import textPokedex from "../assets/textPokedex.png";
import { getPokemonList, getPokemon } from "./services/routes.jsx";
import fondo from "../assets/fondo.jpg";
import deleteFondo from "../assets/delete.png";
import loader from "../assets/pokeball.png";

const CrudApi = () => {
  const { dbPokemon1, dbPokemon2, dbPokemon3 } = useSelector(
      (state) => state.crud
    ),
    dispatch = useDispatch(),
    [loading1, setLoading1] = useState(true),
    [loading2, setLoading2] = useState(true),
    [loading3, setLoading3] = useState(true),
    refPokemon1 = createRef(),
    refPokemon2 = createRef(),
    refPokemon3 = createRef(),
    refBtnPokemon1 = createRef(),
    refBtnPokemon2 = createRef(),
    refBtnPokemon3 = createRef(),
    refPokedex = createRef(),
    refPokedex1 = createRef(),
    refPokedex2 = createRef(),
    refPokedex3 = createRef(),
    refPokedex1Text = createRef(),
    refPokedex2Text = createRef(),
    refPokedex3Text = createRef(),
    refScreen = createRef()
    

  useEffect(() => {
    loadFunctions();
  }, []);

  const loadFunctions = () => {
      loadPokemon1();
      loadPokemon2();
      loadPokemon3();
  };

  const loadPokemon1 = async () => {
    let number = Math.floor(Math.random() * (150 - 1)) + 1;
    const response = await getPokemon(number);
    if (response.status === 200) {
      dispatch(READ_ALL_DATA_1(response.data));
      setLoading1(false);
    }
  };

  const loadPokemon2 = async () => {
    let number = Math.floor(Math.random() * (150 - 1)) + 1;
    const response = await getPokemon(number);
    if (response.status === 200) {
      dispatch(READ_ALL_DATA_2(response.data));
      setTimeout(() => {
        if (loading1) {
          setLoading2(false);
        }
      }, 1000);
    }
  };

  const loadPokemon3 = async () => {
    let number = Math.floor(Math.random() * (150 - 1)) + 1;
    const response = await getPokemon(number);
    if (response.status === 200) {
      dispatch(READ_ALL_DATA_3(response.data));
      setTimeout(() => {
        if (loading2) {
          setLoading3(false);
        }
      }, 1000);
    }
  };

  const clickPokemon1 = (e) => {
    refPokemon1.current.style.filter = "brightness(100%)";
    refPokedex.current.style.zIndex = "100";
    refPokedex1.current.style.zIndex = "999";
    refPokedex1Text.current.style.zIndex = "999";
    refBtnPokemon2.current.style.pointerEvents = "none";
    refBtnPokemon3.current.style.pointerEvents = "none";
    dispatch(
      STORAGE_SCAN({
        pokemon: { id: dbPokemon1.id },
        name: dbPokemon1.species.name,
      })
    );
  };

  const clickPokemon2 = (e) => {
    refPokemon2.current.style.filter = "brightness(100%)";
    refPokedex.current.style.zIndex = "100";
    refPokedex2.current.style.zIndex = "999";
    refPokedex2Text.current.style.zIndex = "999";
    refBtnPokemon1.current.style.pointerEvents = "none";
    refBtnPokemon3.current.style.pointerEvents = "none";
    dispatch(
      STORAGE_SCAN({
        pokemon: { id: dbPokemon2.id },
        name: dbPokemon2.species.name,
      })
    );
  };

  const clickPokemon3 = (e) => {
    refPokemon3.current.style.filter = "brightness(100%)";
    refPokedex.current.style.zIndex = "100";
    refPokedex3.current.style.zIndex = "999";
    refPokedex3Text.current.style.zIndex = "999";
    refBtnPokemon1.current.style.pointerEvents = "none";
    refBtnPokemon2.current.style.pointerEvents = "none";
    dispatch(
      STORAGE_SCAN({
        pokemon: { id: dbPokemon3.id },
        name: dbPokemon3.species.name,
      })
    );
  };

  const reload = async () => {
    setLoading3(true);
    await loadFunctions();
    setTimeout(() => {
      setLoading3(false);
    }, 1500);
  }

  return (
    <div>
      <h2 className="selectionPokemon">Selecciona un Pokemon para escanearlo</h2>
      <div>
        <img className="fondo" src={fondo} alt="" />
        <img className="deleteFondo" src={deleteFondo} alt="" />
      </div>
      {loading3 ? (
        <img className="loader" src={loader} alt="" />
      ) : (
        <>
          <div>
            <button
              ref={refBtnPokemon1}
              onClick={clickPokemon1}
              className="btnPokemon1"
            ></button>
            <img
              src={`${dbPokemon1.sprites.front_default}`}
              alt="new"
              ref={refPokemon1}
              className="pokemon1"
            />
          </div>
          <div>
            <button
              ref={refBtnPokemon2}
              onClick={clickPokemon2}
              className="btnPokemon2"
            ></button>
            <img
              src={`${dbPokemon2.sprites.front_default}`}
              alt="new"
              ref={refPokemon2}
              className="pokemon2"
            />
          </div>
          <div>
            <button
              ref={refBtnPokemon3}
              className="btnPokemon3"
              onClick={clickPokemon3}
            ></button>
            <img
              src={`${dbPokemon3.sprites.front_default}`}
              alt="new"
              ref={refPokemon3}
              className="pokemon3"
            />
          </div>
          <div>
            <div>
              <div ref={refScreen} className="screen"></div>
              <img
                ref={refPokedex}
                className="textPokedex"
                src={textPokedex}
                alt=""
              />
              <img
                ref={refPokedex1}
                className="pokedex1"
                src={`${dbPokemon1.sprites.front_default}`}
                alt=""
              />
              <img
                ref={refPokedex2}
                className="pokedex2"
                src={`${dbPokemon2.sprites.front_default}`}
                alt=""
              />
              <img
                ref={refPokedex3}
                className="pokedex3"
                src={`${dbPokemon3.sprites.front_default}`}
                alt=""
              />
            </div>
            <div>
              <div ref={refScreen} className="namePokemon"></div>
              <h1 ref={refPokedex1Text} className="pokedex1Text"> {`${dbPokemon1.species.name}`} </h1>
              <h1 ref={refPokedex2Text} className="pokedex2Text"> {`${dbPokemon2.species.name}`} </h1>
              <h1 ref={refPokedex3Text} className="pokedex3Text"> {`${dbPokemon3.species.name}`} </h1>
            </div>
            <img className="pokedex" src={pokedex} alt="" />
            <div>
              <button onClick={reload} className='reload'> Buscar mas Pokemons </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CrudApi;
