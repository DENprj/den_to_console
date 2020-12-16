import { To } from 'https://raw.githubusercontent.com/aknow2/DEN/main/src/action_interfaces.ts';

export interface Request {
  message: any
  method: keyof Console
}

const from: To<Request> = {
  request: {
    message: {
      type: 'string',
      description: 'console.log',
      optional: true,
    },
    method: {
      type: 'string',
      description: 'set console method "assert" | "clear" | "count" | "countReset" | "debug" | "dir" | "dirxml" | "error" | "group" | "groupCollapsed" | "groupEnd" | "info" | "log" | "table" | "time" | "timeEnd" | "timeLog" | "timeStamp" | "trace" | "warn"',
      validator(v) {
        const valid = Object.keys(console).some(k => k === v)
        if (!valid) {
          return `${v} is not in console methods.`
        }
      }
    },
  },
  async run(param){
    const { message, method } = param
    ;(console[method] as any)(message)
  }
}


export default from

