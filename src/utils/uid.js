function generateuidCounter() {
    let id = 0;
    return () => id++;
}

const getUid = generateuidCounter();

export {
    generateuidCounter,
    getUid,
};