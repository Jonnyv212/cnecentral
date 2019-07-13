import React, { Component } from "react";

class Construction extends Component {
  Page = () => {
    return (
      <div class="comingSoon" style={{ color: "white" }}>
        <h2 class="CSmessage" style={{ color: "white" }}>
          Page is under construction
        </h2>

        <div class="progress">
          <div
            class="progress-bar progress-bar-success progress-bar-striped"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            // style="width:20%"
          >
            20% Complete
          </div>
        </div>

        <h2 class="CSmessage" style={{ color: "white" }}>
          Check back with us periodically, or follow our social media for
          further updates!
        </h2>
      </div>
    );
  };
  render() {
    return <div>{this.Page()}></div>;
  }
}

export default Construction;
