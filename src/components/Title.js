import { Component } from "../core/denev";
import messageStore from "../store/message";

export default class Title extends Component {
  constructor() {
    super({
      tagName: "h1",
    });
    messageStore.subscribe("message", (newVal) => {
      this.render();
    });
  }
  render() {
    this.el.textContent = `Title: ${messageStore.state.message}`;
  }
}
