import React, { Component } from "react";
import firebase from "../../Firebase";
import { Link } from "react-router-dom";
import Loading from '../Loading';
import './style.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      senha: "",
      showLoading: ""
    }

    this.acessar = this.acessar.bind(this);
  }

  async acessar(){
    this.setState({ showLoading: true });
     await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
     .then(() => {
        window.location.href = "./principal";
     })
     .catch((erro)=>{
        
     });
  }

  render(){
    return(
      <div className="login-container"> {}
        <h1>Login</h1>
        <input type="text" placeholder="E-mail" onChange={(e) => this.setState({email:e.target.value})} className="login-input" /> {}
        <br/>
        <input type="password" placeholder="Senha" onChange={(e) => this.setState({senha:e.target.value})} className="login-input" /> {}
        <br/><br/>
        <button onClick={this.acessar} className="login-button">Acessar</button> {}
        <br/><br/>
        Caso não tenha um cadastro, <Link to ="/cadastro" className="login-link">clique aqui!</Link> {}
        {this.state.showLoading && <Loading/>}
      </div>
    )
  }
}

export default Login;
