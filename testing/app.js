// dunder

const users = [
    {
        name:"Abhay", age :"32"
    },
    {
        name:"Nirbhay", age :"29"
    },
    {
        name:"radha", age :"26"
    },
    {
        name:"madhav", age :"32"
    },

]


function sortingByAge(){
    const data = users.sort((a,b) => a.age - b.age);
    return data;
}

module.exports = sortingByAge;

console.log(sortingByAge())

// Automation Testing
    // - e2e 
    // Puppetear , cypresss , Selenium Testing 

    // Headless : its  not visible to us
    
