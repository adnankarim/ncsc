import React, { Component } from "react";
import Layout from "../Layout/Layout";
import Event from "../../sections/event";
import Gallery from "./Gallery";
class Gallery extends Component {
  render() {
    return (
      <Event
        mode='events'
        title={this.props.title}
        subtitle={this.props.subtitle}
        Element={Gallery}y'
      />
    );
  }
}

export default Gallery;
