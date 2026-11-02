// Dados fictícios da loja

export const produtos = [
  { id: 1, nome: 'Notebook Ultra 15"', categoria: 'Computadores', imagem: '💻', preco: 3499.9, precoAntigo: 3999.9 },
  { id: 2, nome: 'Mouse Sem Fio', categoria: 'Periféricos', imagem: '🖱️', preco: 89.9 },
  { id: 3, nome: 'Teclado Mecânico RGB', categoria: 'Periféricos', imagem: '⌨️', preco: 279.9, precoAntigo: 349.9 },
  { id: 4, nome: 'Monitor 27" Full HD', categoria: 'Monitores', imagem: '🖥️', preco: 1199.0 },
  { id: 5, nome: 'Fone Bluetooth', categoria: 'Áudio', imagem: '🎧', preco: 199.9, precoAntigo: 249.9 },
  { id: 6, nome: 'Webcam HD', categoria: 'Periféricos', imagem: '📷', preco: 229.0 },
  { id: 7, nome: 'Microfone USB', categoria: 'Áudio', imagem: '🎙️', preco: 319.9 },
  { id: 8, nome: 'Caixa de Som Portátil', categoria: 'Áudio', imagem: '🔊', preco: 159.9, precoAntigo: 199.9 },
  { id: 9, nome: 'Pen Drive 64 GB', categoria: 'Armazenamento', imagem: '💾', preco: 49.9 },
  { id: 10, nome: 'HD Externo 1 TB', categoria: 'Armazenamento', imagem: '🗄️', preco: 399.0 },
  { id: 11, nome: 'Controle Gamer', categoria: 'Games', imagem: '🎮', preco: 289.9, precoAntigo: 329.9 },
  { id: 12, nome: 'Mousepad Grande', categoria: 'Periféricos', imagem: '🟦', preco: 59.9 },
]

export const perguntas = [
  { titulo: 'Qual o prazo de entrega?', conteudo: 'O prazo é de 3 a 7 dias úteis após a confirmação do pagamento.' },
  { titulo: 'Quais as formas de pagamento?', conteudo: 'Aceitamos Pix, boleto e cartão de crédito em até 10x sem juros.' },
  { titulo: 'Posso trocar um produto?', conteudo: 'Sim, você tem até 7 dias após o recebimento para solicitar a troca.' },
  { titulo: 'Os produtos têm garantia?', conteudo: 'Todos os produtos têm garantia de 12 meses contra defeitos de fabricação.' },
]

export const abas = [
  { titulo: 'Descrição', conteudo: 'Notebook com tela de 15 polegadas, leve e com bateria de longa duração. Ideal para estudos e trabalho.' },
  { titulo: 'Especificações', conteudo: 'Processador i5, 8 GB de memória RAM, SSD de 256 GB e Wi-Fi 6.' },
  { titulo: 'Avaliações', conteudo: '★★★★★ "Ótimo produto, chegou antes do prazo!" — Ana P.' },
]

// Transforma um número em preço no formato brasileiro: 49.9 → "R$ 49,90"
export function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
