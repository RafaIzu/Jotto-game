import CheckPropTypes from 'check-prop-types'
import { checkPropTypes } from 'prop-types'

export const findBytestAttr = (wrapper, val) =>{
    return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, conformingProps) =>{
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    )
    expect(propError).toBeUndefined()
}