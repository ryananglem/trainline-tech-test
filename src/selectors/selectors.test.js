import * as selectors from './index'

it("should return origin station name from list of calling points", () => {
    const state = {
        "data": {
            "callingPoints": [
              {
                "station": "Sevenoaks",
                "isOrigin": true,
              },
              {
                "station": "Bat & Ball",
                "isOrigin": false,
              }]
            }
    };

    const result = selectors.getOriginStation(state)

    expect(result).toEqual("Sevenoaks")
})

it("should return destination station name from list of calling points", () => {
    const state = {
        "data": {
            "callingPoints": [
              {
                "station": "Sevenoaks",
                "isDestination": true,
              },
              {
                "station": "Bat & Ball",
                "isDestination": false,
              }]
            }
    };
    const result = selectors.getDestinationStation(state)

    expect(result).toEqual("Sevenoaks")
})

it("should return list of stations from state", () => {
    const state = {
        "data": {
            "callingPoints": [
              {
                "station": "Sevenoaks",
                "isDestination": true,
              },
              {
                "station": "Bat & Ball",
                "isDestination": false,
              }]
            }
    };
    const result = selectors.getStations(state)

    expect(result).toEqual(
        [
            {
              "station": "Sevenoaks",
              "isDestination": true,
            },
            {
              "station": "Bat & Ball",
              "isDestination": false,
            }
        ]
    )
})