import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ListItemText from '@material-ui/core/ListItemText';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function ControlledOpenSelect() {
    const classes = useStyles();
    const [numberPlate, setNumberPlate] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [selectedStartDate, setSelectedStartDate] = React.useState(new Date());
    const [selectedStartTime, setSelectedStartTime] = React.useState(new Date());
    const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());
    const [selectedEndTime, setSelectedEndTime] = React.useState(new Date());

    function handleChange(event) {

        setNumberPlate(event.target.value);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleOpen() {
        setOpen(true);
    }

    function handleStartDateChange(date) {
        setSelectedStartDate(date);
    }
    function handleStartTimeChange(date) {
        setSelectedStartTime(date);
    }
    function handleEndDateChange(date) {
        setSelectedEndDate(date);
    }
    function handleEndTimeChange(date) {
        setSelectedEndTime(date);
    }

    const inputs = [
        'One',
        'Two'
    ];
    return (
        <Grid container justify="space-around" style={{ marginTop: 20 }}>
            <form autoComplete="off" >
                <Button className={classes.button} onClick={handleOpen}>
                   Bus
                </Button>
                <FormControl className={classes.formControl}>
                    <InputLabel>Number Plate</InputLabel>
                    <Select
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={numberPlate}
                        onChange={handleChange}
                        inputProps={{
                            name: 'numberPlate',

                        }}
                    >
                        {inputs.map(input => (
                            <MenuItem key={input} value={input}>
                                <ListItemText primary={input} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </form>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        margin="normal"
                        id="start-date"
                        label="Start Date"
                        format="MM/dd/yyyy"
                        value={selectedStartDate}
                        onChange={handleStartDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="normal"
                        id="start-time"
                        label="Start Time"
                        value={selectedStartTime}
                        onChange={handleStartTimeChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        margin="normal"
                        id="end-date"
                        label="End Date"
                        format="MM/dd/yyyy"
                        value={selectedEndDate}
                        onChange={handleEndDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="normal"
                        id="end-time"
                        label="End Time"
                        value={selectedEndTime}
                        onChange={handleEndTimeChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </Grid>
    );
}