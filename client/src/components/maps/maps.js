import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyGreatPlace from './my_great_place';

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    if(props.event.LONGITUDE && props.event.LATITUDE){
    this.state = {
      center: {
        lat: parseFloat(props.event.LATITUDE),
        lng: parseFloat(props.event.LONGITUDE)
      },
      zoom: 14
    }}else{
      this.state = {
        center: {
          lat: 48.889852,
          lng: 2.252331
        },
        zoom: 14
      }
    }
  }
  render() {
    return (
      <div style={{ height: '100%', width: '100%' }} className="myMap">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDE7t7V_csa6Ci5iqnv0iEG1c_AZJ8Vm5Q'}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
        <MyGreatPlace lat={this.state.center.lat} lng={this.state.center.lng} text={this.props.event.NAME} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;