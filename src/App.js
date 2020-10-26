import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { NotFound } from './components/NotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;