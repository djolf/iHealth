import React, { Component } from 'react';
import './Frequency.css';

class Frequency extends Component {
   
    render() {
        return (
            <div className="frequency-container">
                <div className="ctn">
                    <input className="num-input" type="number" value={this.props.inputValue} min='1'/>
                    <div className="btn-holder">
                        <button type="button" className="input-btn up" onClick={this.props.upPressed}>
                            <i class="material-icons">keyboard_arrow_up</i>
                        </button>
                        <button type="button" className="input-btn" onClick={this.props.downPressed}>
                            <i class="material-icons">keyboard_arrow_down</i>
                        </button>
                    </div>
                </div>
                <label className="timesLabel"> times a </label>
                <select className="select" onChange={this.props.handleChange} >
                    <option value="day">Day(s)</option>
                    <option value="week">Week(s)</option>
                    <option value="month">Month(s)</option>
                </select>
            </div>
        );
    }
}

export default Frequency;
