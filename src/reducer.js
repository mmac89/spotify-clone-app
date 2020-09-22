import { findAllByDisplayValue } from "@testing-library/react"

export const initialState = {
    user: null, 
    spotify: null,
    top_artists: null,
    playlists:[],
    playing: false,
    item: null,
    discover_weekly: null,

    //REMOVE BEFORE PRODUCTION
    // token: 'BQAIOaE30CVofOxNJyqaJRK82qoG_6EDZ9gHEntZ4ZxFLUIZnAA9NkPfA3yFQF4_Aj8ooC2S67yxyfApZ8SCID-C23p2a2T827v3epHwAFa6_ToFIW4mOvbwtBEqsreXLndf71SaSWqyhGH6xZteYKsRsKCl0TGHc7U65qoZLqibBRn6ZR_il',
};


const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [Payload]

    switch(action.type) {
        case "SET_USER":
            return {
                ...state, 
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state, 
                discover_weekly: action.discover_weekly,
            };
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing,
            };
        case 'SET_ITEM':
            return {
                ...state,
                item: action.item,
            };
        case 'SET_TOP_ARTISTS':
            return {
                ...state,
                top_artists: action.top_artists,
            }
        default:
                return state;
    }

    
}

export default reducer;