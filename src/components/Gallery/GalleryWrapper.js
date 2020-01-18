import React, { Component } from "react";
import Event from "../../sections/event";
import Gallery from "./Gallery";
class GalleryWrapper extends Component {
  render() {
    return (
     
      <Event
        images={this.props.images}
        mode={this.props.mode}
        title={this.props.title}
        subtitle={this.props.subtitle}
        Element={Gallery}
      />
    );
  }
}

export default GalleryWrapper;
