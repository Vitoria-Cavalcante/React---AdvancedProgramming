import { useState } from 'react'

// Acordeão: recebe a lista de itens via props e guarda qual item está aberto
function Accordion({ itens }) {
  const [itemAberto, setItemAberto] = useState(null)

  function alternar(indice) {
    // se clicar no item que já está aberto, fecha; senão, abre o novo
    if (itemAberto === indice) {
      setItemAberto(null)
    } else {
      setItemAberto(indice)
    }
  }

  return (
    <div className="accordion">
      {itens.map((item, indice) => (
        <div className="accordion-item" key={indice}>
          <button
            className="accordion-titulo"
            onClick={() => alternar(indice)}
            aria-expanded={itemAberto === indice}
          >
            {item.titulo}
            <span>{itemAberto === indice ? '−' : '+'}</span>
          </button>

          <div className={itemAberto === indice ? 'accordion-conteudo aberto' : 'accordion-conteudo'}>
            <p>{item.conteudo}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
