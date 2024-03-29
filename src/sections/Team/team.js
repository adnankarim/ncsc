import React, { Component } from "react";
import   './team.css';




export default class TeamPage extends Component  {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render(){
  return (  <>{
      
      
    this.props.darkMode===true? (<div className="team-section">
                  <div className="inner-width">
                            <div className="pers">

                               
                                  <>
                                 {
                                 this.props.president===true ?
                                 
                                 ( 
                                  this.state.width>600?
                                 (<div className="d-pe">
                                  <img src={this.props.imgUrl[0]} alt=""/>
                                  <div className="d-name">{this.props.name[0]}</div>
                                  <div className="p-des">{this.props.description[0]}</div>
                                 
                                  </div>
                                  
                                  ):
                                  (
                                    <div className="d-pe">
                                  <img src={this.props.imgUrl[1]} alt=""/>
                                  <div className="d-name">{this.props.name[1]}</div>
                                  <div className="p-des">{this.props.description[1]}</div>
                                 
                                  </div>
                                  )
                                  ):
                                  (<div className="d-pe">
                                  <img src={this.props.imgUrl[0]} alt=""/>
                                  <div className="d-name">{this.props.name[0]}</div>
                                  <div className="p-des">{this.props.description[0]}</div>
                                 
                                  </div>)
                                  }
                                            
                                                 {


                                                    this.props.president===true ?
                                                      (
                                                      
                                                       this.state.width>600?
                                                    (  <div className="d-peptalk">
                                                      <img src={this.props.imgUrl[1]} alt=""/>
                                                      <div className="d-name">{this.props.name[1]}</div>
                                                      <div className="p-des">{this.props.description[1]}</div>
                                                      
                                                      </div>
                                                      ):(
                                                     <div className="d-peptalk">
                                                      <img src={this.props.imgUrl[0]} alt=""/>
                                                      <div className="d-name">{this.props.name[0]}</div>
                                                      <div className="p-des">{this.props.description[0]}</div>
                                                      
                                                      </div>

                                                      )
                                                      
                                                      ):
                                                      (
                                                          <div className="d-pe">
                                                      <img src={this.props.imgUrl[1]} alt=""/>
                                                      <div className="d-name">{this.props.name[1]}</div>
                                                      <div className="p-des">{this.props.description[1]}</div>
                                                      
                                                      </div>
                                                      )
                                                      }
                                                      </>
                                                      
                                              <div className="d-pe">
                                              <img src={this.props.imgUrl[2]} alt=""/>
                                              <div className="d-name">{this.props.name[2]}</div>
                                              <div className="p-des">{this.props.description[2]}</div>
                                             
                                              </div>

    </div>

  </div>
</div>):(<div className="team-section">
                  <div className="inner-width">
                            <div className="pers">


                            {
                                 this.props.president===true ?
                                 
                                 ( 
                                  this.state.width>600?
                                 (<div className="pe">
                                  <img src={this.props.imgUrl[0]} alt=""/>
                                  <div className="p-name">{this.props.name[0]}</div>
                                  <div className="p-des">{this.props.description[0]}</div>
                                 
                                  </div>
                                  
                                  ):
                                  (
                                    <div className="pe">
                                  <img src={this.props.imgUrl[1]} alt=""/>
                                  <div className="p-name">{this.props.name[1]}</div>
                                  <div className="p-des">{this.props.description[1]}</div>
                                 
                                  </div>
                                  )
                                  ):
                                  (<div className="pe">
                                  <img src={this.props.imgUrl[0]} alt=""/>
                                  <div className="p-name">{this.props.name[0]}</div>
                                  <div className="p-des">{this.props.description[0]}</div>
                                 
                                  </div>)
                                  }

                                  {


                                  this.props.president===true  ?
                                    (
                                    
                                    this.state.width>600?
                                  (  <div className="peptalk">
                                    <img src={this.props.imgUrl[1]} alt=""/>
                                    <div className="p-name">{this.props.name[1]}</div>
                                    <div className="p-des">{this.props.description[1]}</div>
                                    
                                    </div>
                                    ):(
                                  <div className="peptalk">
                                    <img src={this.props.imgUrl[0]} alt=""/>
                                    <div className="p-name">{this.props.name[0]}</div>
                                    <div className="p-des">{this.props.description[0]}</div>
                                    
                                    </div>

                                    )
                                    
                                    ):
                                    (
                                        <div className="pe">
                                    <img src={this.props.imgUrl[1]} alt=""/>
                                    <div className="p-name">{this.props.name[1]}</div>
                                    <div className="p-des">{this.props.description[1]}</div>
                                    
                                    </div>
                                    )
                                    }
                                              <div className="pe">
                                              <img src={this.props.imgUrl[2]} alt=""/>
                                              <div className="p-name">{this.props.name[2]}</div>
                                              <div className="p-des">{this.props.description[2]}</div>
                                             
                                              </div>

    </div>

  </div>
</div>)
}

  </>    
    );

 }
    
}

