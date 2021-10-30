import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  //  1 chi usul
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  // 2 chi usul

  // state = {
  //   count: 0,
  // };

  // increment = () => {
  //   this.setState((state) => {
  //     return { count: state.count + 1 };
  //   });
  // };

  // decrement = () => {
  //   this.setState((state) => {
  //     return { count: state.count - 1 };
  //   });
  // };
  render() {
    return (
      <>
        <h4>Count {this.state.count}</h4>
        <div className="d-flex">
          <button className="btn btn-success me-2" onClick={this.increment}>
            Increment
          </button>
          <button className="btn btn-danger ms-2" onClick={this.decrement}>
            Increment
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
