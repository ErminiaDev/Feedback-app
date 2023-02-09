import { useState } from "react";

//instead of 
const [users, setUsers] = useState([])
const [loading, setLoading] = useState(true)

//import your reducer file and useReducer hook
// and define the following:
const initialState = {
	users: [],
	loading: true
}

//define a const that gets a state and a function called dispatch
//to dispatch action types
//similar to state/setState with useState()
const [state, dispatch] = useReducer(ourReducer, initialState)

//say we have a data object that contains the response from the API
const data = await response.json()

//now we are dispatching the type GET_USERS (as an example) 
//and sending the data as payload
dispatch({
	type: 'GET_USERS',
	payload: data,
})

//our reducer would look like this
//we want to return whatever is already in the state
//and then we want to update users to be the action.payload
//and we set loading to false
const ourReducer = (state, action) => {
	switch (action.type) {
		case 'GET_USERS':
			return {
				...state,
				users: action.payload,
				loading: false,
			}
		default:
			return state
	}
}

//AND wherever we are using users and loading we want to update it to
