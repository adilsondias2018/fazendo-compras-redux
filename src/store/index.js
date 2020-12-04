/**
 * CRIA-SE A STORE
 *  * NO INDEX DO REDUX IMPPORT TODOS OS REDUCER DISPONÍVEIS
 * COMBINA ELAS PELO combineReducer QUE É NADA MAIS QUE JUNTAR TODOS
 * OS REDUCERS É UM UNICOS REDUCER
 *
 * ADICION ESSA COMBINA DENTRO DO SSTORE E EXPORTA O STORE PARA FICAR ASSÍCIVEL
 *
 * LEBRANDO QUE ESSES HOOKS SÃO O REDUX*
 */

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import foodReducer from "./modules/food/reducer";
import cartReducer from "./modules/cart/reducer";

//  criando um reducer unicos e juntando eles atravez do combine

const reducers = combineReducers({
  foods: foodReducer,
  cart: cartReducer,
});

// criando e instaciando a store com o reduceres existenten

const store = createStore(reducers, applyMiddleware(thunk));

// exportando a store para ser consomida

export default store;
