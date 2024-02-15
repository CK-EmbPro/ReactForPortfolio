import { useEffect, useState } from "react"
import UserCard from "./UserCard"

type Users ={
    name: string
    username: string
    email: string
    phone: string
    id: number
}

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [users, setUsers] = useState<Users[]>([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data =>{
            setUsers(data)
            setIsLoading(false)
        })
    },[])
  return (
    <div className="homeContainer">
        <h1 style={{color: "white", marginTop: "1.5em"}}>
            Users
        </h1>
        <div className="usersDiv">
            {isLoading && <p style={{color: "rgb(178, 178, 178)"}}>Loading...</p>}

           {users.map((user, index)=> (
                <UserCard key={index} {...user}  />
           ))}
        </div>
    </div>
  )
}

export default Home