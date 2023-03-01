import "./styles.css";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function HomeIndex() {
  return (
    <main>
      <section id="rrc-home">
        <div className="rrc-home-titles">
          <h1>Desafio Github API</h1>
          <h2>DevSuperior - Escola de programação</h2>
        </div>
        <Link to={"/search-profile"}>
          <Button text="Começar" />
        </Link>
      </section>
    </main>
  );
}
