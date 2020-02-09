import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

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

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          { this.state.techs.map( tech => <li key={tech}>{tech}</li> ) }
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
