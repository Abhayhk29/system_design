const sortingByAge = require("./app");

test("testing the sorting feature", ()=>{
    const sortedData = sortingByAge();

    expect(sortedData[0].name).toBe('radha')
})

test("testing the not to be data", ()=>{
    const sortedData = sortingByAge();

    expect(sortedData).not.toBeUndefined()
})

test("testing the not to be lengt", ()=>{
    const sortedData = sortingByAge();

    expect(sortedData).toHaveLength(4)
})

// jsdom 
// React testing library
// enzyme : earlier
