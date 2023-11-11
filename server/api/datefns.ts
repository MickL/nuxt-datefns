export default defineEventHandler((event) => {
    const yesterday = new Date();

    return {
        someDate: Date.now(),
        otherDate: yesterday.getTime(),
    }
})
