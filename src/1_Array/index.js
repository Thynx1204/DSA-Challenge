/*
 * Create an array to store n elements of type Int8, Int16, Int32 or Float64.
 * Do not use the regular JS array! Look into binary arrays.
 */
export const createArray = (type, size) => {
    let array;
    if (type === 'Int8') {
        array = new Uint8Array(size);
    } else if (type === 'Int16') {
        array = new Uint16Array(size);
    } else if (type === 'Int32') {
        array = new Uint32Array(size);
    } else if (type === 'Float64') {
        array = new Float64Array(size);
    } else {
        throw new Error('Type non supporté');
    }
    return array;
}

