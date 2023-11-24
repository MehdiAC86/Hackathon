import { NavLink } from "react-router-dom";
import "../assets/Style/tuto.css";

function Tuto() {
  return (
    <div className="tuto">
      <div className="tuto-container">
        <NavLink to="https://www.creavea.com/noel_tuto-noel-des-etiquettes-cadeaux-originales_fiches-conseils_7512-0.html">
          <h1>Des étiquettes cadeaux originales</h1>
        </NavLink>
        <img
          className="tuto-Pictures"
          src="https://www.creavea.com/fichesconseils/7512-l/tuto-noel-des-etiquettes-cadeaux-originales-l.jpg"
          alt="Des étiquettes cadeaux originales"
        />
      </div>
      <div className="tuto-container">
        <NavLink to="https://www.creavea.com/noel_diy-deco-illuminer-des-bocaux-recycles-pour-noel_fiches-conseils_7509-0.html">
          <h1>Illuminer des bocaux recyclés pour Noël</h1>
        </NavLink>
        <img
          className="tuto-Pictures"
          src="https://www.creavea.com/fichesconseils/7509-l/diy-deco-illuminer-des-bocaux-recycles-pour-noel-l.jpg"
          alt="Illuminer des bocaux recyclés pour Noël"
        />
      </div>
      <div className="tuto-container">
        <NavLink to="https://www.creavea.com/noel_diy-noel-creer-des-etoiles-en-pate-a-sel_fiches-conseils_7506-0.html">
          <h1>Créer des étoiles en pâte à sel</h1>
        </NavLink>
        <img
          className="tuto-Pictures"
          src="https://www.creavea.com/fichesconseils/7506-l/diy-noel-creer-des-etoiles-en-pate-a-sel-l.jpg"
          alt="Créer des étoiles en pâte à sel"
        />
      </div>
      <div className="tuto-container">
        <NavLink to="https://www.creavea.com/activite-manuelle-enfant_activite-manuelle-enfant-creer-sa-chaussette-de-noel_fiches-conseils_7505-0.html">
          <h1>Créer sa chaussette de Noël</h1>
        </NavLink>
        <img
          className="tuto-Pictures"
          src="https://www.creavea.com/fichesconseils/7505-l/activite-manuelle-enfant-creer-sa-chaussette-de-noel-l.jpg"
          alt="Créer sa chaussette de Noël"
        />
      </div>
      <div className="tuto-container">
        <NavLink to="https://www.creavea.com/noel_diy-noel-boules-pailletees-irisees_fiches-conseils_7480-0.html">
          <h1>Boules pailletées irisées</h1>
        </NavLink>
        <img
          className="tuto-Pictures"
          src="https://www.creavea.com/fichesconseils/7480-l/diy-noel-boules-pailletees-irisees-l.jpg"
          alt="Boules pailletées irisées"
        />
      </div>
      <div className="tuto-container">
        <NavLink to="https://www.creavea.com/noel_diy-noel-bricoler-une-decoration-de-porte_fiches-conseils_7471-0.html">
          <h1>Bricoler une décoration de porte</h1>
        </NavLink>
        <img
          className="tuto-Pictures"
          src="https://www.creavea.com/fichesconseils/7471-l/diy-noel-bricoler-une-decoration-de-porte-l.jpg"
          alt="Bricoler une décoration de porte"
        />
      </div>
    </div>
  );
}

export default Tuto;
