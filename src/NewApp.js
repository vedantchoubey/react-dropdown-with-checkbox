import { useState } from "react";
import React from "react";
import CheckBox from "./CheckBox";
function NewApp(props){
  const [showMe, setShowMe] = useState(false);
//   const [showMe1, setShowMe1] = useState(false);
//   const [showMe2, setShowMe2] = useState(false);
//   const [showMe3, setShowMe3] = useState(false);

  const [process, getProcess] = useState([
    { id: 1, value: "Chown", isChecked: false },
    { id: 2, value: "Kill", isChecked: false },
    { id: 3, value: "Setgid", isChecked: false },
    { id: 4, value: "Setuid", isChecked: false },
  ]);

  const [network, getNetwork] = useState([
    { id: 1, value: "net_bind_service", isChecked: false },
    { id: 2, value: "net_broadcast", isChecked: false },
    { id: 3, value: "net_admin", isChecked: false },
    { id: 4, value: "net_raw", isChecked: false },
    { id: 4, value: "ipc_lock", isChecked: false },
    { id: 4, value: "ipc_owner", isChecked: false },
  ]);

      const [Network, setNetwork] = useState(network);
      const [Process, setProcess] = useState(process);

  //Process array
  const handleAllChecked = (event) => {
    Network.forEach((Network) => (Network.isChecked = event.target.checked));
    setNetwork({ Network });
    //network
    Process.forEach((Network) => (Network.isChecked = event.target.checked));
    setProcess({ Process });
  };

  const handleCheckChieldElement = (event) => {
    Network.forEach((Network) => {
      if (Network.value === event.target.value)
        Network.isChecked = event.target.checked;
    });
    setNetwork({ Network });
    //network
    Process.forEach((Network) => {
      if (Network.value === event.target.value)
        Network.isChecked = event.target.checked;
    });
    setProcess({ Process });
  };
  return (
    <div className="App" style={{ padding: "10px" }}>
      <div
        className="content"
        style={{
          border: "1px solid #DBDDEC",
          marginLeft: "220px",
          marginRight: "210px",
          borderRadius: "11px",
          padding: "5px",
          marginBottom: "10px",
        }}
      >
        <div
          className="button_header"
          style={{ display: "flex", alignItems: "center" }}
        >
          <button
            className="button_on"
            onClick={() => setShowMe(!showMe)}
            style={{
              background: "#fff",
              border: "none",
              display: "flex",
              textAlign: "center",
              outlineWidth: "0",
            }}
          >
            <p style={{ margin: "3px" }}>Process Capabilities</p>{" "}
          </button>
          <i
            class="fas fa-chevron-circle-down"
            style={{ fontSize: "25px", color: "#DBDDEC" }}
          ></i>
        </div>
        {showMe ? (
          <div
            className="select_option"
            style={{
              background: "#F9F9F9",
              marginRight: "380px",
              width: "100%",
              marginBottom: "-16px",
            }}
          >
            <b>
              <input
                type="checkbox"
                onChange={handleAllChecked}
                value="checkedall"
              />{" "}
              Select All{" "}
            </b>

            <b>
              <ul
                style={{
                  display: "flex",
                  padding: "0px",
                  justifyContent: "space-between",
                  color: "#000",
                }}
              >
                {process.map((Process, index) => {
                  return (
                    <CheckBox
                      key={index}
                      handleCheckChieldElement={handleCheckChieldElement}
                      {...Process}
                    />
                  );
                })}
              </ul>
            </b>
          </div>
        ) : null}
      </div>
      {/* network section */}
      <div
        className="content"
        style={{
          border: "1px solid #DBDDEC",
          marginLeft: "220px",
          marginRight: "210px",
          borderRadius: "11px",
          padding: "5px",
          marginBottom: "10px",
        }}
      >
        <div
          className="button_header"
          style={{ display: "flex", alignItems: "center" }}
        >
          <button
            className="button_on"
            style={{
              background: "#fff",
              border: "none",
              display: "flex",
              textAlign: "center",
              outlineWidth: "0",
            }}
          >
            <p style={{ margin: "3px" }}>Network Capabilities</p>{" "}
          </button>
          <i
            class="fas fa-chevron-circle-down"
            style={{ fontSize: "25px", color: "#DBDDEC" }}
          ></i>
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
      <div
        className="content"
        style={{
          border: "1px solid #DBDDEC",
          marginLeft: "220px",
          marginRight: "210px",
          borderRadius: "11px",
          padding: "5px",
          marginBottom: "10px",
        }}
      >
        <div
          className="button_header"
          style={{ display: "flex", alignItems: "center" }}
        >
          <button
            className="button_on"
            style={{
              background: "#fff",
              border: "none",
              display: "flex",
              textAlign: "center",
              outlineWidth: "0",
            }}
          >
            <p style={{ margin: "3px" }}>System Capabilities</p>{" "}
          </button>
          <i
            class="fas fa-chevron-circle-down"
            style={{ fontSize: "25px", color: "#DBDDEC" }}
          ></i>
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
      <div
        className="content"
        style={{
          border: "1px solid #DBDDEC",
          marginLeft: "220px",
          marginRight: "210px",
          borderRadius: "11px",
          padding: "5px",
          marginBottom: "10px",
        }}
      >
        <div
          className="button_header"
          style={{ display: "flex", alignItems: "center" }}
        >
          <button
            className="button_on"
            style={{
              background: "#fff",
              border: "none",
              display: "flex",
              textAlign: "center",
              outlineWidth: "0",
            }}
          >
            <p style={{ margin: "3px" }}>Miscellaneous Capabilities</p>{" "}
          </button>
          <i
            class="fas fa-chevron-circle-down"
            style={{ fontSize: "25px", color: "#DBDDEC" }}
          ></i>
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
      <div
        className="content"
        style={{
          marginLeft: "220px",
          marginRight: "210px",
          padding: "5px",
          marginBottom: "10px",
        }}
      >
        <div className="select_option">
          {/* <button style={{borderRadius:'11px', border:'none', height:'55px'}}><input type="checkbox" onChange={this.handleAllChecked}  value="checkedall" /> Mandateparentprocess</button> */}
          <button
            style={{ borderRadius: "11px", border: "none", height: "55px" }}
          >
            <input type="checkbox" value="checkedall" /> Mandateparentprocess
          </button>
        </div>
      </div>
    </div>
  );
}
export default NewApp;