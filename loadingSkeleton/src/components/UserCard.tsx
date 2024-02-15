import { useNavigate, useParams } from "react-router-dom"

type UserCardProps={
    name: string,
    email: string,
    username: string,
    phone: string,
    id: number,
}


const UserCard = ({name, email, username, phone, id}: UserCardProps) => {
   
    const navigate = useNavigate()
  return (
    <div className="userCard" onClick={()=>{navigate(`/post/${id}`)}}>
        <img src={`https://picsum.photos/200`} alt="user" className="" />
        <div className="userCardProps">
            <h3 className="headAndParagraphs heading">{name}</h3>
            <p className="headAndParagraphs paragraph">Email: {email}</p>
            <p className="headAndParagraphs paragraph">Username: {username}</p>
            <p className="headAndParagraphs paragraph">Phone: {phone}</p>
        </div>
    </div>
  )
}

export default UserCard