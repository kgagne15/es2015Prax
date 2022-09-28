function choice(items) {
    let idx = Math.floor(Math.random() * items.length + 1) 
    return items[idx]
}

function remove(items, item) {
    if(items.includes(item)) {
        let idx = items.indexOf(item)
        return items.splice(idx, 1)
    } else {
        return undefined
    }
}

export {choice, remove}