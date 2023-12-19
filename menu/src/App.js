import React from "react";
import Logo from "./components/Logo";
import Mains from "./components/Mains";
import Extras from "./components/Extras";
import { Provider } from "./Context";


import "./styles.css";

export default function App() {
  
  return (
    <Provider>
      <div className="menu">
      <Logo></Logo>
      <h1> Vivia's Fine Dining </h1>
      <h3> Tarinamme</h3>
      <div>Tervetuloa matkalle makujen maailmaan, jossa soijakastike on taikajuomaa ja riisi on pieniä valkoisia pilviä! Meidän aasialaisessa ravintolassamme tapahtuu enemmän kuin pelkkää ruoanlaittoa – se on seikkailu, joka kuljettaa sinut suoraan lapsiperheen arkeen.</div>
        <Mains meals={[
                {
                  "name": "Alkuruoka",
                  "description": "Mushroom soup with fresh home baked bread.",
                  "price": "17"
                },
                {
                  "name": "Pääruoka",
                  "description": "Mushroom soup with fresh home baked bread.",
                  "price": "17"
                },
                {
                  "name": "Jälkiruoka",
                  "description": "Mushroom soup with fresh home baked bread.",
                  "price": "17"
                },]
        } />
        <aside className="aside">
          <Extras type="Juomat" items={[
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
      Huomioimme mahdollisuuksien mukaan kaikki erityisruokavaliot ja allergiat yksilöllisesti. Ilmoitathan niistä meille ennakkoon, jotta voimme tehdä kaikkemme taataksemme ikimuistoisen illan.
      </div>
    </Provider>
  );
}