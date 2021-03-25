import React, { Component } from 'react'
import './App.css'
import  CheckBox  from './CheckBox'


class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      showMe: false
    },
    this.state={
      showMe1: false
    },
    this.state={
      showMe2: false
    },
    this.state={
      showMe3: false
    },
    this.state = {
      
      Process: [
        {id: 1, value: "Chown", isChecked: false},
        {id: 2, value: "Kill", isChecked: false},
        {id: 3, value: "Setgid", isChecked: false},
        {id: 4, value: "Setuid", isChecked: false}
      ],
      Network: [
        {id: 1, value: "net_bind_service", isChecked: false},
        {id: 2, value: "net_broadcast", isChecked: false},
        {id: 3, value: "net_admin", isChecked: false},
        {id: 4, value: "net_raw", isChecked: false},
        {id: 4, value: "ipc_lock", isChecked: false},
        {id: 4, value: "ipc_owner", isChecked: false},
      ],
    }
  }


  operation(){
    this.setState({
      showMe:!this.state.showMe
    })
  }
  operation1(){
    this.setState({
      showMe:!this.state.showMe1
    })
  }
  operation2(){
    this.setState({
      showMe:!this.state.showMe2
    })
  }
  operation3(){
    this.setState({
      showMe:!this.state.showMe3
    })
  }
  //Process array
  handleAllChecked = (event) => {
    let Network = this.state.Network
    Network.forEach(Network => Network.isChecked = event.target.checked) 
    this.setState({Network: Network})
  }

  handleCheckChieldElement = (event) => {
    let Network = this.state.Network
    Network.forEach(Network => {
       if (Network.value === event.target.value)
       Network.isChecked =  event.target.checked
    })
    this.setState({Network: Network})
  }
  // network
  handleAllChecked = (event) => {
    let Process = this.state.Process
    Process.forEach(Network => Network.isChecked = event.target.checked) 
    this.setState({Process: Process})
  }

  handleCheckChieldElement = (event) => {
    let Process = this.state.Process
    Process.forEach(Network => {
       if (Network.value === event.target.value)
       Network.isChecked =  event.target.checked
    })
    this.setState({Process: Process})
  }

  render() {
    return (
      <div className="App" style={{padding:'10px'}}>
      <div className="content" style={{border:'1px solid #DBDDEC', marginLeft:'220px', marginRight:'210px', borderRadius:'11px', padding:'5px', marginBottom:'10px'}}>
      <div className="button_header" style={{display:'flex', alignItems:'center'}}>
        <button className="button_on" onClick={() => this.operation()} style={{background:'#fff', border:'none', display:'flex', textAlign:'center', outlineWidth:'0'}}><p style={{margin:'3px'}}>Process Capabilities</p> </button>
        <i class="fas fa-chevron-circle-down" style={{fontSize:'25px', color:'#DBDDEC'}}></i>
      </div>
      {this.state.showMe ?
      <div className="select_option" style={{background:'#F9F9F9', marginRight:'380px', width:'100%', marginBottom:'-16px'}}>
      <b><input type="checkbox" onChange={this.handleAllChecked}  value="checkedall" /> Select All </b>
   
<b>
<ul style={{display:'flex', padding:'0px', justifyContent:'space-between', color:'#000'}}>
    {
      this.state.Process.map((Process, index) => {
        return (<CheckBox key={index} handleCheckChieldElement={this.handleCheckChieldElement}  {...Process} />)
      })
    }
    </ul>
</b>
    </div>: null}
        
    </div>
      {/* network section */}
      <div className="content" style={{border:'1px solid #DBDDEC', marginLeft:'220px', marginRight:'210px', borderRadius:'11px', padding:'5px', marginBottom:'10px'}}>
      <div className="button_header" style={{display:'flex', alignItems:'center'}}>
        <button className="button_on"  style={{background:'#fff', border:'none', display:'flex', textAlign:'center', outlineWidth:'0'}}><p style={{margin:'3px'}}>Network Capabilities</p> </button>
        <i class="fas fa-chevron-circle-down" style={{fontSize:'25px', color:'#DBDDEC'}}></i>
      </div>
      {/* {this.state.showMe1 ?
      <div className="select_option" style={{background:'#F9F9F9', marginRight:'380px', width:'100%', marginBottom:'-16px'}}>
      <input type="checkbox" onChange={this.handleAllChecked}  value="checkedall" /> Select All 
   
    <ul style={{display:'flex', padding:'0px', justifyContent:'space-between'}}>
    {
      this.state.Process.map((Process, index) => {
        return (<CheckBox key={index} handleCheckChieldElement={this.handleCheckChieldElement}  {...Process} />)
      })
    }
    </ul>
    </div>: null} */}
        
    </div>
      {/* system */}
      <div className="content" style={{border:'1px solid #DBDDEC', marginLeft:'220px', marginRight:'210px', borderRadius:'11px', padding:'5px', marginBottom:'10px'}}>
      <div className="button_header" style={{display:'flex', alignItems:'center'}}>
        <button className="button_on"  style={{background:'#fff', border:'none', display:'flex', textAlign:'center', outlineWidth:'0'}}><p style={{margin:'3px'}}>System Capabilities</p> </button>
        <i class="fas fa-chevron-circle-down" style={{fontSize:'25px', color:'#DBDDEC'}}></i>
      </div>
      {/* {this.state.showMe2 ?
      <div className="select_option" style={{background:'#F9F9F9', marginRight:'380px', width:'100%', marginBottom:'-16px'}}>
      <input type="checkbox" onChange={this.handleAllChecked}  value="checkedall" /> Select All 
   
    <ul style={{display:'flex', padding:'0px', justifyContent:'space-between'}}>
    {
      this.state.Process.map((Process, index) => {
        return (<CheckBox key={index} handleCheckChieldElement={this.handleCheckChieldElement}  {...Process} />)
      })
    }
    </ul>
    </div>: null} */}
        
    </div>
      {/* misscell */}
      <div className="content" style={{border:'1px solid #DBDDEC', marginLeft:'220px', marginRight:'210px', borderRadius:'11px', padding:'5px', marginBottom:'10px'}}>
      <div className="button_header" style={{display:'flex', alignItems:'center'}}>
        <button className="button_on"  style={{background:'#fff', border:'none', display:'flex', textAlign:'center', outlineWidth:'0'}}><p style={{margin:'3px'}}>Miscellaneous Capabilities</p> </button>
        <i class="fas fa-chevron-circle-down" style={{fontSize:'25px', color:'#DBDDEC'}}></i>
      </div>
      {/* {this.state.showMe3 ?
      <div className="select_option" style={{background:'#F9F9F9', marginRight:'380px', width:'100%', marginBottom:'-16px'}}>
      <input type="checkbox" onChange={this.handleAllChecked}  value="checkedall" /> Select All 
   
    <ul style={{display:'flex', padding:'0px', justifyContent:'space-between'}}>
    {
      this.state.Process.map((Process, index) => {
        return (<CheckBox key={index} handleCheckChieldElement={this.handleCheckChieldElement}  {...Process} />)
      })
    }
    </ul>
    </div>: null} */}
        
    </div>

      {/* Mandateparentprocess */}
      <div className="content" style={{ marginLeft:'220px', marginRight:'210px', padding:'5px', marginBottom:'10px'}}>

    <div className="select_option" >
    {/* <button style={{borderRadius:'11px', border:'none', height:'55px'}}><input type="checkbox" onChange={this.handleAllChecked}  value="checkedall" /> Mandateparentprocess</button> */}
    <button style={{borderRadius:'11px', border:'none', height:'55px'}}><input type="checkbox"  value="checkedall" /> Mandateparentprocess</button>
     

      </div>
      </div>

      </div>
    );
  }
}

export default App
