import React from 'react'
import './station.css'

export const Station = ({scheduledAt, isTrainHere, station, 
                        isDestination, isOrigin, 
                        hasDeparted, estimatedAt}) => (
    <div className="stationContainer">
      <div className={(hasDeparted ? "" : "stationHighlight ") + "stationTime"}>
                {scheduledAt} <br/>
                {isTrainHere ? 
                    <div className="stationTrainHere">
                        <i className="material-icons md-18">train</i>
                    </div> : 
                    null}
       </div> 
       <div className={isDestination ? "stationLastCircle" : "stationCircle" + (isOrigin ? " stationFilled" : "")}>&nbsp;</div> 
       <div className="stationInfo">            
            <div className={hasDeparted ? "" : "stationHighlight"}>
               { station }
            </div>
            <div className="stationTimeInfo">
                { (estimatedAt!=="On time" ? 
                    (hasDeparted ? "Dept. " : "Exp. ") :
                    "") 
                   + estimatedAt }   
            </div>
        </div>        
    </div>
)
