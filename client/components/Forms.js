import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  handleNameChange = (evt) => {
    this.setState({
      name: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    alert(`${this.state.name}`);
    evt.preventDefault();
  };

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name : {""}</label>
          <input type="text" value={name} onChange={this.handleNameChange} />
          <button type="submit">Hiya!</button>
          <h3>Hiya {name}, What do you feel like eating today?</h3>
        </div>
      </form>
    );
  }
}

export default Forms;
