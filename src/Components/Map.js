import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
//import Websocket from 'react-websocket';
import BusImage from '../Assests/Bus.png';

const mapStyles = {
    width: '100%',
    height: '100%',
};

class MapContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            places: [
                
            ],
            Markerlat: "Bus",
            Markerlng: "",
        }
    }

    /*{ latitude: 7.8731, longitude: 79.7718 },
     { latitude: 6.053519, longitude: 80.220978 },
     { latitude: 7.8731, longitude: 80.7718 }, */

    onMarkerClick = (props, marker, e, lat, lng) => {
        console.log(this.state.Markerlat);
        this.setState({
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    displayPlaces = () => {
        console.log(this.state.places);
        return this.state.places.map((place, index) => {
            return <Marker
                key={index}
                id={index}
                position={{
                    lat: place.latitude,
                    lng: place.longitude
                }}
                icon={BusImage}
                onClick={this.onMarkerClick} />

        })
    }

    /* handleData(data) {
        let result = JSON.parse(data);
        console.log(result);
        this.setState({
            places: result,
            //count: this.state.count + result.movement
        });
    } */
    
     componentDidMount() {
        fetch('http://qualonsavy.herokuapp.com/api/tracker/getLiveData/Tr0')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    places: json,
                })
            });
    } 

    render() {
        return (
            <div>
                {/* <Websocket url='ws://demos.kaazing.com/echo' // ws://qualonsavy.herokuapp.com/api/trackers/getAll
                    onMessage={this.handleData.bind(this)}
                /> */}
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 7.8731, lng: 80.7718 }}
                >
                    {this.displayPlaces()}
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.Markerlat}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA63LvAPje4E-ftTpMNGh4Al6ySp1e27xc'
})(MapContainer);

//AIzaSyCHj4VxLtNyma73bLVGpb5XUfV82jUifdQ  my one
