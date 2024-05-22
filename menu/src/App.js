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
      <div>Tervetuloa makumatkalle Kaskesniemen henkeäsalpaaviin järvimaisemiin. Kaske’sissa sinua palvelee intohimoisesti ruuanlaittoon suhtautuva kuusikko, jonka pääkokkeina hääräävät taaperot Sinna ja Vivia. Me Kaske’sissa tarjoamme sinulle ja läheisillesi unohtumattoman ruokailuelämyksen, jossa yhdistyvät laadukkaat raaka-aineet, kiireetön yhdessäolo ja kaunis luontomiljöö.</div>
      <h2 className="asd">Jussin 60v-juhlamenu (voimassa 24.5.2024)</h2>
        <Mains meals={[
                {
                  "name": "Alkuruoka",
                  "name2": "”PITKÄ KUUMA KEITTO” - SUUSSA SULAVA MAA-ARTISOKKAKEITTO",
                  "description": "Miten väärässä 1600-luvulla elänyt kasvitieteilijä John Goodyer olikaan väittäessään maa-artisokan sopivan lähinnä sian ruuaksi. Ainakaan Goodyer ei ollut maistanut Kaske’sin samettista maa-artisokkakeittoa. Perttu Lepän kulttiklassikon mukaan nimetyssä alkuruuassa maa-artisokan luonnollinen makeus ja pähkinäisyys yhdistyvät kermaiseen rakenteeseen, lopputuloksena ylellinen ja täyteläinen keitto. Keitto tarjoillaan vastapaistetun maalaisleivän kera.",
                  "price": "17"
                },
                {
                  "name": "Pääruoka",
                  "name2": "”HELMIÄ JA SIIKOJA” - SIIKAA, PALSTERNAKKAPYREETÄ, PARSAA JA BEURRE MONTÉ -KASTIKETTA",
                  "description": "”Siikahan se siellä” huudetaan legendaariseksi meemiksi muodostuneessa YouTube-videossa. Viitisentoista vuotta sitten päivänvalon nähneen videon tapaan myös Kaske’sin keittiössä siika on pääosassa. Tarjoilemme kalan herkullisen palsternakkapyreen ja sitruunaisen beurre monté -kastikkeen kera. Annos viimeistellään grillatuilla parsoilla, jotka tuovat mukaan raikkaan ja keväisen säväyksen. Uskallamme väittää, että tämä makujen sinfonia peittoaa ainakin Helmistä ja Sioista tuttujen Hirvosen poikien ”pikkusuolaset”.",
                  "price": "17"
                },
                {
                  "name": "Jälkiruoka",
                  "name2": "”KULMAN MOKAT” - MOKKAHOVI-TÄYTEKAKKU",
                  "description": "Illan kruunaa joensuulaisen täytekakkukilvan kiistämätön voittaja, Mokkahovi. Tämä klassikkoresepti yhdistää kahvin, tuorejuuston ja kerman pettämättömällä tavalla, luoden vastustamattoman makuelämyksen. Huhu kertoo, että Kulman pojat -elokuvan kuvausten aikana Eero Ritala rakastui Houkutuksen Mokkahoviin ikihyviksi. Olipa tarina tosi tai ei, Mokkahovi on kakku, johon Ritalakin varmasti rakastuisi.",
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
      <div>Huomioimme mahdollisuuksien mukaan kaikki erityisruokavaliot ja allergiat yksilöllisesti. Ilmoitathan niistä meille ennakkoon, jotta voimme tehdä kaikkemme taataksemme ikimuistoisen illan.</div>
      </div>
    </Provider>
  );
}