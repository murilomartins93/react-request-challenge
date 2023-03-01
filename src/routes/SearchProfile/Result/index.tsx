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
        <div className="rrc-result-card rrc-mt54">
          <div className="rrc-profile-img">
            <img src={result.avatar_url} />
          </div>
          <div className="rrc-result-info">
            <h2>Informações</h2>
            <p>Perfil: {result.url}</p>
            <p>Seguidores: {result.followers}</p>
            <p>Localidade: {result.location}</p>
            <p>Nome: {result.name}</p>
          </div>
        </div>
      ) : (
        <h1 className="rrc-result-error">Erro ao buscar usuário</h1>
      )}
    </section>
  );
}
