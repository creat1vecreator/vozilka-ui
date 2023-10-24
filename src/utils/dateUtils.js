import dayjs, {Dayjs} from "dayjs";
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc)

export const DATE_FORMAT_WITH_DOTS_FULL = 'DD.MM.YYYY HH:mm'

export const convertToIsoString = (date) => {
    return dayjs(date).toISOString()
}

export const convertToDayjs = (date) => {
    return date ? dayjs(date) : null
}

export const mainDateFormatter = (date) => {
    return dayjs(date).format(DATE_FORMAT_WITH_DOTS_FULL)
}
