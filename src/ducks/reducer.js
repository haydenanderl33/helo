// const initialState = {
//     user:{}
// }
const initialState = {
    id: 0,
    username: "",
    profile_pic: ""
}

const LOGIN_USER = 'LOGIN_USER'

export function loginUser(id,username,profile_pic){
    return {
        type: LOGIN_USER,
        payload: {
            id: id,
            username: username,
            profile_pic: profile_pic
        }
    }
}





export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            return {...state, id: action.payload.id, username: action.payload.username, profile_pic: action.payload.profile_pic}
        default:
            return state
    }
}
