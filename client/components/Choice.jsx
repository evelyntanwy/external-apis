import React, { Component } from "react";

class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "What's for dinner",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="choice">
        <h3>Tell me whats on your mind</h3>
        <p>divide them with a comma ( , )</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea
              placeholder="enter choice here.. eg : Choice 1, Choice 2"
              id="textarea"
            />
          </label>
          <input
            id="tags"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Choice;
