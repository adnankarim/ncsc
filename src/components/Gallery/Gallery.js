import React, { Component } from 'react';

import './Gallery.css';
var counter =0;
 class Gallery extends Component {

    componentDidUpdate(){
         counter =0; 
    }
   componentWillUnmount(){
    counter =0; 

   }
    
    
    render() {
        return (
          
             <main className="demo-3 loading">
            
             <main>
               
                 <div className="content grid">
                   
                     <div className="grid__item">
                         <div  className={"scroll-img " + this.props.images+counter++}   id="scroll-img-1"></div>
                         <div className="grid__item-titlewrap">
                             <h2 className="grid__item-title"></h2>
                             <p className="grid__item-description"></p>
                         </div>
                     </div>
                     <div className="grid__item">
                         <div  className={"scroll-img " + this.props.images+counter++}   id="scroll-img-1"></div>
                         <div className="grid__item-titlewrap">
                             <h2 className="grid__item-title"></h2>
                             <p className="grid__item-description"></p>
                         </div>
                     </div>
                     <div className="grid__item">
                         <div  className={"scroll-img " + this.props.images+counter++}   id="scroll-img-1"></div>
                         <div className="grid__item-titlewrap">
                             <h2 className="grid__item-title"></h2>
                             <p className="grid__item-description"></p>
                         </div>
                     </div>
                     <div className="grid__item">
                         <div  className={"scroll-img " + this.props.images+counter++}   id="scroll-img-1"></div>
                         <div className="grid__item-titlewrap">
                             <h2 className="grid__item-title"></h2>
                             <p className="grid__item-description"></p>
                         </div>
                     </div>
                     <div className="grid__item">
                         <div  className={"scroll-img " + this.props.images+counter++}   id="scroll-img-1"></div>
                         <div className="grid__item-titlewrap">
                             <h2 className="grid__item-title"></h2>
                             <p className="grid__item-description"></p>
                         </div>
                     </div>
                 </div>
             
             </main>
          
           </main>
             
             )
             
       
    }

 }
export default Gallery;
