import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  favoritos: Produto[]
}

const initialState: FavoritoState = {
  favoritos: []
}
const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.favoritos.find((p) => p.id === produto.id)) {
        state.favoritos = state.favoritos.filter((p) => p.id !== produto.id)
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
