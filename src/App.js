import React, {Component}  from "react";
import Index from "./components/Feed";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      teste: [
        {id: 1, nome: 'Fabricio', idade: 19, cargo:'Programador'},
        {id: 2, nome: 'Pedro', idade: 20, cargo:'Designer'},
        {id: 3, nome: 'Matheus', idade: 24, cargo:'Contador'},
        {id: 4, nome: 'Paulo', idade: 17, cargo:'Professor'},
        {id: 5, nome: 'Fernanda', idade: 26, cargo:'Cientista'}
      ]
    }
  }
  render(){
    return(
      <div>
        {this.state.teste.map((item)=>{
          return(
            <Index id={item.id} nome={item.nome} idade={item.idade} cargo={item.cargo} />          
        )})}
      </div>
    )
  }
}

export default App;