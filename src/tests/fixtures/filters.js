import moment from 'moment';

export const filter = {
    text:'',
    sortBy:'date',
    startDate: undefined,
    endDate: undefined
}

export const altFilter = {
    text:'Water bill',
    sortBy:'amount',
    startDate: moment(450000),
    endDate: moment(600000)
}

//export {filter, altFilter}