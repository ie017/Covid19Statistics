import './index.css';
import 'groundworkcss/css/groundwork.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Components/Container';
import reportWebVitals from './reportWebVitals';
import Graphe from './Components/Graphe';
import Home from './Components/Home';
import GetCovid from './Components/GetCovid';
import Contagion from './Components/Contagion';
import Table from './Components/Table';
import './Components/main';
import Symptoms from './Components/Symptoms';
import Protection from './Components/Protection';
import Question from './Components/Question';
import '../node_modules/chart.js/dist/chart.min'
import Footer from './Components/Footer'
ReactDOM.render(
  <React.StrictMode>
    <Container />
    <Home />
    <GetCovid />
    <Contagion />
    <Symptoms />
    <Protection />
    <Graphe />
    <script src='chart.min.js'></script>
    <Table />
    <script src="main.js"></script>
    <Question />
    <Footer />
  </React.StrictMode>,
  document.getElementById("rt")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
