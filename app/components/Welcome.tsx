import React from "react";
import history from "../history";
export default class Welcome extends React.Component {


    render() {
        return  (
            <div className="container ">
                <div className="row">
                    <div className="col s12 center-align">
                         <h4 className= "">Добро пожаловать для перехода нажмите кнопку</h4>
                        <div className="row">
                          <div className="col s12 center-align">
                             <a className="btn waves-effect waves-light" href="#/main" >Вперед</a>
                            </div>
                        </div>
                            
                    </div>
                </div>
               
            </div>
    
      )
    }}