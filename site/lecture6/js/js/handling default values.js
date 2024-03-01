//default values
function order(sidedish) {
    console.log("chicken with "+ sidedish);
}
order("noodles")

//not defined
function order1(sidedish) {
    console.log("chicken with "+ sidedish);
}
order1()


//set default value
function order2(sidedish) {
    if (sidedish==undefined) {
        sidedish="whatever"
    }
    console.log("chicken with "+ sidedish);
}
order2()

//or use this method

function order3(sidedish) {
    sidedish= sidedish||"whatever"
    console.log("chicken with "+ sidedish);
}
order3()
