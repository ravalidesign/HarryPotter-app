import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "characters",
  initialState: {
    favoriteCharacters: [],
  },
  reducers: {
    setFavoriteCharacters: (state, action) => {
      if (state.favoriteCharacters.length < 5) {
        let newFav = [...state.favoriteCharacters];
        newFav.push(action.payload);
        return {
          ...state,
          favoriteCharacters: newFav,
        };
      }
    },
  },
});

export const { setFavoriteCharacters } = characterSlice.actions;

export default characterSlice.reducer;

export const addFavoriteCharacter = (personaje) => (dispatch) => {
  dispatch(setFavoriteCharacters(personaje));
  console.log(personaje);
};

// import {
//     SET_FAVORITES
// } from './constants'

// const Reducer = (state, action) => {
//     switch (action.type){

//         case SET_FAVORITES:{
//             if(state.favorites.length<5){
//                 const newFav = [...state.favorites];
//                 newFav.push(action.payload)
//                 return {
//                     ...state,
//                     favorites:newFav
//                 }
//             }else{
//                 return {
//                     ...state
//                 }
//             }
//         }
//         default:{

//         }
//     }

// }
// export default Reducer;
