import "./styles.css";
import { Outlet } from "react-router-dom";

export default function SearchProfile() {
  return (
    <main>
      <form id="search-card" className="rrc-mt54">
        <h1 className="rrc-card-title">Encontre um perfil Github</h1>
        <input
          name="profile"
          value=""
          type="text"
          id="card-input"
          placeholder="Usuário Github"
        />
        <button type="submit" id="submit-search" className="rrc-btn">
          Encontrar
        </button>
      </form>
      <Outlet />
    </main>
  );
}
