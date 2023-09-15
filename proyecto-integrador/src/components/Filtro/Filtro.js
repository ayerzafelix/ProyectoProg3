import React, { Component } from "react";

class Filtro extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }
    preventDefault(e){
        e.preventDefault();
        
    }
    datosPopular(e) {
        const { value } = e.target;
        this.setState({ value },()=> this.props.filtrador(value));
        ;
      }
      

    render(){
        return(
            <form onSubmit={(e)=>this.preventDefault(e)}>
                <input value={this.state.value} onChange={(e)=>this.datosPopular(e)} type='text' placeholder='Filtrar por nombre' name="usuario"  />
                <button type='submit'>Filtrar</button>
            </form>)


        }
}

export default Filtro;