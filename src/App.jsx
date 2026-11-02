import { useState } from 'react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Accordion from './components/Accordion'
import Pagination from './components/Pagination'
import ProgressBar from './components/ProgressBar'
import Tabs from './components/Tabs'
import Dropdown from './components/Dropdown'
import { useLoja } from './context/LojaContext'
import { produtos, perguntas, abas } from './dados'

const PRODUTOS_POR_PAGINA = 4
const ORDENACOES = ['Mais relevantes', 'Menor preço', 'Maior preço', 'Nome (A-Z)']

// Componente principal: guarda os estados da página e organiza todos os outros componentes
function App() {
  const [paginaAtual, setPaginaAtual] = useState(1)
  const [progresso, setProgresso] = useState(0)
  const [ordem, setOrdem] = useState('Mais relevantes')
  const { mostrarToast } = useLoja()

  // ordena a lista conforme a opção escolhida no menu suspenso
  // [...produtos] cria uma cópia, para não alterar a lista original
  const listaOrdenada = [...produtos]
  if (ordem === 'Menor preço') listaOrdenada.sort((a, b) => a.preco - b.preco)
  if (ordem === 'Maior preço') listaOrdenada.sort((a, b) => b.preco - a.preco)
  if (ordem === 'Nome (A-Z)') listaOrdenada.sort((a, b) => a.nome.localeCompare(b.nome))

  // calcula quais produtos aparecem na página atual
  const totalPaginas = Math.ceil(listaOrdenada.length / PRODUTOS_POR_PAGINA)
  const inicio = (paginaAtual - 1) * PRODUTOS_POR_PAGINA
  const produtosDaPagina = listaOrdenada.slice(inicio, inicio + PRODUTOS_POR_PAGINA)

  // cada opção do menu suspenso tem seu próprio texto e sua própria ação
  const opcoesDeOrdem = ORDENACOES.map((texto) => ({
    texto: texto,
    acao: () => {
      setOrdem(texto)
      setPaginaAtual(1)
      mostrarToast('Produtos ordenados por: ' + texto, 'info')
    },
  }))

  function avancarProgresso() {
    const novoValor = Math.min(progresso + 20, 100)
    setProgresso(novoValor)
    if (novoValor === 100) {
      mostrarToast('Upload concluído com sucesso!', 'sucesso')
    }
  }

  return (
    <>
      <Header />

      <main>
        <section>
          <div className="secao-topo">
            <h2>Produtos</h2>
            <Dropdown titulo={'Ordenar: ' + ordem} opcoes={opcoesDeOrdem} />
          </div>

          <div className="produtos">
            {produtosDaPagina.map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>

          <Pagination
            totalPaginas={totalPaginas}
            paginaAtual={paginaAtual}
            aoMudarPagina={setPaginaAtual}
          />
        </section>

        <div className="duas-colunas">
          <section>
            <h2>Detalhes do produto</h2>
            <Tabs abas={abas} />
          </section>

          <section>
            <h2>Upload de arquivo</h2>
            <p className="descricao">Comprovante de pagamento.pdf</p>
            <ProgressBar valor={progresso} />
            <div className="botoes">
              <button onClick={avancarProgresso} disabled={progresso === 100}>Enviar +20%</button>
              <button onClick={() => setProgresso(0)}>Reiniciar</button>
              <button onClick={() => mostrarToast('Erro ao enviar o arquivo!', 'erro')}>Simular erro</button>
            </div>
          </section>
        </div>

        <section>
          <h2>Perguntas frequentes</h2>
          <Accordion itens={perguntas} />
        </section>
      </main>

      <footer>
        <p>Atividade react I - Loren Santos</p>
      </footer>
    </>
  )
}

export default App
