import { createRouter } from "../core/denev";
import Home from "./Home";
import About from "./About";

const routes = [
  { path: "#/", component: Home },
  { path: "#/about", component: About },
];

export default createRouter(routes);
