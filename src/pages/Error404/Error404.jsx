import { Link } from "react-router-dom";
import "./error404.scss";

export function Error404() {
  return (
    <div className="errorBloc">
      <h1 className="errorH1">404</h1>
      <h2 className="errorH2">Oups ! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="errorLink">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}