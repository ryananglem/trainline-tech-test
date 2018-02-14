import React from 'react'

import {Line} from './Line'
import renderer from 'react-test-renderer'
import Enzyme, {shallow, mount, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

it("renders correctly", () => {
    
    Enzyme.configure({ adapter: new Adapter() })
    const stations = []
    const component = shallow(<Line   departureStation="Farringdon"
                                    origin="origin"
                                    destination="destination"    
                                    operator="operator"
                                    stations={stations} />)
                    
    expect(component).toMatchSnapshot()
})

