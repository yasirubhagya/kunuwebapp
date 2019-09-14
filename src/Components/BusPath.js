import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, Polyline } from 'google-maps-react';
import axios from 'axios';

//import Websocket from 'react-websocket';


const mapStyles = {
    width: '100%',
    height: '100%',
};

class MapContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            places: [
                { lat: -35.28032, lng: 149.12907 },
                { lat: -35.28099, lng: 149.12929 },
                { lat: -35.28144, lng: 149.12984 },
                { lat: -35.28194, lng: 149.13003 },
                { lat: -35.28282, lng: 149.12956 },
                { lat: -35.28302, lng: 149.12881 },
            ],
            snappedPlaces:[]
        }
    }
    /*{ latitude: -35.27801, longitude: 79.7718 },
     { latitude: 6.053519, longitude: 80.220978 },
     { latitude: 7.8731, longitude: 80.7718 }, */
    displayPlaces = () => {
        console.log(this.state.places);
        console.log(this.state.snappedPlaces);
        return this.state.places.map((place, index) => {
            return <Marker key={index} id={index} position={{
                lat: place.lat,
                lng: place.lng
            }}
                onClick={() => alert("clicked me!")} />
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
        axios.get('https://roads.googleapis.com/v1/snapToRoads', {
            interpolate: true,
            key: 'AIzaSyA63LvAPje4E-ftTpMNGh4Al6ySp1e27xc',
            path: this.state.places.join('|')
        })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    snappedPlaces: json,
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
                    {/*this.displayPlaces()*/}
                    <Polyline
                        path={this.state.places}
                        strokeColor="#0000FF"
                        strokeOpacity={0.8}
                        strokeWeight={2} />
                </Map>
            </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA63LvAPje4E-ftTpMNGh4Al6ySp1e27xc'
})(MapContainer);

//AIzaSyC2_OjDEi-KqIOPdBodS-Fm99GSQ0vTtA4  my one