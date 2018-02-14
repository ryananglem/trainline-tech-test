import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as selectors from '../../selectors'
import { Line } from './Line'

export class LineContainer extends Component {

    render() { return ( <Line {...this.props} />
        )
    }    
}
const mapStateToProps = state => {
    const { data } = state
    const operator = data ? data.operator : ""
    const destination = selectors.getDestinationStation(state)
    const origin = selectors.getOriginStation(state)
    const stations = selectors.getStations(state)
    return {
        stations,
        operator,
        destination,
        origin
    }
}
export default connect(mapStateToProps)(Line)