import React, { Component } from "react";
import firebase from "../../Firebase";
import { Link } from "react-router-dom";
import Loading from '../Loading';
import './style.css'

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      nome: "",
      sobrenome: "",
      nascimento: "",
      message: "",
      showLoading: ""
    }

    this.gravar = this.gravar.bind(this);
  }

  resetFields(){
    document.querySelector('.input-email').value = ""
    document.querySelector('.input-senha').value = ""
    document.querySelector('.input-nome').value = ""
    document.querySelector('.input-sobrenome').value = ""
    document.querySelector('.input-dtnasc').value = ""
  }

  async gravar(e) {
    e.preventDefault()
        
    const { email, senha, nome, sobrenome, nascimento } = this.state;

    if(email === "" || senha === "" || nome === "" || sobrenome === "" || nascimento === ""){
      this.setState({ message: "Por favor, preencha todos os campos!" });
      return;
    } else {
      
      await firebase.auth().createUserWithEmailAndPassword(email, senha);
      const user = firebase.auth().currentUser;
      await firebase.firestore().collection("usuario").doc(user.uid).set({
        nome,
        sobrenome,
        nascimento
      });

      this.setState({ message: "Cadastro realizado com sucesso!", showLoading: true });
      setTimeout(() => {
        this.resetFields();
        window.location.href = "./"
      }, 3000);
    }
  }


  render() {
    const { message } = this.state;

    return (
      <div className="form-container">
        <form>
          <h1>Página de cadastro</h1>
          <input required className="input-email" type="text" placeholder="E-mail" onChange={(e) => this.setState({ email: e.target.value })} />
          <br />
          <input required className="input-senha" type="password" placeholder="Senha" onChange={(e) => this.setState({ senha: e.target.value })} />
          <br />
          <input required className="input-nome" type="text" placeholder="Nome" onChange={(e) => this.setState({ nome: e.target.value })} />
          <br />
          <input required className="input-sobrenome" type="text" placeholder="Sobrenome" onChange={(e) => this.setState({ sobrenome: e.target.value })} />
          <br />
          <input required className="input-dtnasc" type="date" placeholder="Data de nascimento" onChange={(e) => this.setState({ nascimento: e.target.value })} />
          <br /><br />
          <button onClick={this.gravar}>Cadastrar</button> &nbsp;
          {message && <div className={`message-container ${message.includes('sucesso') ? 'success-message' : 'error-message'}`}>{message}</div>}
          <br /><br />
          <Link to='/' className="link">Já tem uma conta?</Link>
        </form>
        {this.state.showLoading && <Loading/>}
      </div>
    );
  }
}

export default Cadastro;
