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
        setResult(undefined);
        console.log(error.response.data);
      });
  }, [user]);

  return (
    <section id="result-section">
      {result ? (
        <div className="rrc-result-card rrc-container rrc-mt54">
          <img src={result.avatar_url} className="rrc-profile-img" />
          <div className="rrc-result-info">
            <h2>Informações</h2>
            <p className="rrc-result-field">
              Perfil:{" "}
              <a className="rrc-user-link" href={result.url} target="_blank">
                {result.url}
              </a>
            </p>
            <p className="rrc-result-field">
              Seguidores: <span>{result.followers}</span>
            </p>
            <p className="rrc-result-field">
              Localidade: <span>{result.location}</span>
            </p>
            <p className="rrc-result-field">
              Nome: <span>{result.name}</span>
            </p>
          </div>
        </div>
      ) : (
        <h1 className="rrc-result-error">Erro ao buscar usuário</h1>
      )}
    </section>
  );
}
