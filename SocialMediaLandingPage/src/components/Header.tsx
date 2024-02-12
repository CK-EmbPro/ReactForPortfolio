import "../styles/header.css"

type HeaderProps = {
    children: React.ReactNode
}
const Header = ({children}: HeaderProps) => {
  return (
    <div>
        <div>
            <p>Social Media Dashboard</p>
            <p>Total Followers: 23, 004</p>
        </div>

        {children}
    </div>
  )
}

export default Header