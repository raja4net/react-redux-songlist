import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: "I want it that way",
            duration: "3:24"
        },
        {
            title: "Barbie Girl",
            duration: "4:02"
        },
        {
            title: "Genie in a bottle",
            duration: "2:30"
        },
        {
            title: "Words",
            duration: "2:34"
        }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});