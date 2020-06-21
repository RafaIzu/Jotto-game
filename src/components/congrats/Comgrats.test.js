import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Congrats from './Congrats'

Enzyme.configure({adapter: new EnzymeAdapter()})

const setup = (props ={}) =>{
    return shallow(<Congrats {...props}/>)
}
import {findBytestAttr} from '../../test/testUtils'

test('renders withou error', ()=>{
    const wrapper = setup()
    const component = findBytestAttr(wrapper, 'component-congrats')
    expect(component.length).toBe(1)
})

test('renders no text when `sucess` prop is false', ()=>{
const wrapper = setup({sucess: false})
const component = findBytestAttr(wrapper, 'component-congrats')
expect(component.text()).toBe('')
})

test('renders non-empty congrats message when `success` prop is true', ()=>{
    const wrapper = setup({sucess: true})
    const message = findBytestAttr(wrapper, 'congrats-message')
    expect(message.text().lenght).not.toBe(0)

})
