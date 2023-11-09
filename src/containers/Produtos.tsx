import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProductsQuery } from '../services/api'
import { RootReducer } from '../store'
import { favoritar } from '../store/reducers/favoritos'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProductsQuery()
  const dispatch = useDispatch()

  const favoritos = useSelector(
    (state: RootReducer) => state.favorito.favoritos
  )

  if (isLoading) return <h2>Carregando...</h2>

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }
  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={(produto) => dispatch(favoritar(produto))}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
