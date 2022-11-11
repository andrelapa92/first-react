import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import BanhoETosa from "./pages/BanhoETosa";
import Produtos from "./pages/Produtos";
import NoPage from "./pages/NoPage";
import Navbar from "./componentes/NavBar"
import FavoriteColor from './componentes/CodeBlock';
import api from "./services/api";
import React, { useEffect, useState } from "react";

function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/users/andrelapa92")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  
  return (
    <div className="App">
      <header>
        <Navbar fixed="top" />
      </header>
      <body>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="banhoetosa" element={<BanhoETosa />} />
                <Route path="produtos" element={<Produtos />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <FavoriteColor />
          <div>
          <br />
            <p>Usuário: {user?.login}</p>
            <p>Biografia: {user?.bio}</p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
