import React from "react";

export default function Extras({ type, items }) {
  return (
    <section className="extras">
      <h2 className="extras-heading">{type}</h2>
      <div className="extras-desc"> Menuumme on saatavilla juomapaketti, joka sisältää alkumaljan, alkoholittoman ipan alkuruoalle ja pääruoalle. Jälkiruoan kruunaa tarjoiltu espresso. Lisäksi juomapakettiin sisältyy rajaton määrä hanavettä.</div>
    </section>
  );
}
