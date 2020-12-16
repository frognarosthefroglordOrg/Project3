import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import DayPicker from 'react-day-picker';
import DatePicker from 'react-datepicker';
import 'react-day-picker/lib/style.css';


class TimeSheet extends Component {
    /*constructor(props) {
       super(props)
       const [state, setState] = useState({
        weekEnding: "",
        billingHours: "",
        compensatedHours: "",
        startingTime: true,
        endingTime: "master",
        totalHours: "",
        floatingDay: false,
        holiday: false,
        vacation: false
      });
    }*/

    state = {
        //unit: {
            selectedDay: null,
            weekEnding: "",
            billingHours: "",
            compensatedHours: "",
            startingTime: "N/A",
            endingTime: "N/A",
            totalHours: 0,
            dayOff: ""
        //}
    }

    handleChange = (evt) => {
        const value = evt.target.value;
        if(value === "floatingDay" || value === "holiday" || value === "vacation")
        {
            this.setState({
                ...this.state,
                [evt.target.name]: value,
                startingTime: "N/A",
                endingTime: "N/A",
                totalHours: 0,
            })
            return
        }
        this.setState({
          ...this.state,
          [evt.target.name]: value
        });
    }

    handleDayClick = (day) => {
        this.setState({ selectedDay: day });
    }

    render() {
       return (
            <div class = "container">
                <form>
                    <div class = "col">
                        <div class = "row">
                            <label>
                                <DayPicker selectedDays={this.state.selectedDay}
                                onDayClick={this.handleDayClick}/>
                            </label>
                        </div>
                        <div>
                            <table class="table">
                                <tr>
                                    <th>Day</th>
                                    <th>Date</th>
                                    <th>Starting Time</th>
                                    <th>Ending Time</th>
                                    <th>Total Hours</th>
                                    <th>Floating Day</th>
                                    <th>Holiday</th>
                                    <th>Vacation</th>
                                </tr>

                                <tr>
                                    <td>
                                        {this.state.selectedDay}
                                    </td>
                                    <td>
                                        {this.state.selectedDay}
                                    </td>
                                    <td>
                                        <label>
                                            <select name="startingTime" onChange={this.handleChange} value={this.state.startingTime}>
                                                <option value="N/A">N/A</option>
                                                <option value="8am">8 AM</option>
                                                <option value="9am">9 AM</option>
                                                <option value="10am">10 AM</option>
                                                <option value="11am">11 AM</option>
                                                <option value="12am">12 PM</option>
                                                <option value="1pm">1 PM</option>
                                                <option value="2pm">2 PM</option>
                                                <option value="3pm">3 PM</option>
                                                <option value="4pm">4 PM</option>
                                                <option value="5pm">5 PM</option>
                                                <option value="6pm">6 PM</option>
                                            </select>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <select name="endingTime" onChange={this.handleChange} value={this.state.endingTime}>
                                                <option value="N/A">N/A</option>
                                                <option value="8am">8 AM</option>
                                                <option value="9am">9 AM</option>
                                                <option value="10am">10 AM</option>
                                                <option value="11am">11 AM</option>
                                                <option value="12am">12 PM</option>
                                                <option value="1pm">1 PM</option>
                                                <option value="2pm">2 PM</option>
                                                <option value="3pm">3 PM</option>
                                                <option value="4pm">4 PM</option>
                                                <option value="5pm">5 PM</option>
                                                <option value="6pm">6 PM</option>
                                            </select>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <select name="totalHours" onChange={this.handleChange} value={this.state.totalHours}>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                        </label>
                                    </td>
                                    
                                    <td>
                                        <input type ="radio" name ="dayOff" value ="floatingDay"
                                        checked={this.state.dayOff === "floatingDay"}
                                        onChange={this.handleChange}/>
                                    </td>
                                    <td>
                                        <input type ="radio" name ="dayOff" value ="holiday"
                                        checked={this.state.dayOff === "holiday"}
                                        onChange={this.handleChange}/>
                                    </td>
                                    <td>
                                        <input type ="radio" name ="dayOff" value ="vacation"
                                        checked={this.state.dayOff === "vacation"}
                                        onChange={this.handleChange}/>
                                    </td>
                                    
                                </tr>

                                
                            </table>
                    </div>
                    </div>
                
                
                </form>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>
        )
    }
}

 export default TimeSheet;