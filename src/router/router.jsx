import { Link, Navigate, createBrowserRouter } from "react-router-dom";
import CharacterPage from "../pages/CharacterPage";
import CharacterDetails from "../pages/CharacterDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/characters" />,
  },
  {
    path: "/characters",
    element: <CharacterPage />,
  },
  {
    path: "/characters/:charactersId",
    element: <CharacterDetails />,
  },
  {
    path: "*",
    element: (
      <div>
        <h1>404 not found</h1>
        <h2>
          <Link to="/characters">go to character page</Link>
        </h2>
      </div>
    ),
  },
]);
