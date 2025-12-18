import "./head.css";

function Head() {
  return (
    <section className="hero-atmo">
      <div className="hero-atmo__content reveal">
        <h1 className="hero-atmo__title">
          Neuro <span>Quantum</span>
        </h1>

        <p className="hero-atmo__lead">
          Tecnologia e ciência aplicadas para criar soluções digitais
          inteligentes.
        </p>

        <div className="hero-atmo__actions">
          <a href="#servicos" className="btn btn-primary">
            Explorar soluções
          </a>

          <a href="#abordagem" className="btn btn-ghost">
            Nossa abordagem
          </a>
        </div>
      </div>
    </section>
  );
}

export default Head;
