import { useReducer } from "react"
import '../style.css'

export default function UserCard({user}){
// let {users} = user 
    let {name, phone , email} = user 
    console.log(user , name , phone , email )

    return (
        <div className="box">
            <h3>Name : {name}</h3>
            <p>phone : {phone} </p>
            <p>Email : {email} </p>
        </div>
    )
}