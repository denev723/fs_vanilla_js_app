import { Component } from "../core/denev";
import TextField from "../components/TextField";
import Message from "../components/Message";
import Title from "../components/Title";

export default class Home extends Component {
  render() {
    this.el.innerHTML = /* html */ `
            <h1>Home</h1>
    `;
    this.el.append(new TextField().el, new Message().el, new Title().el);
  }
}
