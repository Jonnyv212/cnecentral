import React, { Component } from "react";
import './generic.css';


class Banner extends Component {

    render() {
        return (
            <div>
                <header>
                    <h1>CNE CENTRAL</h1>
                </header>
                <nav>
                    <ul className="navigation">
                        <li>Home</li>
                        <li>Series</li>
                        <li>Merch</li>
                        <li>Connect</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Banner