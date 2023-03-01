import "./styles.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as searchService from "../../../services/search-service";

type resultData = {
  avatar_url: string;
  url: string;
  followers: number;
  location: string;
  name: string;
};

export default function Result() {
  const params = useParams();
  const user = String(params.user);

  const [result, setResult] = useState<resultData>();

  useEffect(() => {
    console.log("update");
    searchService
      .findUser(user)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  return (
    <section id="results-section rrc-mt54">
      {result ? (
        <div className="rrc-results-card">
          <div className="rrc-profile-img">
            <img src={result.avatar_url} />
          </div>
          <div className="rrc-results-info">
            <h2>Informações</h2>
            <p>Perfil: {result.url}</p>
            <p>Seguidores: {result.followers}</p>
            <p>Localidade: {result.location}</p>
            <p>Nome: {result.name}</p>
          </div>
        </div>
      ) : (
        <div>
          <h1>Erro ao buscar usuário</h1>
        </div>
      )}
    </section>
  );
}
