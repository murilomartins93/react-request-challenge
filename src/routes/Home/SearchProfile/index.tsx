import "./styles.css";
import { Outlet } from "react-router-dom";
import * as searchService from "../../../services/search-service";
import { useState } from "react";

type inputData = {
  user: string;
};

export default function SearchProfile() {
  
  const [inputData, setInputData] = useState<inputData>({
    user: "",
  });

  function handleInputChange(event: any) {
    const value = event.target.value;
    const user = event.target.name;
    setInputData({ ...inputData, [user]: value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    console.log(searchService.findUser(inputData.user));
  }

  return (
    <main>
      <form id="search-card" className="rrc-mt54" onSubmit={handleFormSubmit}>
        <h1 className="rrc-card-title">Encontre um perfil Github</h1>
        <input
          name="user"
          value={inputData.user}
          type="text"
          id="card-input"
          placeholder="Usuário Github"
          onChange={handleInputChange}
        />
        <button type="submit" id="submit-search" className="rrc-btn">
          Encontrar
        </button>
      </form>
      <Outlet />
    </main>
  );
}
