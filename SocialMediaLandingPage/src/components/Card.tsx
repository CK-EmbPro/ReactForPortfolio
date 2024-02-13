
type CardProps = {
    userName: string,
    followers: string,
    todayFollowers: number,
    icon: string,
    name: string,
    key: PropertyKey
}

const Card = ({userName, followers, todayFollowers, icon, name, key }: CardProps) => {
  return (
    <article>
        <p className="card-title">
            <img src={icon} alt="No img"  />
            {userName}
        </p>

        <p className="card-followers">
            <span className="card-followers-number">{followers}</span>
            <span className="card-followers-title">Followers</span>
        </p>

        <p className="card-today">
            <img src={"images/up.png"} alt="No-img" />
            {todayFollowers} today
        </p>
    </article>
  )
}

export default Card