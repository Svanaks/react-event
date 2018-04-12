import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';

class Event extends PureComponent {
  render() {  
    return (
      <div className="card-media">
        <div className="card-media-body">
          <div className="card-media-body-top">
            <span className="subtle"></span>
          </div>
          <span className="card-media-body-heading">
            <Link to={`/events/${this.props.event.ID}`}>
              {this.props.event.ID} 
              {this.props.event.NAME ? `: ${this.props.event.NAME}` : '' }
            </Link>
          </span>
          <div className="card-media-body-supporting-bottom">
            <span className="card-media-body-supporting-bottom-text subtle">Address 1 : {this.props.event.ADDRESS1}</span>
            <span className="card-media-body-supporting-bottom-text subtle u-float-right"></span>
          </div>
          <div className="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
            <span className="card-media-body-supporting-bottom-text subtle">Address 2 : {this.props.event.ADDRESS2}</span>
          </div>
        </div>
      </div>
    );
  }
}


export default Event;