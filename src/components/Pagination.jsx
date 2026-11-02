// Paginação: recebe o total de páginas, a página atual e uma função para trocar de página
function Pagination({ totalPaginas, paginaAtual, aoMudarPagina }) {
  const paginas = []
  for (let i = 1; i <= totalPaginas; i++) {
    paginas.push(i)
  }

  return (
    <nav className="pagination" aria-label="Paginação">
      <button onClick={() => aoMudarPagina(paginaAtual - 1)} disabled={paginaAtual === 1}>
        Anterior
      </button>

      {paginas.map((numero) => (
        <button
          key={numero}
          onClick={() => aoMudarPagina(numero)}
          className={numero === paginaAtual ? 'ativa' : ''}
          aria-current={numero === paginaAtual ? 'page' : undefined}
        >
          {numero}
        </button>
      ))}

      <button onClick={() => aoMudarPagina(paginaAtual + 1)} disabled={paginaAtual === totalPaginas}>
        Próxima
      </button>
    </nav>
  )
}

export default Pagination
