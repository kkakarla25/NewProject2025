import { Store } from "../Redux/Store";

import { ApiReducer } from "../Redux/ApiReducer";
import { CounterReducer } from "../Redux/CounterReducer";
describe("Store test case",()=>{
    it('First store test case',()=>{
    const state=Store.getState()
    expect(state).toHaveProperty('count')
    expect(state).toHaveProperty('api')
    })
})