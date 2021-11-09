import React, { Component } from "react";

import "../index.css";

class Checkbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Checked: this.props.Checked,




        }
    }
    handelChange = () => {
        this.setState({ Checked: this.state.Checked === " Yes Done" ? " Not Done" : " Yes Done" });

    }

    handelMouseOver = (props) => {
        console.log(props)
        alert(props.Detail)

    }


    render() {

        return (

            <div className="cont">
                {this.state.Checked === " Yes Done"
                    ? <input className="box" type="checkbox" onChange={() => this.handelChange()} value='check1' checked></input>

                    : <input className="box" type="checkbox" onChange={() => this.handelChange()} value='check1'></input>
                }

                <label onMouseOver={() => this.handelMouseOver(this.props)}> <h2> {this.props.title}   </h2>
                    {this.state.Checked}



                </label>

                <hr></hr>
            </div>
        )
    }





}

export default Checkbox

