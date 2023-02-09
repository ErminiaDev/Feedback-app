import { useState } from "react";

//instead of 
const [users, setUsers] = useState([])
const [loading, setLoading] = useState(true)

//import your reducer file and useReducer hook
// and define the following:
const initialState