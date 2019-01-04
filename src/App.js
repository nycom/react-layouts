import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import EditLayoutPage from "./Pages/EditLayoutPage";
import MainPage from './Pages/MainPage';
import Header from './components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  return (
    <div className="root">
      <CssBaseline />
      <Header />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/:id" component={EditLayoutPage} />
          <Route component={()=>{return <div><h1>404 Page Not Found</h1> <Link to='/'>ET come home :)</Link> </div>}} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
