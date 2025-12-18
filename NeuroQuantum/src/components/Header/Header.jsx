import logo from "../../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__brand">
          <img src={logo} alt="NeuroQuantum Digital" className="logo" />
          <span className="brand-name">NeuroQuantum Digital</span>
        </div>

        {/* Navegação */}
        <nav className="header__nav">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato" className="cta">
            Falar Connosco
          </a>
        </nav>
      </div>

      {/* Hero message */}
      <div className="header__hero">
        <h1>Tecnologia que pensa à frente</h1>
        <p>
          Criamos soluções digitais modernas para negócios que querem crescer.
        </p>
      </div>
    </header>
  );
}

export default Header;
