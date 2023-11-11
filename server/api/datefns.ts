import { subDays } from "date-fns"

export default defineEventHandler((event) => {
    const now = new Date();
    const yesterday = subDays(new Date(), 1);

    return {
        someDate: now.getTime(),
        otherDate: yesterday.getTime(),
    }
})
