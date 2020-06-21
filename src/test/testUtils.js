

export const findBytestAttr = (wrapper, val) =>{
    return wrapper.find(`[data-test="${val}"]`)
}