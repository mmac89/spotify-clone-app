export const initialState = {
    user: null, 
    playlists:[],
    playing: false,
    item: null,

    //REMOVE BEFORE PRODUCTION
    token: 'BQAIOaE30CVofOxNJyqaJRK82qoG_6EDZ9gHEntZ4ZxFLUIZnAA9NkPfA3yFQF4_Aj8ooC2S67yxyfApZ8SCID-C23p2a2T827v3epHwAFa6_ToFIW4mOvbwtBEqsreXLndf71SaSWqyhGH6xZteYKsRsKCl0TGHc7U65qoZLqibBRn6ZR_il',
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
            }
        default:
                return state;
    }

    
}

export default reducer;