import { request } from '@/utils'

export default {
  fetch: () => request.get('/summary') as Promise<Record<string, any>>,
}
