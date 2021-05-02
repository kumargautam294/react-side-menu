import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Week1Component from './components/Week1';
import Week2Component from './components/Week2';
import Week3Component from './components/Week3';
import Week4Component from './components/Week4';
import Week5Component from './components/Week5';
import Week6Component from './components/Week6';
import Week7Component from './components/Week7';
import Week8Component from './components/Week8';
import Week9Component from './components/Week9';
import Week10Component from './components/Week10';
import { NavLink } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
        <div className="brand">
          <h1>Pesto Ninja Training</h1>
        </div>
      <div className="App">
        <div className="sidebar">
          <NavLink activeClassName="active" to="/" exact>Week 1</NavLink>
          <NavLink activeClassName="active" to="/week2" exact>Week 2</NavLink>
          <NavLink activeClassName="active" to="/week3" exact>Week 3</NavLink>
          <NavLink activeClassName="active" to="/week4" exact>Week 4</NavLink>
          <NavLink activeClassName="active" to="/week5" exact>Week 5</NavLink>
          <NavLink activeClassName="active" to="/week6" exact>Week 6</NavLink>
          <NavLink activeClassName="active" to="/week7" exact>Week 7</NavLink>
          <NavLink activeClassName="active" to="/week8" exact>Week 8</NavLink>
          <NavLink activeClassName="active" to="/week9" exact>Week 9</NavLink>
          <NavLink activeClassName="active" to="/week10" exact>Week 10</NavLink>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Week1Component} />
            <Route exact path="/week2" component={Week2Component} />
            <Route exact path="/week3" component={Week3Component} />
            <Route exact path="/week4" component={Week4Component} />
            <Route exact path="/week5" component={Week5Component} />
            <Route exact path="/week6" component={Week6Component} />
            <Route exact path="/week7" component={Week7Component} />
            <Route exact path="/week8" component={Week8Component} />
            <Route exact path="/week9" component={Week9Component} />
            <Route exact path="/week10" component={Week10Component} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
