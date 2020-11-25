import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import React from "react";
import Header from "./components/framework/Header";
import Footer from "./components/framework/Footer";
import RandomQuiz from "./api/RandomQuiz";
import QuizSelect from "./components/QuizSelect";

function App() {
  return (
    <Router>
    <Header/>
      <Switch>
        <Route path="/" component={QuizSelect} exact />
        <Route path="/r/:topic" component={RandomQuiz} exact />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
