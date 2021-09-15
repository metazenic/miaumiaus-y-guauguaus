import Inicio from "./Inicio";
import Emoji from "../componentes/Emoji";

const Guauguaus = () => {
  return (
    <>
      <Inicio />
      <h1>
        Muchos guauguaus!
        <Emoji emoji="✨" label="brillito" />
      </h1>
      <h2>
        <Emoji emoji="🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶" label="perros" />
      </h2>
    </>
  );
};

export default Guauguaus;
