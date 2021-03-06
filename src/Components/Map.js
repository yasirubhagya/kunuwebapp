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
            places: [
                {   id:'',
                    lat:0,
                    lon:0,
                    garbageType:'',
                    reportCount:'',
                }
            ],
            clickNum: 0
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
            console.log(place);
            return <Marker
                key={index}
                id={index}
                position={{
                    lat: place.lat,
                    lng: place.lon
                }}
                icon={BinImage}
                onClick={(props, marker) => this.onMarkerClick(props, marker, index)} />

        })
    }
    deleteClick = (id) => {
        console.log('clicked');
        this.setState({showingInfoWindow: false,clickNum:0})
        db.collection("locations")
            .doc(this.state.places[id].id)
            .delete()
            .then(function () {
                console.log("Document successfully deleted!");
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });

    }

    componentDidMount() {
        db.collection("locations")
            .onSnapshot((data)=>{
               let maped =data.docs.map(doc=>{
                   return {...doc.data(),id:doc.id};
               })
               this.setState({places:[...maped]});
               console.log(this.state.places);
            })
            
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
                    {
                    this.state.places.length>0?
                    <InfoWindowEx
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                        <div>
                            <div>
                                Type of Garbage =
                            {this.state.places[this.state.clickNum].garbageType}

                            </div>
                            <div>
                                Number of Reported  =
                        {this.state.places[this.state.clickNum].reportCount}
                            </div>

                            <button
                                onClick={()=>{this.deleteClick(this.state.clickNum)}}
                            >
                                Marked as Done
                            </button>
                        </div>

                    </InfoWindowEx>
                    :null
                    }
                </Map>
            </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA63LvAPje4E-ftTpMNGh4Al6ySp1e27xc'
})(MapContainer);

//AIzaSyCHj4VxLtNyma73bLVGpb5XUfV82jUifdQ  my one
