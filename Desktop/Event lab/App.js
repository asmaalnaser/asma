import React, { Component } from "react";
import Checkbox from "./Checkbox";
import items from "./Task";
import "../index.css";

class App extends Component {
  render() {
    let CheckboxItems = (items.map)(function (listItems) {
      return (

        <div className="items">

          <Checkbox
            title={listItems.title}
            Detail={listItems.Detail} />

        </div>

      )
    })
    return CheckboxItems
  }
}
export default App