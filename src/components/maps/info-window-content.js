import React, { Component } from 'react';
import {styles} from './styles';

class MapsInfoWindowContent extends Component {
  render() {
    const { marker, searchedLocation, clickedMarker } = this.props;
    return (
      <div className="column" style={styles.infoWindow}>
        {
          clickedMarker ?
          (
            <a onClick={() => clickedMarker(marker)}>
              <h2 className="title is-5" style={{marginBottom: 5}}>{marker.name}</h2>
            </a>
          )
          :
          (
            <h2 className="title is-5" style={{marginBottom: 5}}>{marker.name}</h2>
          )
        }

        {
          marker.distance && (
            <p>
              <em><ins>{ `Há ${marker.distance} km de sua localização `}</ins></em>
            </p>
          )
        }

        <div className="informations" style={{ marginTop: 10}}>
          <p>{marker.address}</p>
          <p>{marker.telephone}</p>
          <p>{marker.description}</p>
          <br/>
          <a target="_blank" href={`https://www.google.com/maps/dir/${searchedLocation.lat},${searchedLocation.lng}/${marker.location.lat},${marker.location.lng}`}>
            <i className="fa fa-map-marker"></i> Rotas
          </a>
        </div>

      </div>
    );
  }
}

export default MapsInfoWindowContent;
