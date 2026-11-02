import { useState } from 'react'
import { LojaContext } from './LojaContext'
import Toast from '../components/Toast'

// Provider: guarda os dados globais e os entrega para todos os componentes dentro dele
function LojaProvider({ children }) {
  const [carrinho, setCarrinho] = useState([])
  const [toast, setToast] = useState(null)

  function mostrarToast(mensagem, tipo) {
    // o id faz o React criar um toast novo a cada chamada (e reiniciar o tempo)
    setToast({ id: Date.now(), mensagem, tipo })
  }

  function adicionarAoCarrinho(produto) {
    setCarrinho([...carrinho, produto])
    mostrarToast(produto.nome + ' foi adicionado ao carrinho!', 'sucesso')
  }

  return (
    <LojaContext.Provider value={{ carrinho, adicionarAoCarrinho, mostrarToast }}>
      {children}
      {toast && <Toast key={toast.id} mensagem={toast.mensagem} tipo={toast.tipo} />}
    </LojaContext.Provider>
  )
}

export default LojaProvider
