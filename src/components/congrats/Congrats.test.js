import React from 'react'
import {shallow} from 'enzyme'

import {findBytestAttr, checkProps} from '../../test/testUtils'
import Congrats from './Congrats'




const defaultProps = {success: false}

const setup = (props ={}) =>{
    const setupProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setupProps}/>)
}


test('renders withou error', ()=>{
    const wrapper = setup({success: false})
    const component = findBytestAttr(wrapper, 'component-congrats')
    expect(component.length).toBe(1)
})

test('renders no text when `sucess` prop is false', ()=>{
const wrapper = setup({success: false})
const component = findBytestAttr(wrapper, 'component-congrats')
expect(component.text()).toBe('')
})

test('renders non-empty congrats message when `success` prop is true', ()=>{
    const wrapper = setup({success: true})
    const message = findBytestAttr(wrapper, 'congrats-message')
    expect(message.text().lenght).not.toBe(0)

})

test('does not throw warning with expected props', ()=>{
    const expectedProps = {success: false}
    checkProps(Congrats, expectedProps)
})
