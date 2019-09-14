import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MaterialTable, { MTableToolbar } from 'material-table';
import {
    Add,
    Check,
    Clear,
    DeleteOutline,
    ChevronRight,
    Edit,
    SaveAlt,
    FilterList,
    FirstPage,
    LastPage,
    ChevronLeft,
    Search,
    ArrowUpward,
    Remove,
    ViewColumn,

} from '@material-ui/icons';
import { Paper } from '@material-ui/core';
import TopNavigation from '../../Layout/Layout';

import axios from 'axios';

const styles = theme => ({
    root: {

        borderStyle: 'solid',
        borderColor: '#2fbdb8'
    },
});


class AddBus extends Component {

    state = {
        columns: [

            {
                title: 'Number Plate', field: 'numberPlate'

            },
            {
                title: 'Route Number', field: 'routeNumber', type: "string"
            },
            {
                title: 'Fuel Type', field: 'fuelType',
                lookup: { diesel: 'Diesel', petrol: 'Petrol 92', kerosene: 'Petrol 95' },
            },
            {
                title: 'From', field: 'from', type: "string"
            },
            {
                title: 'To', field: 'to', type: "string"
            },


        ],
        data: []
    }

    componentDidMount(){
      
    }


    render() {
        return (
            <div>
                <TopNavigation />
                <MaterialTable
                    title="Add Bus"
                    icons={{
                        Add: Add,
                        Check: Check,
                        Clear: Clear,
                        Delete: DeleteOutline,
                        DetailPanel: ChevronRight,
                        Edit: Edit,
                        Export: SaveAlt,
                        Filter: FilterList,
                        FirstPage: FirstPage,
                        LastPage: LastPage,
                        NextPage: ChevronRight,
                        PreviousPage: ChevronLeft,
                        ResetSearch: Clear,
                        Search: Search,
                        SortArrow: ArrowUpward,
                        ThirdStateCheck: Remove,
                        ViewColumn: ViewColumn,
                    }}
                    style={{ marginTop: 10 }}

                    columns={this.state.columns}
                    data={this.state.data}
                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {
                                        const data = this.state.data;
                                        data.push(newData);
                                        this.setState({ data }, () => resolve());
                                    }
                                    resolve()
                                }, 1000)
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {
                                        const data = this.state.data;
                                        const index = data.indexOf(oldData);
                                        data[index] = newData;
                                        this.setState({ data }, () => resolve());
                                    }
                                    resolve()
                                }, 1000)
                            }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {
                                        let data = this.state.data;
                                        const index = data.indexOf(oldData);
                                        data.splice(index, 1);
                                        this.setState({ data }, () => resolve());
                                    }
                                    resolve()
                                }, 1000)
                            }),
                    }}
                    components={{
                        Container: props => (
                            <Paper {...props} className={this.props.classes.root} elevation={0} square={true} />
                        ),
                        Toolbar: props => (
                            <div style={{ backgroundColor: '#2fbdb8' }}>
                                <MTableToolbar {...props} />
                            </div>
                        )
                    }}
                />
            </div>

        )
    }
}

AddBus.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};


export default withStyles(styles, { withTheme: true })(AddBus);
