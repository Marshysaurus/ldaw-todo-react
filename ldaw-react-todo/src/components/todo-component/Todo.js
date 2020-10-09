import React from "react";
import "./todo.css";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      id: this.props.id,
      done: this.props.done,
      visible: true,
    };
  }

  onChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.state.visible ? (
          <div className={`todo ${this.state.done === "done" ? "done" : ""}`}>
            <div className="text">
              <p>{this.state.name}</p>
              <div className="buttons">
                <form
                  action={"http://localhost:4000/tasks/done/" + this.state.id}
                  method="POST"
                >
                  <input type="submit" value="Done" className="blue"></input>
                </form>
                <form
                  action={"http://localhost:4000/tasks/delete/" + this.state.id}
                  method="POST"
                >
                  <input type="submit" value="Delete" className="red"></input>
                </form>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Todo;
