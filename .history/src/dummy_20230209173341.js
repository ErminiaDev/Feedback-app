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
//to dispatch action
const [state, dispatch] = useReducer(yourReducer, initialState)