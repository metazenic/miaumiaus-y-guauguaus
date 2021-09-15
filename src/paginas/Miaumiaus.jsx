import Inicio from "./Inicio";
import Emoji from "../componentes/Emoji";

const Miaumiaus = () => {
  return (
    <>
      <Inicio />
      <h1>
        Muchos miaumiaus!
        <Emoji emoji="✨" label="brillito" />
      </h1>
      <h2>
        <Emoji emoji="🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱" label="Gatos" />
      </h2>
    </>
  );
};

export default Miaumiaus;
