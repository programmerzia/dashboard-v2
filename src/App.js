import './App.css';
import SideBar from './components/SideBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Reports from './components/pages/Reports';
import Reports1 from './components/pages/Reports1';
import Reports2 from './components/pages/Reports2';
import Reports3 from './components/pages/Reports3';
function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/reports/reports1" component={Reports1} />
          <Route exact path="/reports/reports2" component={Reports2} />
          <Route exact path="/reports/reports3" component={Reports3} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
