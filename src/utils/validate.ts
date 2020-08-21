import { getType } from './getType'

interface R {
  required?: boolean
  len?: number
  min?: number
  max?: number
  enum?: Array<string>
  type?: string
  pattern?: string
  validator?: Function
  message: string
}
interface Rule {
  [key: string]: Array<R>
}
interface Form {
  [key: string]: any
}
interface Result {
  status: boolean
  message: string
  key?: string
}
interface ValidateRes {
  status: boolean,
  infos: Array<Result>
}
const supRules = ['required', 'len', 'min', 'max', 'enum', 'type', 'pattern', 'validator']
export function validate(rules: Rule, form: Form ): ValidateRes {
  // 遍历校验规则
  const result: ValidateRes = { status: true, infos: [] }
  Object.keys(rules).forEach(k => {
    // 校验规则 类型为 array
    const rule = rules[k]
    // 等待被校验的值
    const val = form[k]
    for (let i = 0; i < rule.length; i++) {
      // 逐条进行校验
      const res = validRule(rule[i], val)
      if (!res.status) {
        res.key = k
        result.infos.push(res)
        break
      }
    }
  })
  result.status = result.infos.length < 1
  return result
}

function validRule(rule: R, val: any): Result {
  const res = { status: true, message: '' }
  // const R = { required: true, len: 10, message: '必填字段' }
  // val = '要被校验的值'
  const rk = Object.keys(rule)
  for (let i = 0; i < rk.length; i++) {
    // 确保是在支持的校验规则之内
    if (supRules.includes(rk[i])) {

    }
  }
  return res
}