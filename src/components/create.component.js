import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeApellido = this.onChangeApellido.bind(this);
    this.onChangeDireccion = this.onChangeDireccion.bind(this);
    this.onChangeCodPostal = this.onChangeCodPostal.bind(this);
    this.onChangeTelefono = this.onChangeTelefono.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nombres: '',
      apellido: '',
      direccion:'',
      cod_postal:'',
      telefono:''
    }
  }
  onChangeNombre(e) {
    this.setState({
      nombres: e.target.value
    });
  }
  onChangeApellido(e) {
    this.setState({
      apellido: e.target.value
    })  
  }
  onChangeDireccion(e) {
    this.setState({
      direccion: e.target.value
    })
  }
  onChangeCodPostal(e) {
    this.setState({
      cod_postal: e.target.value
    })
  }
  onChangeTelefono(e) {
    this.setState({
      telefono: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nombres: this.state.nombres,
      apellido: this.state.apellido,
      direccion: this.state.direccion,
      cod_postal: this.state.cod_postal,
      telefono: this.state.telefono
    };
    console.log(obj.nombres)

    // axios.post('/user', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })


    axios.post('https://api-irso.herokuapp.com/clientes', obj)
        .then(res => {console.log(res)}).catch(err => {
          console.log("limaaaaaaaaaaaa")
          console.log(err.response.data)
        });
    console.log("hola")
    this.setState({
      nombres: '',
      apellido: '',
      direccion:'',
      cod_postal:'',
      telefono:''
    })
  }
 
  render() {
    console.log("hola o2")
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Alta de Clientes</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nombre:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nombres}
                      onChange={this.onChangeNombre}
                      />
                </div>
                <div className="form-group">
                    <label>Apellido: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.apellido}
                      onChange={this.onChangeApellido}
                      />
                </div>
                <div className="form-group">
                    <label>Direccion: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.direccion}
                      onChange={this.onChangeDireccion}
                      />
                </div>
                <div className="form-group">
                    <label>Codigo Postal: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.cod_postal}
                      onChange={this.onChangeCodPostal}
                      />
                </div>
                <div className="form-group">
                    <label>Telefono: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.telefono}
                      onChange={this.onChangeTelefono}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Agregar" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}