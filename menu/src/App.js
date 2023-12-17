import React from "react";
import Logo from "./components/Logo";
import Mains from "./components/Mains";
import Extras from "./components/Extras";
import Total from "./components/Total";
import { Provider } from "./Context";
import logoo from "./vivia.PNG";

import "./styles.css";

export default function App() {
  
  return (
    <Provider>
      <div className="menu">
      <Logo></Logo>
        
        <Mains meals={[
                {
                  "name": "Viva's special",
                  "description": "Mushroom soup with fresh home baked bread.",
                  "price": "17"
                },
                {
                  "name": "Viva's special",
                  "description": "Mushroom soup with fresh home baked bread.",
                  "price": "17"
                },]
        } />
        <aside className="aside">
          <Extras type="Drinks" items={[
            {
              "name": "Milk",
              "price": "5"
            },
            {
              "name": "Red wine",
              "price": "8"
            },
          ]} />
          {/*<Extras type="Sides" items={[
            
          ]} /> */}
      </aside>
        <Total />
      </div>
    </Provider>
  );
}