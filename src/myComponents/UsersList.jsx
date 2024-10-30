import { useEffect, useLayoutEffect, useState } from "react";
import '../style.css'
import UserCard from "./UserCard.jsx";
import { renderToStaticMarkup } from "react-dom/server";
export default function UsersList() {

    let [userList, setUserList] = useState([])

    useEffect(() => {
        async () => {
            let res = await fetch('https://jsonplaceholder.typicode.com/users')
            let users = await res.json()
            setUserList(users)
        }
    }, [])
    // console.log(userList)




    return (
        <div className="box">
            <h3>users count : { userList.length } </h3>
            {
                userList.map( (user)=> <UserCard user={user}></UserCard>)
            }
        </div>
    )
}