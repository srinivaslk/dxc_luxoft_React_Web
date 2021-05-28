import React from "react"
import Router from "./Router"
import "./components/@vuexy/rippleButton/RippleButton"

import "react-perfect-scrollbar/dist/css/styles.css"
import "prismjs/themes/prism-tomorrow.css"

const App = props => {
  let url_path = window.location.href;
    let split_path = url_path.split('/');
    localStorage.setItem('dynamic_page_name', split_path[3]);
    //this.setState({ page_name:split_path[3] }); 
  return <Router />
}

export default App
