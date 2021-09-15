import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./componentes/Nav";
import Inicio from "./paginas/Inicio";
import Guauguaus from "./paginas/Guauguaus";
import Miaumiaus from "./paginas/Miaumiaus";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={() => <Inicio />} />
          <Route path="/guauguaus" component={() => <Guauguaus />} />
          <Route path="/miaumiaus" component={() => <Miaumiaus />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
