import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
//import Websocket from 'react-websocket';
import BinImage from '../Assests/Bin.png';
import InfoWindowEx from './InfoWindowEx';

import Button from '@material-ui/core/Button';

import { db } from '../Components/Firebase/Init';

const mapStyles = {
    width: '100%',
    height: '100%',
};

class MapContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            places: [],
            garbageType: [],
            reportCount: [],
            clickNum: ''

        }
    }

    /*{ latitude: 7.8731, longitude: 79.7718 },
     { latitude: 6.053519, longitude: 80.220978 },
     { latitude: 7.8731, longitude: 80.7718 }, */

    onMarkerClick = (props, marker, index) => {
        //console.log(index);
        this.setState({
            activeMarker: marker,
            showingInfoWindow: true,
            clickNum: index
        });
    }

    displayPlaces = () => {
        //console.log(this.state.places);
        return this.state.places.map((place, index) => {
            return <Marker
                key={index}
                id={index}
                position={{
                    lat: place.latitude,
                    lng: place.longitude
                }}
                icon={BinImage}
                onClick={(props, marker) => this.onMarkerClick(props, marker, index)} />

        })
    }
    deleteClick = () => {
        console.log('clicked');
        db.collection("locations")
            .doc("zwQZOE6rQGuizHsSzqq9")
            .delete()
            .then(function () {
                console.log("Document successfully deleted!");
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });

    }

    componentDidMount() {
        db.collection("locations")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    console.log(doc.data);
                    return doc.data();
                });
                //console.log(data);
                const newLatitudeData = data.map(data => {
                    console.log(data.lat);
                    return data.lat;
                });
                const newLongitudeData = data.map(data => {
                    console.log(data.lon);
                    return data.lon;
                });
                /* const newGarbageTypeData = data.map(data => {
                    return data.lon;
                }); const newReportCountData = data.map(data => {
                    return data.reportCount;
                }); */
                /* this.setState({
                    places: [...newLocationData],
                    garbageType: [...newGarbageTypeData],
                    reportCount: [...newReportCountData]
                }) */ // array of cities objects
                //console.log(this.state.garbageType);
            });
    }


    render() {
        return (
            <div>

                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 7.8731, lng: 80.7718 }}
                >
                    {this.displayPlaces()}
                    <InfoWindowEx
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                        <div>
                            <div>
                                Type of Garbage =
                            {this.state.garbageType[this.state.clickNum]}

                            </div>
                            <div>
                                Number of Reported  =
                        {this.state.reportCount[this.state.clickNum]}
                            </div>

                            <button
                                onClick={this.deleteClick}
                            >
                                Marked as Done
                                </button>
                        </div>

                    </InfoWindowEx>
                </Map>
            </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA63LvAPje4E-ftTpMNGh4Al6ySp1e27xc'
})(MapContainer);

//AIzaSyCHj4VxLtNyma73bLVGpb5XUfV82jUifdQ  my one
