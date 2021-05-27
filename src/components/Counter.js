import React, { Component } from "react";
import "./Counter.css";

const styles = {
  container: {
    display: "flex",
    marginBottom: "15px",
  },
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: "",
      num1: 0,
      num2: 0,
      res: 0,
      ope: "",
    };
  }

  numero1 = () => {
    this.setState({
      counterValue: this.state.counterValue + "1",
    });
  };

  numero2 = () => {
    this.setState({
      counterValue: this.state.counterValue + "2",
    });
  };

  numero3 = () => {
    this.setState({
      counterValue: this.state.counterValue + "3",
    });
  };
  numero4 = () => {
    this.setState({
      counterValue: this.state.counterValue + "4",
    });
  };
  numero5 = () => {
    this.setState({
      counterValue: this.state.counterValue + "5",
    });
  };
  numero6 = () => {
    this.setState({
      counterValue: this.state.counterValue + "6",
    });
  };
  numero7 = () => {
    this.setState({
      counterValue: this.state.counterValue + "7",
    });
  };
  numero8 = () => {
    this.setState({
      counterValue: this.state.counterValue + "8",
    });
  };
  numero9 = () => {
    this.setState({
      counterValue: this.state.counterValue + "9",
    });
  };
  numero0 = () => {
    this.setState({
      counterValue: this.state.counterValue + "0",
    });
  };

  punto = () => {
    this.setState({
      counterValue: this.state.counterValue + ".",
    });
  };

  limpiar = () => {
    this.setState({
      counterValue: "",
      num1: 0,
      num2: 0,
      res: 0,
      ope: "",
    });
  };

  suma = () => {
    this.setState({
      num1: (this.state.num1 = parseFloat(this.state.counterValue)),
      counterValue: "",
      ope: "+",
    });
  };

  resta = () => {
    this.setState({
      num1: (this.state.num1 = parseFloat(this.state.counterValue)),
      counterValue: "",
      ope: "-",
    });
  };

  multi = () => {
    this.setState({
      num1: (this.state.num1 = parseFloat(this.state.counterValue)),
      counterValue: "",
      ope: "*",
    });
  };

  divi = () => {
    this.setState({
      num1: (this.state.num1 = parseFloat(this.state.counterValue)),
      counterValue: "",
      ope: "/",
    });
  };

  porcentaje = () => {
    this.setState({
      num1: (this.state.num1 = parseFloat(this.state.counterValue)),
      counterValue: "",
      ope: "%",
    });
  };

  igual = () => {
    switch (this.state.ope) {
      case "+":
        this.setState({
          num2: (this.state.num2 = parseFloat(this.state.counterValue)),
          res: (this.state.res = this.state.num1 + this.state.num2),
          counterValue: (this.state.counterValue = this.state.res),
        });
        break;

      case "-":
        this.setState({
          num2: (this.state.num2 = parseFloat(this.state.counterValue)),
          res: (this.state.res = this.state.num1 - this.state.num2),
          counterValue: (this.state.counterValue = this.state.res),
        });
        break;

      case "*":
        this.setState({
          num2: (this.state.num2 = parseFloat(this.state.counterValue)),
          res: (this.state.res = this.state.num1 * this.state.num2),
          counterValue: (this.state.counterValue = this.state.res),
        });
        break;

      case "/":
        this.setState({
          num2: (this.state.num2 = parseFloat(this.state.counterValue)),
          res: (this.state.res = this.state.num1 / this.state.num2),
          counterValue: (this.state.counterValue = this.state.res),
        });
        break;

      case "%":
        this.setState({
          num2: (this.state.num2 = parseFloat(this.state.counterValue)),
          res: (this.state.res = (this.state.num1 * this.state.num2) / 100),
          counterValue: (this.state.counterValue = this.state.res),
        });
        break;
    }
  };

  render() {
    //Renderiza/muestra información
    const { counterValue } = this.state; //Destructuramos
    return (
      <div>
        <div className="container">
          <div className="header">
            <h1>{counterValue}</h1>
          </div>

          <div className="number">
            <button onClick={this.numero7}>7</button>
            <button onClick={this.numero8}>8</button>
            <button onClick={this.numero9}>9</button>
            <button id="func" onClick={this.resta}>
              -
            </button>
            <button id="func" onClick={this.divi}>
              /
            </button>
            <button id="func" onClick={this.limpiar}>
              ac
            </button>
          </div>
          <div className="number">
            <button onClick={this.numero4}>4</button>
            <button onClick={this.numero5}>5</button>
            <button onClick={this.numero6}>6</button>
            <button id="func" onClick={this.suma}>
              +
            </button>
            <button id="func" onClick={this.multi}>
              *
            </button>
            <button id="func" onClick={this.porcentaje}>%</button>
          </div>
          <div className="number">
            <button onClick={this.numero1}>1</button>
            <button onClick={this.numero2}>2</button>
            <button onClick={this.numero3}>3</button>
            <button onClick={this.numero0}>0</button>
            <button id="func" onClick={this.punto}>
              .
            </button>
            <button id="func" onClick={this.igual}>
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
