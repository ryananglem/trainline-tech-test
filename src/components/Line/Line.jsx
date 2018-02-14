import React from 'react'
import { Station } from '../Station'
import './line.css'

export const Line = (props) => {
        const stations = props.stations
                                .map((s, i) => (<Station 
                                                    key={i} 
                                                    hasDeparted={s.hasDeparted}
                                                    isTrainHere={s.isTrainHere}
                                                    scheduledAt={s.scheduledAt}
                                                    estimatedAt={s.estimatedAt}
                                                    onTime={s.onTime}
                                                    isOrigin={s.isOrigin}
                                                    isDestination={s.isDestination}                                                            
                                                    station={s.station} />))
        return (
        <div>
            <div className="lineContainer">
                <div className="lineIcon">
                    <i className="material-icons md-48">train</i>
                </div>
                <div>
                    <span className="lineHighlight">{ props.departureStation }</span><br/>
                    to <span className="lineHighlight">{ props.destination} </span><br/>
                    <span className="lineInfo">Operated by { props.operator }</span>
                </div>
            </div>
            <div>
                {stations}
            </div>
        </div>)
    }

