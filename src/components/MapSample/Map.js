import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Container } from 'react-bootstrap';
 
export class MapContainer extends Component {
    constructor(props){
        super(props);
            this.state = {
                showingInfoWindow: true,
                activeMarker: {},
                selectedPlace: "",
            };
    }

    onMarkerClick = (props, marker, e) =>{
        console.log('asc');
        this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
}
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: true,
        activeMarker: null
      })
    }
  };
 
  render() {
    return (
        <Container style={{width:"100%"}}>
        <div style={{width:"45%", margin:"2%;"}}>
        <Map google={this.props.google} 
                                                style={{width:'97%',height:'76%'}}
                                                zoom={17}
                                                initialCenter={{
                                                    lat: 42.175343,
                                                    lng: -87.985829
                                                }}>
                                                <Marker onClick={this.onMarkerClick}
                                                     name={'SM Megamall'}
                                                     position={{lat: 42.175343, lng: -87.985829}}
                                                     initialCenter={{lat: 42.175343, lng: -87.985829}}

                                                />
                                                 <InfoWindow onClose={this.onInfoWindowClose}>
                                                    <div>
                                                   
                                                    </div>
                                                </InfoWindow> 
                                            </Map>
        </div>
        
        <div style={{width:"45%", margin:"2%;"}}>
        <Map google={this.props.google}
          onClick={this.onMapClicked} zoom={18}
          initialCenter={{
            lat: 42.167983, 
            lng: -88.336326
          }}>
   <Marker onClick={this.onMarkerClick}
                name={'Current location'} 
                position={{
                    lat: 42.167983, 
                    lng: -88.336326
                }}
                />
 
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
   
      </Map>
  
        </div>
   
      </Container>
    )
  }
}
const LoadingContainer = (props) => (
    <div>Fancy loading container!</div>
  ) 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyC3Is-W3lSolWDV8bwxtCMBfnYvREOEa3w'),
  LoadingContainer: LoadingContainer
})(MapContainer)