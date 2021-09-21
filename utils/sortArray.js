const ObjectId = require('bson-objectid')

const sortByPriority = (arry, newItem) => {
    const sortedArray = new Array()
    
    arry.forEach((item, i) => {
        newItem.priority = parseInt(newItem.priority)
        sortedArray.push(newItem)
        if (item.priority >= newItem.priority) {
            item.priority += 1
            sortedArray.push(item)
        }
    })

    return sortedArray
}

const editEpic = (arry, newItem) => {
    const sortedEpics = new Array()
    arry.forEach(epic => {
        sortedEpics[epic.priority - 1] = epic
    })

    newItem.priority = parseInt(newItem.priority)
    let oldItem
    const newEpics = sortedEpics.reduce((accum, iter) => {
        if (iter._id.toString() === newItem._id) {
            console.log("match");
            oldItem = iter
            accum.push(newItem)
        } else {
            accum.push(iter)
        }
        return accum
    }, [])


    const oldPriority = oldItem.priority
    const newPriority = newItem.priority

    if (oldPriority < newPriority) {
        for (i = newPriority - 1; i > oldPriority - 1; i--) {
            newEpics[i].priority -= 1 
        }
    }
    if (oldPriority > newPriority) {
        for (i = newPriority - 1; i < oldPriority - 1; i++) {
            newEpics[i].priority += 1
        }
    }

    return newEpics
}

const deleteEpic = (arry, deleteItem) => {
    const filteredArray = arry.filter(item => item._id.toString() !== deleteItem._id)
    for (i = deleteItem.priority - 1; i < filteredArray.length; i++) {
        filteredArray[i].priority -= 1
    }
    return filteredArray
}


module.exports = { sortByPriority, editEpic, deleteEpic }
