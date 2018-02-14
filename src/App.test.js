import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import { App } from './App';
import Adapter from 'enzyme-adapter-react-16'

import renderer from 'react-test-renderer'

it("renders correctly", () => {

    Enzyme.configure({ adapter: new Adapter() })
    const wrapper = shallow(<App  />)
                        
    
})

