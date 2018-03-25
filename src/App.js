import React, { Component } from 'react';
import Button from './Button'
import Frequency from './Frequency'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first:true,
      values:[],
      showError: false,
      showResult: false,
      inputValue:1,
      selectValue:"day"
    };
  }
  upPressed() {
    this.setState({inputValue:this.state.inputValue + 1});
  }
  downPressed() {
    if (this.state.inputValue > 1) {
      this.setState({inputValue:this.state.inputValue - 1});
    }
  }
  handleChange(event) {
    this.setState({selectValue:event.target.value}, ()=>{
      console.log(this.state.selectValue);
    });
    
  }
  checkedValue(value) {
    let {values} = this.state;
    const i= values.indexOf(value);
    if (i===-1) {
      values.push(value);
    } else {
      values.splice(i,1);
    }
    this.setState({values});
  }
  toggle(btn) {
    this.setState({
      first:btn,
      showResult:false,
      showError:false,
      values:[]
    });

  }
  submit(e) {
    console.log(this.state.values);
    e.preventDefault();
    if (this.state.first) {
      if (this.state.values.length===0) {
        this.setState({showError:true,showResult:false});
      } else {
        this.setState({showError:false,showResult:true})
      }
    } else {
      this.setState({showError:false,showResult:true});
    }
  }
  render() {
    return (
      <div className="App">
        <div className="row">
          <label className="flex-item">Select Patient Self-Monitoring Schedule*</label>
          <div className="buttons flex-item">
            <Button value="By Time Slot" css={(this.state.first)?"btn first active":"btn first" }
            toggle={this.toggle.bind(this,true)} />

            <Button value="By Frequency" css={(!this.state.first)?"btn second active":"btn second" }
            toggle={this.toggle.bind(this,false)}  />
          </div>
          <form id="formContainer" className='flex-item' onSubmit={this.submit.bind(this)}>
            {(this.state.first)?
            (<div className='btn-container'>
                <Button value="Before Breakfast" css="btn" clickHandler={this.checkedValue.bind(this)} disable={this.state.showResult}/>
                <Button value="Before Lunch" css="btn" clickHandler={this.checkedValue.bind(this)} disable={this.state.showResult}/>
                <Button value="Before Dinner" css="btn" clickHandler={this.checkedValue.bind(this)} disable={this.state.showResult}/>
                <Button value="Before Supper" css="btn" clickHandler={this.checkedValue.bind(this)} disable={this.state.showResult}/>
                <Button value="After Breakfast" css="btn" clickHandler={this.checkedValue.bind(this)} disable={this.state.showResult}/>
                <Button value="After Lunch" css="btn" clickHandler={this.checkedValue.bind(this)} disable={this.state.showResult}/>
                <Button value="After Dinner" css="btn" clickHandler={this.checkedValue.bind(this)} disable={this.state.showResult}/>
                <Button value="After Supper" css="btn" clickHandler={this.checkedValue.bind(this)} disable={this.state.showResult}/>
            </div>)
            
           :<Frequency inputValue={this.state.inputValue} upPressed={this.upPressed.bind(this)} 
           downPressed={this.downPressed.bind(this)} handleChange={this.handleChange.bind(this)} selectValue={this.state.selectValue}/>}
          
          <button type="submit" className='flex-item submitBtn'>Save</button>
          </form>
        {this.state.showError && <p>Please choose at least 1 time slot.</p>}
        {this.state.showResult && this.state.first && (<ul>{this.state.values.map((v,k)=>{
          return <li key={k}>{v}</li>
          })}</ul>)
        }
        {this.state.showResult && !this.state.first && <p>{this.state.inputValue} times a {this.state.selectValue}</p>}
        
        </div>
      </div>
    );
  }
}

export default App;
