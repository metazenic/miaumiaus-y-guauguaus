import { Link } from "react-router-dom";
import Emoji from "./Emoji";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">
          <Emoji emoji="🏠🏠" label="casas" />
          Inicio
          <Emoji emoji="🏠🏠" label="casas" />
        </Link>
      </li>
      <li>
        <Link to="/guauguaus">
          <Emoji emoji="🐶" label="perro" />
          Guauguaus
          <Emoji emoji="🐶" label="perro" />
        </Link>
      </li>
      <li>
        <Link to="/miaumiaus">
          <Emoji emoji="🐱" label="gato" />
          miaumiaus
          <Emoji emoji="🐱" label="gato" />
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
