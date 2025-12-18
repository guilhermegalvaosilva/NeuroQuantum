import "./Services.css";

function Services() {
  return (
    <section id="servicos" className="services">
      <h2>O que fazemos</h2>

      <div className="services__grid">
        <div className="service-card">
          <h3>Desenvolvimento Web & Apps</h3>
          <p>
            Criamos sites, plataformas e aplicações modernas, rápidas e
            escaláveis.
          </p>
        </div>

        <div className="service-card">
          <h3>UI/UX & Design Digital</h3>
          <p>
            Interfaces pensadas para usabilidade, conversão e experiência real.
          </p>
        </div>

        <div className="service-card">
          <h3>Automação & Integrações</h3>
          <p>Soluções inteligentes para otimizar processos e ganhar escala.</p>
        </div>

        <div className="service-card">
          <h3>Soluções Sob Medida</h3>
          <p>
            Projetos personalizados de acordo com o seu negócio e objetivos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
