import React, { Component } from 'react'

export default class extends Component {
  constructor(props){
    super(props)
    this.ref = React.createRef() // 背
    this.state = {
      value: '3333333'
    }
  }
  //要是想要设置默认选中 就在state中给value进行赋值就ok
  // handleChange = e => {
  //   const val = e.target.value.length
  //   if(val > 6){
  //     console.log('123')
  //   }
  //   this.setState({
  //     value: e.target.value
  //   })
  // }

  ref = () => {

  }

  btn = () => {
    console.log(this.ref.value)
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <input 
          type="text" 
          value={value}  
          ref={el => this.ref = el} 
          name="" 
          id=""
        />
        {/* <input type="text" value={value} ref={this.ref} name="" id=""/> */}
        <button onClick={this.btn}>按钮</button>
        {/* <input type="text" value={value} onChange={this.handleChange} /> */}
        {/* <label htmlFor="redio1">水果：</label>
        <select value={value} onChange={this.handleChange}>
          <option value="grapefruit">葡萄柚</option>
          <option value="lime">酸橙</option>
          <option value="coconut">椰子</option>
          <option value="mango">芒果</option>
        </select> */}
      </div>
    )
  }
}
