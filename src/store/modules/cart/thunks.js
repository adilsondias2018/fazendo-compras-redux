/** NOS MIDLES OU THUNHKS
 * TRABALHOS A LÓGICA DE RECEBER E ENVIAR AS NOSSAS REQUISIÇÕES E
 * "PROCESSAMENTO DE ALGORTIMOS ""
 *
 * ==> TEMOS UMA ESTRUTURA BÁSICA PARA COMEÇAR A FAZER ESSA LÓGICA
 * I
 * DEFINIR QUAIS SERÃO O MIDLES
 * RETORNAR A FUNÇÃO
 * IMPORTAR AS AÇÕES
 *
 */

import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (food) => {
  return (dispatch, getState) => {
    const list = JSON.parse(localStorage.getItem("card")) || [];
    list.push(food);

    localStorage.setItem("cart", JSON.stringify(list));

    dispatch(addToCart(food));
  };
};

export const removeFromCartThunk = (id) => (dispatch, getState) => {
  const { cart } = getState();
  const list = cart.filter((food) => food.id !== id);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(removeFromCart(list));
};
