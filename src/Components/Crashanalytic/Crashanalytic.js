import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

import TopNavigation from '../../Layout/Layout';

function Crashanalytics() {
    const initialLineData = {
        dataLine1: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Elevation",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(225, 204,230, .3)",
                    borderColor: "rgb(205, 130, 158)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130,1 58)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [100, 59, 80, 81, 56, 55, 40]
                }
            ]
        },
        dataLine2: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Accelerometer",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(225, 204,230, .3)",
                    borderColor: "rgb(205, 130, 158)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130,1 58)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [100, 59, 80, 81, 56, 55, 40]
                }
            ]
        }
    };

    const [lineData, setLineData] = React.useState(initialLineData)
    return (
        <div>
            <TopNavigation />
            <MDBContainer>
                <h3 className="mt-5">Elevation</h3>
                <Line data={lineData.dataLine1} options={{ responsive: true }} />
            </MDBContainer>
            <MDBContainer>
                <h3 className="mt-5">Accelerometer</h3>
                <Line data={lineData.dataLine2} options={{ responsive: true }} />
            </MDBContainer>
        </div>

    );
}


export default Crashanalytics;