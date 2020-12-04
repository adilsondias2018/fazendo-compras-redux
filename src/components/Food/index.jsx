/**
 * AQUI ESTAMOS TRABALHANDO DIRETAMENTE NO COMPONENTE ONDE TEM-SE OS BOTÕES
 * E AÇÕES QUE DESEJAMOS EXECUTAR NO CARD
 *
 * ASSSIM JÁ TEM EM NOSSO ESTADO GLOBAL TODOS AS AÇOES QUE QUEREMOS EXECUTAR
 * COM ADD E REMOVE E PODERIAMOS TER INFINITAS. LEMBRANDO QUE PARA EXECUTA-LAS NESSE
 * COMPONENTE ESPECIFICO.
 * PODERIAMOS TER AS AÇÕES NA MESMA ACTION QUE SERIA EXECUTAR EM OUTROS COMPONENTES, MAS
 * PARA ESSE SELECIONA-SE AS AÇÕES DESEJADAS.
 *
 * PARA ISSO TEM QUE IMPORTA O DISPACHE E AS AÇÕES DESEJADAS DE NOSSO ACTION
 *
 *  */

import { useDispatch } from "react-redux";
import { addToCart } from "../../store/modules/cart/actions";

// agora importando não das actions, mas do midles "Thunks"

import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";

import { Card, Button } from "antd";
import "antd/dist/antd.css";

const Food = ({ food, IsRemovable = false }) => {
  const dispatch = useDispatch();

  console.log(food);
  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };
  return (
    <>
      <Card.Grid style={gridStyle}>
        <h4>{food.name}</h4>
        <h4>{food.type}</h4>
        {IsRemovable ? (
          <Button
            onClick={() => dispatch(removeFromCartThunk(food))}
            type="primary"
          >
            Remove
          </Button>
        ) : (
          <Button onClick={() => dispatch(addToCartThunk(food))} type="primary">
            Add Cart
          </Button>
        )}
      </Card.Grid>
    </>
  );
};

export default Food;
