import TheHeader from "./components/TheHeader";
import { Component } from "./core/denev";

export default class App extends Component {
  render() {
    const routerView = document.createElement("router-view");
    this.el.append(new TheHeader().el, routerView);
  }
}
