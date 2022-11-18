import { Component } from "react";
import "./App.css";

const Voiture = (props) => {
  return (
    <div>
      <br />
      Marque : {props.marque}
      <br />
      Modèle : {props.modele}
      <br />
      Couleur : {props.couleur}
      <br />
      Année : {props.annee}
    </div>
  );
};

class App extends Component {
  state = { Brand: "Mazda", Model: "Mazda 3", Color: "Rouge", Year: "2010" };

  changerInformation = () => {
    this.setState({Model:"Mazda CX-5", Color:"Blanc"})
  }

  render() {
    return (
      <div className="App">
        <Voiture
          marque={this.state.Brand}
          modele={this.state.Model}
          couleur={this.state.Color}
          annee={this.state.Year}
        />
        <button onClick={this.changerInformation}>Changer</button>
      </div>
    );
  }
}

export default App;
