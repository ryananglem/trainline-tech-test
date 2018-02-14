
export const getOriginStation = (state) => {
    return state.data ? state.data.callingPoints.filter( s => s.isOrigin)[0].station : ""
}

export const getDestinationStation = (state) => {
    return state.data ? state.data.callingPoints.filter( s => s.isDestination)[0].station : ""
}

export const getStations = (state) => {
    if (!state.data) return []
    let stations = []
    const callingPoints = state.data.callingPoints
    for(let key in callingPoints) {
        if (callingPoints.hasOwnProperty(key)) {
            stations.push(callingPoints[key])
        } 
    }
    return stations;
}