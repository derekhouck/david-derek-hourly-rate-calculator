import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDayRate:0,
            hoursWorked:0,
            rate:10,
        }
    }
    changeDayRate(e) {
        //console.log(e)
        const dayRate = e.target.value
        this.setState({
            currentDayRate: dayRate
        })
        this.calculateHourlyRate()

    }
    changehoursWorked(e) {
        const hourRate = e.target.value
        this.setState({
            hoursWorked: hourRate
        })
        this.calculateHourlyRate()
    }
    calculateHourlyRate() {
        const dayRate = this.state.currentDayRate
        const hoursWorked = this.state.hoursWorked;
        const setRate = (dayRate / hoursWorked)
        this.setState({
            rate: setRate
        }) 
    }

    render() {
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000} handleChange={(e) => this.changeDayRate(e)} />
                <NumberInput id="hours" label="Hours" min={1} max={12} handleChange={(e) => this.changehoursWorked(e)} />
                <Output id="hourly-rate" label="Hourly rate" value={this.state.rate.toFixed(2)} />
            </form>
        );
    }
}

