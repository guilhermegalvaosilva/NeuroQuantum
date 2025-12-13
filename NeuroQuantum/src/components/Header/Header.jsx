import logo from "../../assets/logo.png";
import "./Header.css";
function Header() {
  return (
    <header className="Header">
      <img src={logo} alt="logo" className="logo" />

      <ul className="lista">
        <div className="li">Home</div>
        <div className="li">About</div>
        <div className="li">Contact</div>
      </ul>
      <br />
    </header>
  );
}
export default Header;
