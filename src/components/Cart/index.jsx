/**
 * O CARD TAMBÉM PRECISA DE ACESO AO ESTADO POR ISSO TEMO S
 * QUE REPETIR O MEMSO PROCEDISO EM TODOS OS COMPONTENS QUE TIVER QUE USAR O
 * STATE
 */

import { useSelector } from "react-redux";
import Food from "../Food";

import { Card, Button } from "antd";
import "antd/dist/antd.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Carrinho Compras</h2>
      <div>
        {cart.map((food, index) => {
          return <Food key={index} food={food} IsRemovable></Food>;
        })}
      </div>
    </div>
  );
};

export default Cart;
