import { useLoja } from '../context/LojaContext'
import { formatarPreco } from '../dados'

// Cabeçalho: mostra quantos itens tem no carrinho, lendo direto do contexto global
function Header() {
  const { carrinho } = useLoja()

  // soma o preço de todos os produtos do carrinho
  let total = 0
  for (const produto of carrinho) {
    total = total + produto.preco
  }

  return (
    <header className="cabecalho">
      <h1>Minha Loja</h1>

      <p className="carrinho">
        <span aria-hidden="true">🛒</span>
        <strong>{carrinho.length}</strong> {carrinho.length === 1 ? 'item' : 'itens'}
        <span className="carrinho-total">{formatarPreco(total)}</span>
      </p>
    </header>
  )
}

export default Header
