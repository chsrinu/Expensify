import moment from 'moment';

export default  [{
    id:0,
    description:'Google',
    note:'AI first company',
    amount: 10000 ,
    createdAt:moment(0).valueOf(),
},
{
    id:1,
    description:'Microsoft',
    note:'OS company',
    amount: 10 ,
    createdAt:moment(0).subtract(4,'days').valueOf(),
},
{
    id:2,
    description:'FaceBook',
    note:'Social Networking website',
    amount: 100 ,
    createdAt:moment(0).add(4,'days').valueOf(),
}
]
