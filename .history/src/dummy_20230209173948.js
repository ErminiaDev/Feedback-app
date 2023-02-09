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
const [state, dispatch] = useReducer(yourReducer, initialState)

//say we have a data object that contains the response from the API
const data