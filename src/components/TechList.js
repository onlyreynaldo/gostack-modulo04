import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: []
  };

  // Ejecutado ni bien que el componente se carga en la pantalla
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Ejecutado siempre que haya cambios en las props o estado
  componentDidUpdate(_, prepState) {
    if (prepState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  // Ejecutado cuando el componente deja de existir
  componentWillUnmount() {

  }

  handleImputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      techs: [ ...this.state.techs, this.state.newTech ],
      newTech: ''
    });
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          { this.state.techs.map( tech => (
            <TechItem 
              key={tech}
              techValue={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          )) }
        </ul>
        <h1>{ this.state.newTech }</h1>
        <input 
          type="text"
          onChange={this.handleImputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
