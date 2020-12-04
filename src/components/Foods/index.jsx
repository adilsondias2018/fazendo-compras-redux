/**
 * PARA RECEBER O ESTADO DEVE USAR O HOOK useSelector E INSTANCIAR
 * O ESTADO QUE VOCÊ DESEJA ENTRE O EXISTENTE NO STATE.
 *
 *
 */

import { useSelector } from "react-redux";
import Food from "../Food";

import { Card } from "antd";
import "antd/dist/antd.css";

const Foods = () => {
  const foods = useSelector((state) => state.foods);
  console.log(foods);
  return (
    <>
      <Card title="Produtos Sacolão">
        {foods.map((food, index) => {
          return <Food key={index} food={food}></Food>;
        })}
      </Card>
    </>
  );
};

export default Foods;
