const a = 1
const b = true

function isBoolean(value: any) {
    return typeof(value) === 'boolean'
}

console.log(isBoolean(a))
console.log(isBoolean(b))