import { useLoja } from '../context/LojaContext'
import { formatarPreco } from '../dados'

// Card de produto: recebe os dados do produto via props
function ProductCard({ produto }) {
  // pega a função do contexto global, sem precisar receber do App
  const { adicionarAoCarrinho } = useLoja()

  // calcula a porcentagem de desconto, se o produto tiver preço antigo
  let desconto = 0
  if (produto.precoAntigo) {
    desconto = Math.round((1 - produto.preco / produto.precoAntigo) * 100)
  }

  return (
    <article className="card">
      {desconto > 0 && <span className="card-desconto">-{desconto}%</span>}

      <div className="card-imagem" aria-hidden="true">{produto.imagem}</div>

      <p className="card-categoria">{produto.categoria}</p>
      <h3 className="card-nome">{produto.nome}</h3>

      <div className="card-precos">
        {produto.precoAntigo && <s className="card-preco-antigo">{formatarPreco(produto.precoAntigo)}</s>}
        <strong className="card-preco">{formatarPreco(produto.preco)}</strong>
        <span className="card-parcela">ou 10x de {formatarPreco(produto.preco / 10)} sem juros</span>
      </div>

      <button className="botao-comprar" onClick={() => adicionarAoCarrinho(produto)}>
        Adicionar ao carrinho
      </button>
    </article>
  )
}

export default ProductCard
