
import "../styles/header.css";
// import "../styles/global.css";

type HeaderProps = {
  children: React.ReactNode;
};
const Header = ({ children }: HeaderProps) => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grid">
          <div>

          <h1 className="headerTitle">Social Media Dashboard</h1>
          <p className="header-total">Total Followers: 23, 004</p>
          </div>
        </div>
      {children}
      </div>
    </header>
  );
};

export default Header;
