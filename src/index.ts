// time format
import { formatDate } from './utils/formatDate'
// get variable's type
import { getType } from './utils/getType'
// cookie
import Store from './utils/store'
// validate
import { validate } from './utils/validate'
// random
import { random } from './utils/random'

//camelCase
import { camelCase } from './utils/camelCase'

export default {
  formatDate,
  getType,
  store: new Store(),
  validate,
  random,
  camelCase
}