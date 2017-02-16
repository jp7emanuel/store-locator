import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MapsInfoWindowContent from './info-window-content';
import { openInfoWindow, toggleFilters, filterDistance } from '../../actions/maps';
import MapsFilters from './filters';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {filterMarkersByDistance} from '../../services/maps';

class MapsMarkerList extends Component {

  static PropTypes = {
    nearestMarkers: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  handleMarkerClick = (marker) => {
    this.props.openInfoWindow(marker);
  }

  handleFilterClick = () => {
    this.props.toggleFilters();
  }

  handleFilterSelect = (value) => {
    this.props.filterDistance(this.props.nearestMarkers, value);
  }

  render() {
    const { nearestMarkers, searchedLocation, displayFilters, distanceValue } = this.props;

    if (!nearestMarkers) {
      return <div> Loading... </div>;
    }

    const renderMakers = filterMarkersByDistance(nearestMarkers, distanceValue).map((marker, key) => {
      return (
        <div key={marker._id}>
          <MapsInfoWindowContent marker={marker} searchedLocation={searchedLocation} clickedMarker={this.handleMarkerClick} />
          { key !== (nearestMarkers.length-1) ? <hr/> : "" }
        </div>
      );
    });

    return (
      <div className="stores-box">
        <div className="card">
          <div className="card-header">
            <h2 className="card-header-title">Lojas Mais Próximas</h2>
            <a className={ 'card-header-icon' + (displayFilters ? ' active' : '') } onClick={this.handleFilterClick}>
              Filtrar
              <span className="icon">
                <i className="fa fa-filter"></i>
              </span>
            </a>
          </div>

          <div className="card-content">
            <ReactCSSTransitionGroup
              transitionName="filters"
              transitionEnter={true}
              transitionLeave={true}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
                { displayFilters &&
                  (
                    <MapsFilters initialValue={distanceValue} filterSelect={this.handleFilterSelect} />
                  )
                }
              </ReactCSSTransitionGroup>

              {renderMakers}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    displayFilters: state.maps.displayFilters,
    distanceValue: state.maps.filters.distance
  }
}


export default connect(mapStateToProps, { openInfoWindow, toggleFilters, filterDistance })(MapsMarkerList);
