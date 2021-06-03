import "./App.css";
import Owner from "./components/owner";
import Animals from "./components/animals";
import Navbar from "./components/navbar";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateOwner from "./components/createOwner";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation bar */}
        <Navbar />
        <Switch>
          <Route path="/owner/new" component={CreateOwner} />
          <Route path="/owner/:id" component={Owner} />
          <Route path="/animals" component={Animals} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
