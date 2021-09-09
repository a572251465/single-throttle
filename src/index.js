const throttle = (options = {}, ...args) => {
  let func = null
  let wait = 300
  let isFast = false
  if (typeof options === 'function') {
    func = options
  } else {
    if (options && typeof options !== 'object') {
      throw new Error(`params <options> mast be a object or function`)
    }
    func = options.func
    wait = options.wait || 300
    isFast = options.isFast || false
    if (typeof options.func !== 'object') {
      throw new Error(`params <options.func> mast be a function`)
    }
  }
  let isExec = false
  let timer = 0

  return (...params) => {
    if (isExec || timer) return
    if (isFast) {
      isExec = true
      func(...args)
    }
    timer = setTimeout(() => {
      if (!isFast) {
        func(...params, ...args)
      }
      isExec = false
      clearTimeout(timer)
      timer = 0
    }, wait)
  }
}
module.exports = throttle
