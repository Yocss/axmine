import { getType } from './getType'
function setStore (state: object, data: object) {
  let val = data
  if (data['key'] !== undefined && data['value'] !== undefined) {
    val = { [data['key']]: data['value'] }
  }
  Object.keys(val).forEach(k => {
    if (getType(val[k]) === 'object') {
      Object.assign(state[k], val[k])
    } else {
      state[k] === val[k]
    }
  })
}

export default {
  mutations: {
    SET_STORE: (state: object, data: any) => {
      const type = getType(data)
      if (!['array', 'object'].includes(type)) {
        throw new Error('data 类型不正确')
      }
      switch (type) {
        case 'array':
          data.forEach(val => {
            setStore(state, val)
          })
          break
        case 'object':
          setStore(state, data)
          break
      }
    }
  },
  actions: {
    SetStore ({ commit }, data) {
      commit('SET_STORE', data)
    }
  }
}