import "./approach.css";

function Approach() {
  return (
    <section id="abordagem" className="approach">
      <h2>Nossa abordagem</h2>

      <div className="approach__steps">
        <div className="step">
          <span>01</span>
          <h3>Análise & Estratégia</h3>
          <p>
            Entendemos o problema, o negócio e o objetivo antes de escrever
            qualquer linha de código.
          </p>
        </div>

        <div className="step">
          <span>02</span>
          <h3>Construção Inteligente</h3>
          <p>
            Desenvolvemos soluções modernas com foco em desempenho,
            escalabilidade e clareza.
          </p>
        </div>

        <div className="step">
          <span>03</span>
          <h3>Evolução Contínua</h3>
          <p>
            Ajustamos, melhoramos e evoluímos o produto junto com o crescimento
            do negócio.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Approach;
