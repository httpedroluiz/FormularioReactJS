import React, { Component } from "react";
import firebase from "../../Firebase";
import './style.css'; 

class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      nascimento: ""
    }
  }

  async componentDidMount() {
    await firebase.auth().onAuthStateChanged(async (usuario)=>{
      if(usuario){
        var uid = usuario.uid;

        await firebase.firestore().collection("usuario").doc(uid).get()
        .then((retorno)=>{

          this.setState({
            nome: retorno.data().nome,
            sobrenome: retorno.data().sobrenome,
            nascimento: retorno.data().nascimento
          });
        });
      }
    });
  }

  render() {
    return(
      <div className="principal-container"> {}
        <h1>Página principal</h1>
        <h3 className="user-data-title">Dados do usuário</h3> {}
        <p><span className="user-data-label">Nome:</span> {this.state.nome}</p> {}
        <p><span className="user-data-label">Sobrenome:</span> {this.state.sobrenome}</p> {}
        <p><span className="user-data-label">Data de nascimento:</span> {this.state.nascimento}</p> {}
      </div>
    )
  }
}

export default Principal;
