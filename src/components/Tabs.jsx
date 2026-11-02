import { useState } from 'react'

// Abas: recebe as abas via props e guarda qual está ativa
function Tabs({ abas }) {
  const [abaAtiva, setAbaAtiva] = useState(0)

  return (
    <div className="tabs">
      <div className="tabs-lista" role="tablist">
        {abas.map((aba, indice) => (
          <button
            key={indice}
            role="tab"
            aria-selected={abaAtiva === indice}
            className={abaAtiva === indice ? 'ativa' : ''}
            onClick={() => setAbaAtiva(indice)}
          >
            {aba.titulo}
          </button>
        ))}
      </div>

      <div className="tabs-conteudo" role="tabpanel">
        <p>{abas[abaAtiva].conteudo}</p>
      </div>
    </div>
  )
}

export default Tabs
