import { Component } from "react";
import "./App.css";

const College = (props) => {
  return (
    <div>
      <h1>Je suis un College</h1>
      <br />
      Je suis {props.categorie}.
      <br />
      Je me situe a {props.endroit}.
      <br />
      Je suis le college {props.nom}.
      <br />
      {props.children}
    </div>
  );
};

const Ordinateur = () => {
  return (
    <div>
      <h1>Je suis un ordinateur</h1>
    </div>
  );
};

class App extends Component {
  state = { informations: [{cat:"Prive", lieu:"Quebec"}, {cat:"Public", lieu:"Gaspesie"}] };
  changerCollege = () => {
    this.setState({informations: [{cat:"Public", lieu:"Montreal"}, {cat:"Prive", lieu:"Sag"}] });
  };
  render() {
    return (
      <div className="App">
        <h1> Bonjour ! Comment allez-vous? </h1>
        <College>Je suis un college de formation continue</College>
        <College categorie={this.state.informations[1].cat} endroit={this.state.informations[1].lieu} />
        <College categorie="prive" endroit="Quebec" nom="ABC" />
        <College />
        <Ordinateur />
        <Ordinateur />
        <Ordinateur />
        <button onClick={this.changerCollege}>Change moi</button>
      </div>
    );
  }
}

export default App;
