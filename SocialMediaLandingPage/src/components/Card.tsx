import "../styles/card.css"
type CardProps = {
    userName: string,
    followers: string,
    todayFollowers: number,
    icon: string,
    name: string,
}

const Card = ({userName, followers, todayFollowers, icon, name }: CardProps) => {
  return (
    <article className={`card ${name}`}>
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