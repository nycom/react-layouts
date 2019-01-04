import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          <Route path="/:id" component={EditLayoutPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
