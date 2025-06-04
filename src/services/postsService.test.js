import { describe, it, expect } from 'vitest'
import { _makePostDetailsRequest } from './postsService'

const mocked_fetch = () => {
    return 
}


describe('Details Request', () => {
    it('is made correctly', () => {
        const expectedResult = `
query { 
  post(id:"42") {
    title
    author {
      name
    }
    picture {url}
    content {json}
  }
}
`
        const queryToBeTested = _makePostDetailsRequest(42)
        expect(queryToBeTested).toEqual(expectedResult)
    })
})