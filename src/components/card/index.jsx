import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import "./style.css";

export function Card({ image, id, tag, title, description }) {
  const [count, setCount] = useState(0);
  return (
    <div id="card">
      <img src={image} alt="" />
      <p>{id}</p>
      <h2>{title}</h2>
      <p id="tag">{tag}</p>
      <p>{description}</p>

      <div id="tropa">
        <div id="preco">
          <strong> R$ 9,90</strong>
        </div>

        <div id="botao">
          <button onClick={() => setCount(count - 1)}>-</button>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>

        <button type="button" id="carrinho">
          <ShoppingCart size={16} />
        </button>
      </div>
    </div>
  );
}
