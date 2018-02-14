
import * as api from '.'

jest.useFakeTimers();

it("should return data with a pause to simulate network delay", () => {
    
    api.getLineData()

    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function),1000)
    
})