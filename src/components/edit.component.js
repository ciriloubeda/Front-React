import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
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

  componentDidMount() {
    axios.get('https://api-irso.herokuapp.com/clientes/'+ this.props.match.params.id).then(response => {
      console.log("hola")
        this.setState({ 
          nombres: response.data.nombres, 
          apellido: response.data.apellido,
          direccion: response.data.direccion,
          cod_postal: response.data.cod_postal,
          telefono: response.data.telefono 
        });
    }).catch(function (error) {
        console.log(error);
    });
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
    axios.put('https://api-irso.herokuapp.com/clientes/' + this.props.match.params.id, obj).then(res => {
      console.log(res.data);
      this.props.history.push('/index');
    });
  }


  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Actualizar Cliente</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nombre:  </label>
                    <input
                      placeholder="*campo obligatorio"
                      maxLength = "30"
                      pattern="[a-zA-z]{1,30}"
                      required="this.state.nombres"
                      title = "Solo letras del a-z | Máximo 30 caracteres"
                      type="text"
                      className="form-control" 
                      value={this.state.nombres}
                      onChange={this.onChangeNombre}
                      />
                </div>
                <div className="form-group">
                    <label>Apellido: </label>
                    <input
                      placeholder="*campo obligatorio"
                      maxLength = "30"
                      pattern="[a-zA-z]{1,30}"
                      required="this.state.apellido"
                      title = "Solo letras del a-z | Máximo 30 caracteres"
                      type="text"
                      className="form-control"
                      value={this.state.apellido}
                      onChange={this.onChangeApellido}
                      />
                </div>
                <div className="form-group">
                    <label>Dirección: </label>
                    <input
                      placeholder="*campo obligatorio"
                      maxLength = "50"
                      required="this.state.direccion"
                      title = "Máximo 50 caracteres" 
                      type="text" 
                      className="form-control"
                      value={this.state.direccion}
                      onChange={this.onChangeDireccion}
                      />
                </div>
                <div className="form-group">
                    <label>Código Postal: </label>
                    <input
                      placeholder="*campo obligatorio"
                      maxLength = "50"
                      required="this.state.cod_postal"
                      title = "Máximo 50 caracteres" 
                      type="text"
                      className="form-control"
                      value={this.state.cod_postal}
                      onChange={this.onChangeCodPostal}
                      />
                </div>
                <div className="form-group">
                    <label>Telefono: </label>
                    <input
                      placeholder="*campo obligatorio"
                      maxLength = "50"
                      required="this.state.telefono"
                      title = "Máximo 50 caracteres" 
                      type="text" 
                      className="form-control"
                      value={this.state.telefono}
                      onChange={this.onChangeTelefono}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Actualizar" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}