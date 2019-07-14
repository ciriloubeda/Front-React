import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
  }

  delete() {
    let auxId = this.props.obj.id;
    // console.log(auxId)
    axios.delete('https://api-irso.herokuapp.com/clientes/' + this.props.obj.id).then(response => {
      // console.log("OK - Response: ");
      console.log(response);
      alert("El registro N° " + auxId + " acaba de eliminarse");
      window.location.reload();
    }).catch(error => {
      // console.log("Error - Response: ");
      console.log(error.response);
    });    
  }
  
  render() {
    return (
      <tr>
        <td>
          {this.props.obj.id}
        </td>
        <td>
          {this.props.obj.nombres}
        </td>
        <td>
          {this.props.obj.apellido}
        </td>
        <td>
          {this.props.obj.direccion}
        </td>
        <td>
          {this.props.obj.cod_postal}
        </td>
        <td>
          {this.props.obj.telefono}
        </td>
        <td>
          <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Editar</Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Borrar</button>
        </td>
      </tr>
    );
  }
  
}  
export default TableRow;