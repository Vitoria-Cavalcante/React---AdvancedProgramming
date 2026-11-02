// Barra de progresso: recebe o valor (0 a 100) via props e ajusta a largura da barra
function ProgressBar({ valor }) {
  return (
    <div className="progress">
      <div
        className="progress-barra"
        role="progressbar"
        aria-valuenow={valor}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="progress-preenchimento" style={{ width: valor + '%' }}></div>
      </div>
      <span>{valor}%</span>
    </div>
  )
}

export default ProgressBar
