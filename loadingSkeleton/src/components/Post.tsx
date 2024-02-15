import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type User = {
  title: string;
  body: string;
};

const Post = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User>({
    title:"",
    body: ""
  });
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setIsLoading(false);
      });
  }, [userId]);

  return (

    <div className="postDivContainer">
        <div className="postDiv">

      {isLoading ? (
          <p style={{ color: "rgb(178, 178, 178)" }}>Loading...</p>
          ) : (
              <>
          <Link className="returnBack" to={"/"}>Back</Link>
          <h2 style={{color: "white", textAlign:"center"}}>{user[0]?.title}</h2>
          <p style={{color: "grey", textAlign:"center"}}>{user[0]?.body}</p>
        </>
      )}
      </div>
    </div>
  );
};

export default Post;
