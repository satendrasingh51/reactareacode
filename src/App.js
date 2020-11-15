import React, { Component } from 'react'
import Code from './code'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aocode: '',
      ao: '',
      range: '',
      aonumber: ''
    }
    this.updateState = this.updateState.bind(this);
  }
  //DEL~W~236~2
  updateState(calculation) {
    if (calculation) {
      if (calculation.length == '10') {
        this.setState({ aocode: calculation.substring(0, 3) })
        this.setState({ ao: calculation.substring(4, 5) })
        this.setState({ range: calculation.substring(6, 8) })
        this.setState({ aonumber: calculation.substring(9) })
      }
      if (calculation.length == '11') {
        this.setState({ aocode: calculation.substring(0, 3) })
        this.setState({ ao: calculation.substring(4, 5) })
        this.setState({ range: calculation.substring(6, 9) })
        this.setState({ aonumber: calculation.substring(10) })
      }
      if (calculation.length == '12') {
        this.setState({ aocode: calculation.substring(0, 3) })
        this.setState({ ao: calculation.substring(4, 6) })
        this.setState({ range: calculation.substring(7, 10) })
        this.setState({ aonumber: calculation.substring(11) })
      }
    }
  }

  changeHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <div>
        {/* <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
          <Code update={this.updateState} />
        </div>
        <input type="text" name="aocode" id="area" value={this.state.aocode} onChange={this.changeHandle} />
        <input type="text" name="ao" id="area" value={this.state.ao} onChange={this.changeHandle} />
        <input type="text" name="range" id="area" value={this.state.range} onChange={this.changeHandle} />
        <input type="text" name="aonumber" id="area" value={this.state.aonumber} onChange={this.changeHandle} /> */}

        
      </div>
    )
  }
}

export default App
