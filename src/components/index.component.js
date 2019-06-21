import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {clientes: []};
    }
    componentDidMount(){
      axios.get('https://api-irso.herokuapp.com/clientes')
        .then(response => {
          console.log(response)
          this.setState({ clientes: response.data.customers});
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.clientes.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Lista Clientes</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Direccion</th>
                <th>Codigo Postal</th>
                <th>Telefono</th>
                <th colSpan="2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }