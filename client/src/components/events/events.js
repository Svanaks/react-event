import React, { Component } from 'react';
import Infinite from 'react-infinite';
import Event from './event';
import './events.css';


class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      filteredEvents: []
    }
  }

  componentDidMount() {
    let cachedEvents = {
      events: [],
      filteredEvents: []
    }
    cachedEvents = localStorage.getItem('events');
    if (cachedEvents && !navigator.onLine) {
      this.setState({ events: JSON.parse(cachedEvents) });
      this.setState({ filteredEvents: JSON.parse(cachedEvents) });
      return;
    } else {
      fetch('/api/events')
        .then(res => res.json())
        .then(events => this.setState(
          {events, filteredEvents: events}, function() {
            localStorage.setItem("events", JSON.stringify(events));
          }
        ))
    }
  }

  filterList(searchValue){
    let updatedList = this.state.events;
    updatedList = updatedList.filter((item) => {      
      if (item.hasOwnProperty('NAME')) {
        return (
          (item.NAME.toLowerCase().search(searchValue.nativeEvent.target.value.toLowerCase()) !== -1)) 
      } else return false;
    });
    this.setState({filteredEvents: updatedList});
  }


  render() {   
    return (
      <div>
        <div className="container">
          <form>
            <fieldset className="form-group">
              <label htmlFor="searchInput">
                <input type="text" id="searchInput" autoComplete="off" className="form-control form-control-lg" placeholder="Search by name" onChange={evt => this.filterList(evt)}/>
              </label>
            </fieldset>
          </form>
          <Infinite elementHeight={170} useWindowAsScrollContainer>
            {this.state.filteredEvents.map((event, i) => {
                return( 
                <div key={event.ID}>
                  <Event event={event} />
                </div>
                )
              }
            )}
          </Infinite>
        </div>
      </div>
    )
  }
}

export default Events;
