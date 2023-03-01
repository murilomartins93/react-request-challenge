import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function HomeIndex() {
  return (
    <main>
      <h1>Desafio Github API</h1>
      <h2>DevSuperior - Escola de programação</h2>
      <Link to={"/search-profile"}>
        <Button text="Começar" />
      </Link>
    </main>
  );
}
