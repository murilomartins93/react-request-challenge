import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Button from "../../../components/Button";

export default function SearchProfile() {
  return (
    <main>
      <div className="searchCard">
        <h1>Encontre um perfil Github</h1>
        <input />
        <Link to={"/search-profile/result"}>
          <Button text="Encontrar" />
        </Link>
      </div>
      <Outlet />
    </main>
  );
}
