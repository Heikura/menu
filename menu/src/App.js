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
      <h2 className="tarinamme"> Tarinamme</h2>
      <div>Vivian kiertävä ravintola ei sido sinua paikkaan, vaan se saapuu suoraan kotikeittiöösi. Soijakastike muuttuu taikajuomaksi, ja riisi muuttuu pieniksi valkoisiksi pilviksi. Vivia tuo mukanaan aasialaisen makujen seikkailun, joka ei vaadi sinua poistumaan kotoasi. Ravintolamme on liikkuva keittiö, joka tarjoaa herkullisia aterioita ja aitoja makuelämyksiä missä ikinä oletkin. Anna Vivian viedä sinut matkalle, joka yhdistää ruoan ilon ja kodikkuuden suoraan sinun ruokapöytääsi.</div>
      <h2 className="asd">Menu tofu (voimassa 22.-27.12.2023)</h2>
        <Mains meals={[
                {
                  "name": "Alkuruoka",
                  "name2": "THAI TOFU LARB | THAIMAALAINEN SALAATTI VIVIAN TAPAAN",
                  "description": "Larb gai on Thaimaassa ja Laosissa suositti salaatti, jossa maustettua jauhelihaa tarjoillaan salaatinlehdellä. Kasvis-larbissa käytetään rapeaa aasialaisittain marinoitua tofua, joka paahtuu helposti rapeaksi pannulla. Lisäksi salaatissa on paljon tuoreita yrttejä ja chiliä tuomaan potkua.",
                  "price": "17"
                },
                {
                  "name": "Pääruoka",
                  "name2": "KOREAN FRIED TOFU (KFT) BUN | KOREALAISET HÖYRYTETYT TOFU-BUNIT",
                  "description": "Rapeat tofupalat tahmeassa, makean tulisessa kastikkeessa ja Vivian kiertävässä keittiössä höyrytetyt korealaiset sämpylät. Annosta täydentävät kimchi sekä pikkelöidyt kurkut.",
                  "price": "17"
                },
                {
                  "name": "Jälkiruoka",
                  "name2": "SULOISEN SUOMALAINEN MARJA-SORBETTI KEKSIN KERA",
                  "description": "Nauti makujen lumosta viimeistä piirtoa myöten herkullisella suomalaisella marja-sorbetilla, joka tarjoillaan tuoreiden kotimaisten marjojen ja rapean keksin kera. Tämä raikas ja värikäs jälkiruoka kruunaa ateriasi makealla huipentumalla, jättäen sinulle ikimuistoisen makukokemuksen.",
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
      <h3 className="lisatiedot"> Lisätiedot</h3>
      <div>Varaathan menun nauttimiseen reilut kaksi tuntia.</div>

      <li>Menu 59 € / vieras</li>
      <li>Juomat 41 € / vieras </li>
      <div>Huomioimme mahdollisuuksien mukaan kaikki erityisruokavaliot ja allergiat yksilöllisesti. Ilmoitathan niistä meille ennakkoon, jotta voimme tehdä kaikkemme taataksemme ikimuistoisen illan.</div>
      </div>
    </Provider>
  );
}