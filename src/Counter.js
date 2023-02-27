import React from "react";
export class Counter extends React.Component {
    state = {
      count: this.props.initialValue ?? 0,
    };
  
    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState((state) => ({
          count: state.count + (this.props.incrementBy ?? 1),
        }));
      }, this.props.timeOut ?? 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return <div><h1>{this.state.count}</h1></div>;
    }
  }

  //We do not need the constructor anymore since we are using the componenetDidMount method