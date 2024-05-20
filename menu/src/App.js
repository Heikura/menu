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
      <h1> Kaske's Fine Dining </h1>
      <h2 className="tarinamme"> Tarinamme</h2>
      <div>Kaske's-ravintola sijaitsee henkeäsalpaavissa järvimaisemissa, jossa luonto ja herkulliset raaka-aineet kohtaavat. Ravintola tarjoaa unohtumattoman ruokailuelämyksen, jossa voit nauttia tuoreista, paikallisista raaka-aineista valmistettuja annoksia samalla, kun ihailet järven rauhoittavaa kauneutta ja ympäröivää vehreyttä. Tule kokemaan, miten ensiluokkaiset raaka-aineet ja luonnon harmonia yhdistyvät taidokkaasti valmistetuissa annoksissamme.</div>
      <h2 className="asd">Juhlamenu (voimassa 24.5.2024)</h2>
        <Mains meals={[
                {
                  "name": "Alkuruoka",
                  "name2": "SUUSSA SULAVA MAA-ARTISOKKAKEITTO",
                  "description": "Tämä samettisen pehmeä maa-artisokkakeitto on täydellinen alkuruoka tälle juhlamenulle. Maa-artisokkien luonnollinen makeus ja pähkinäinen maku yhdistyvät kermamaiseen rakenteeseen, luoden ylellisen ja täyteläisen keiton, joka hivelee makuhermoja. Keitto tarjoillaan vastapaistetun maalaisleivän kera.",
                  "price": "17"
                },
                {
                  "name": "Pääruoka",
                  "name2": "PÄIVÄN KALAA, PALSTERNAKKAPYRETTÄ JA PARSAA",
                  "description": "Hemmottele itseäsi päivän kalalla - täydellisen tasapainoisella annoksella. Hienovaraisesti paistettu kala tarjoillaan samettisen palsternakkapyreen kera, joka tuo esiin makean ja maanläheisen vivahteen. Annos viimeistellään höyrytetyillä parsoilla, jotka tuovat mukaan raikkaan ja keväisen säväyksen. Tämä pääruoka on mestarillinen yhdistelmä makuja ja tekstuureja, joka tarjoaa niin visuaalista kuin kulinaarista nautintoa, jättäen sinut tyytyväiseksi ja kaipaamaan lisää.",
                  "price": "17"
                },
                {
                  "name": "Jälkiruoka",
                  "name2": "MOKKAHOVI",
                  "description": "Mokkahovi on kakku, jonka vuoksi asiakkaat palaavat ravintola Kaske'siin kerta toisensa jälkeen. Tämä klassikkoresepti yhdistää kahvin, tuorejuuston ja kerman pettämättömällä tavalla, luoden vastustamattoman makuelämyksen.",
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