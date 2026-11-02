import { createContext, useContext } from 'react'

// Desafio extra: contexto global da loja.
// Guarda o carrinho e a função de mostrar notificações para qualquer componente usar.
export const LojaContext = createContext()

// Atalho para usar o contexto: const { carrinho } = useLoja()
export function useLoja() {
  return useContext(LojaContext)
}
