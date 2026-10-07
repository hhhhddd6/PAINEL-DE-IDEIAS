import { useState } from "react";
import "./App.css";

function App() {
  const [ideias, setIdeias] = useState([]);
  const [novaIdeia, setNovaIdeia] = useState("");
  const [erro, setErro] = useState("");

  function aoAdicionar(event) {
    event.preventDefault();

    if (!novaIdeia.trim()) {
      setErro("digite sua ideia antes de adicionar.");
      return;
    }

    const ideia = {
      id: Date.now(),
      texto: novaIdeia.trim(),
      feita: false
    };

    setIdeias((atual) => [atual, ideia]);
    setNovaIdeia("");
    setErro("");
  }

  function alternarIdeia(id) {
    setIdeias((atual) =>
      atual.map((ideia) =>
        ideia.id === id
          ? {ideia, feita: !ideia.feita }
          : ideia
      )
    );
  }

  function removerIdeia(id) {
    setIdeias((atual) => atual.filter((ideia) => ideia.id !== id));
  }

  const concluidas = ideias.filter((ideia) => ideia.feita).length;

  return (
    <main className="container">
      <section className="painel">
        <header className="cabecalho">
          <p className="etiqueta">MEU PAINEL</p>
          <h1>Painel de Ideias</h1>
          <p className="descricao">
            Registre suas ideias e acompanhe o que já saiu do papel.
          </p>
        </header>

        <form className="formulario" onSubmit={aoAdicionar}>
          <input
            type="text"
            value={novaIdeia}
            onChange={(event) => {
              setNovaIdeia(event.target.value);
              setErro("");
            }}
            placeholder="digite uma nova ideia"
          />
          <button type="submit">Adicionar</button>
        </form>

        {erro && <p className="erro">{erro}</p>}

        <section className="lista">
          {ideias.length === 0 ? (
            <div className="vazio">
              <span>!</span>
              <p>Nenhuma ideia ainda.</p>
              <small>Adicione sua primeira ideia acima.</small>
            </div>
          ) : (
            ideias.map((ideia) => (
              <div
                className={`ideia ${ideia.feita ? "concluida" : ""}`}
                key={ideia.id}
              >
                <label className="conteudo">
                  <input
                    type="checkbox"
                    checked={ideia.feita}
                    onChange={() => alternarIdeia(ideia.id)}
                  />
                  <span>{ideia.texto}</span>
                </label>

                <button
                  className="remover"
                  type="button"
                  onClick={() => removerIdeia(ideia.id)}
                  aria-label="Remover ideia"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </section>

        <footer>
          {`${ideias.length} ${ideias.length === 1 ? "ideia" : "ideias"} no painel · ${concluidas} concluída${concluidas === 1 ? "" : "s"}`}
        </footer>
      </section>
    </main>
  );
}

export default App;