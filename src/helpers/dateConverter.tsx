import moment from "moment"

export const dateConverter = (date: any): string => {
    return moment(date).format("DD/MM/YYYY")
}