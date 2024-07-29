const { randomize } = require("./utils.js")

const createRivers = () => {
    const rivers = Math.floor(Math.random() * 3) + 1
    return rivers
}

const createMountains = () => {
    const mountains = Math.floor(Math.random() * 2) + 1
    return mountains                            //corrected spelling of variable
}

const createForests = () => {
    const forests = Math.floor(Math.random() * 2) + 1
    return forests
}

const createPlains = () => {
    const plains = Math.floor(Math.random() * 4) + 1
    return plains
}

const journeyMaker = () => {
    const journey = []

    const areas = {
        rivers: createRivers(),                  //added an "s" to "createRiver" correct spelling of function name; ditto next 3.
        forests: createForests(),
        mountains: createMountains(),
        plains: createPlains()
    }

    for (let riverNumber = 0; riverNumber < areas.rivers; riverNumber++) {
        journey.push("river")
    }

    for (let forestNumber = 0; forestNumber < areas.forests; forestNumber++) {
        journey.push("forest")
    }

    for (let mountainNumber = 0; mountainNumber < areas.mountains; mountainNumber++) {  //added "s" to "areas.mountain"
        journey.push("mountain")
    }

    for (let plainNumber = 0; plainNumber < areas.plains; plainNumber++) {
        journey.push("plain")
    }

    return randomize(journey)
}

module.exports = {
    createRivers, createForests,
    createMountains, createPlains,
    journeyMaker
}