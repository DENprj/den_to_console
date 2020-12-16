import mod from './mod.ts'
import { assertEquals, fail } from "https://deno.land/std@0.77.0/testing/asserts.ts"

Deno.test('run module', async () => {
  await mod.run({
    method: 'error',
    message: 'hello'
  })
})

Deno.test('test for validator', async () => {
  if (mod.request.method.validator) {
    const result = mod.request.method.validator('zzz' as any)
    console.log(result)
    assertEquals(typeof result, 'string')
  } else {
    fail()
  }
})
