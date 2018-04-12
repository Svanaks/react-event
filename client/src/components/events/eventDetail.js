import React, { Component } from 'react';
import SimpleMap from '../maps/maps';
import './eventDetail.css';
import '../materialize/materialize.min.css';
import mapicon from '../../map.svg';


class EventDetail extends Component {
  constructor() {
    super();
    this.addActiveClass= this.addActiveClass;
    this.state = {
        event: [],
        active: false,
    }
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  componentWillMount() {
    this.getEvent();
  }
  
  eventBody() {
    if (this.state.event.hasOwnProperty('ID')) {
      return (
        <div className="containerFlip">
          <div className={this.state.active ? 'card flipped': 'card'}>
            <div className="front">
              <table id="tableResults" className="responsive-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Address 1</th>
                    <th>Address 2</th>
                    <th>Name</th>
                    <th>See on map</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{this.state.event.ID}</td>
                    <td>{this.state.event.DESCRIPTION}</td>
                    <td>{this.state.event.ADDRESS1}</td>
                    <td>{this.state.event.ADDRESS2}</td>
                    <td>{this.state.event.NAME}</td>
                    <td className="centered"><img src={mapicon} className="map-icon" alt="map-icon" onClick={this.toggleClass.bind(this)}/></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="back" onClick={this.toggleClass.bind(this)}><SimpleMap event={this.state.event} key={this.state.event['ID']}/></div>
          </div>

        </div>
      )
    }
  }

  getEvent(){
    let eventId = this.props.match.params.id;
    let cachedEvent = [];
    let cachedEvents = {
      events: [],
      filteredEvents: []
    }
    cachedEvents = localStorage.getItem('events');
    cachedEvent.push(JSON.parse(cachedEvents));
    cachedEvent = cachedEvent[0].find( event => event.ID === eventId);
    if (cachedEvent && !navigator.onLine) {
      this.setState({ event: cachedEvent });
      return;
    } else {
    
    fetch(`/api/events/${eventId}`)
      .then(res => res.json())
      .then(event => this.setState(
        {event : event}, function() {
        }
      ))
    }
  }

  render () {
    return (
      <div>
        <div className="containerDetail">
          {this.eventBody()}
        </div>
      </div>
    )
  }
}

export default EventDetail;