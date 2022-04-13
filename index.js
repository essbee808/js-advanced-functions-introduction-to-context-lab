// Your code here

// const employee = ["Gray", "Worm", "Security", 1];


let createEmployeeRecord = function(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(arr) {
    return arr.map(function(a) {
        return createEmployeeRecord(a)
    }
)}

let createTimeInEvent = function(employeeObject, time) {
    debugger; 
    // add object with keys 
    let [date, hour] = time.split(' ')

    employeeObject.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return employeeObject
}

let createTimeOutEvent = function(employeeObject, dateTime) {
    // return employee record
    let [date, hour] = dateTime.split(' ')

    employeeObject.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return employeeObject
}

let hoursWorkedOnDate = function(employeeObject, time) {
    // return hours worked as integer

}

    // let arr = [
    //     ["moe", "sizlak", "barkeep", 2],
    //     ["bartholomew", "simpson", "scamp", 3]
    //   ]

// // properties
// - firstName
// - familyName
// - title 
// - payPerHour