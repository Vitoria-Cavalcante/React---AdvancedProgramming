import { useState, useEffect, useRef } from 'react'

// Menu suspenso: recebe as opções via props e controla se está aberto ou fechado
function Dropdown({ titulo, opcoes }) {
  const [aberto, setAberto] = useState(false)
  const menuRef = useRef(null)

  // fecha o menu quando o usuário clica fora dele
  useEffect(() => {
    function cliqueFora(evento) {
      if (menuRef.current && !menuRef.current.contains(evento.target)) {
        setAberto(false)
      }
    }

    document.addEventListener('mousedown', cliqueFora)
    return () => document.removeEventListener('mousedown', cliqueFora)
  }, [])

  function selecionar(opcao) {
    opcao.acao() // cada opção tem sua própria função (callback)
    setAberto(false)
  }

  return (
    <div className="dropdown" ref={menuRef}>
      <button onClick={() => setAberto(!aberto)} aria-expanded={aberto}>
        {titulo} ▾
      </button>

      {aberto && (
        <ul className="dropdown-lista">
          {opcoes.map((opcao) => (
            <li key={opcao.texto}>
              <button onClick={() => selecionar(opcao)}>{opcao.texto}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
