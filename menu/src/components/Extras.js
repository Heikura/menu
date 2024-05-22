import React from "react";

export default function Extras({ type, items }) {
  return (
    <section className="extras">
      <h2 className="extras-heading">{type}</h2>
      <div className="extras-desc">Menuun kuuluu juomapaketti, joka sisältää alkuun samppanjaa, pääruoalle valkoviinin sekä jälkiruoalle tynnyrikypsytetyn imperial stoutin. Jälkiruuan yhteyteen on valittavissa myös espresso. Lisäksi juomapakettiin sisältyy rajaton määrä hanavettä.</div>
    </section>
  );
}
