import React from 'react'

import { Station } from './Station'
import renderer from 'react-test-renderer'
import Enzyme, {shallow, mount, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

describe("station", () =>{
    Enzyme.configure({ adapter: new Adapter() })
   
    const station = {
        "hasDeparted": true,
        "isTrainHere": true,
        "station": "Sevenoaks",
        "scheduledAt": "10:00",
        "estimatedAt": "On time",
        "isOrigin": true,
        "isDestination": false
      }
      const component = shallow(<Station
          hasDeparted={station.hasDeparted}
          isTrainHere={station.isTrainHere}
          scheduledAt={station.scheduledAt}
          estimatedAt={station.estimatedAt}
          onTime={station.onTime}
          isOrigin={station.isOrigin}
          isDestination={station.isDestination}                                                            
          station={station.station} 
                  />)
      
    it("renders correctly", () => {
        expect(component).toMatchSnapshot()
    })

    it("displays the train", () =>{
        expect(component.exists(<i className="material-icons md-18">train</i>)).toBe(true)
    })
    
    it("displays has departed time", () => {
        expect(component.exists("Dept. 10:00")).toBe(true)
    })
})