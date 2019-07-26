import React, {Component} from "react";
import { HashRouter } from "react-router-dom";
// import routes from "../routes.js";

export default class Header extends Component {
    render () {
        return (
            <HashRouter>
                <div>
                    2 Wheel'd Shelfy
                    {/* <link to="/">Dashboard</link>
                    <link to="/add">Add Inventory</link> */}
                </div>
            </HashRouter>
        )
    }
}