import { subDays } from "date-fns"

export default defineEventHandler((event) => {
    const yesterday = subDays(new Date(), 1);

    return {
        someDate: Date.now(),
    }
})
