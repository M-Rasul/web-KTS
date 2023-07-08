import { contentAPI } from "../api/api";
const SET_CHOSEN_CONTENT = "SET_CHOSEN_CONTENT";
const SET_CONTENT = "SET_CONTENT";
const SET_CONTENT_TYPE = "SET_CONTENT_TYPE";
const SET_USER = "SET_USER";
const ADD_COMMENT = "ADD_COMMENT";
const SET_COMMENTS = "SET_COMMENTS";
const initialState = {
    events: null,
    books: null,
    videos: null,
    files: null,
    podcasts: null,
    contentType: "",
    chosenContent: null,
    user: null,
    comments: null
}
export const contentReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CONTENT:
            state[state.contentType] = action.contentArray;
            return {...state};
        case SET_CONTENT_TYPE:
            return {...state, contentType: action.contentType};
        case SET_CHOSEN_CONTENT:
            return {...state, chosenContent: action.content};
        case SET_USER:
            return {...state, user: action.user};
        case SET_COMMENTS:
            return {...state, comments: action.comments}
        default:
            return state;
    }
}

// ACTION CREATORS
export const setContentAC = (contentArray) => ({type: SET_CONTENT, contentArray});
export const setContentTypeAC = (contentType) => ({type: SET_CONTENT_TYPE, contentType});
export const setChosenContentAC = (content) => ({type: SET_CHOSEN_CONTENT, content});
export const setUserAC = (user) => ({type: SET_USER, user});
export const setCommentsAC = (comments) => ({type: SET_COMMENTS, comments});


// THUNKS

// GET
export const getBooks = () => (dispatch) => {
        contentAPI.getBooks()
        .then(response => {
            dispatch(setContentAC(response.data));
        });
}
export const getEvents = () => (dispatch) => {
    contentAPI.getEvents()
    .then(response => {
        dispatch(setContentAC(response.data));
    });
}
export const getVideos = () => (dispatch) => {
    contentAPI.getVideos()
    .then(response => {
        dispatch(setContentAC(response.data));
    });
}
export const getFiles = () => (dispatch) => {
    contentAPI.getFiles()
    .then(response => {
        dispatch(setContentAC(response.data));
    });
}
export const getPodcasts = () => (dispatch) => {
    contentAPI.getPodcasts()
    .then(response => {
        dispatch(setContentAC(response.data));
    });
}
export const getContent = (id, type) => (dispatch) => {
    contentAPI.getChosenContent(id, type)
    .then(response => {
        dispatch(setChosenContentAC(response.data));
    })
}
export const getUser = (id) => (dispatch) => {
    contentAPI.getUser(id)
    .then(response => {
        dispatch(setUserAC(response.data));
    })
}
export const getCommentsThunk = (contentId) => (dispatch) => {
    contentAPI.getComments(contentId)
    .then(response => {
        dispatch(setCommentsAC(response.data));
    })
} 

// POST
export const addComment = (content_id, text) => (dispatch) => {
    contentAPI.addComment(content_id, text)
    .then(response => {
        console.log(response);
    })
}

//UPDATE
export const approveContent = (id, type) => (dispatch) => {
    contentAPI.approve(id, type)
    .then(response => {
        console.log(response);
    })
}