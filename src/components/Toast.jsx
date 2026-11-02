import { useState, useEffect } from 'react'

// Toast: mostra uma mensagem temporária. Recebe a mensagem e o tipo via props
// e controla a própria visibilidade com state
function Toast({ mensagem, tipo }) {
  const [visivel, setVisivel] = useState(true)

  // depois de 3 segundos, esconde sozinho
  // o [] no final faz o efeito rodar só uma vez, quando o toast aparece
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisivel(false)
    }, 3000)

    return () => clearTimeout(timer) // cancela o timer se o toast sair da tela antes
  }, [])

  if (!visivel) {
    return null // não mostra nada
  }

  return (
    <div className={'toast ' + tipo} role="status">
      <span>{mensagem}</span>
      <button onClick={() => setVisivel(false)} aria-label="Fechar">×</button>
    </div>
  )
}

export default Toast
