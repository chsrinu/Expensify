// const book = {
//     title:'Alchemist',
//     Author: 'Paulo Coelho ',
//     publisher: {
//     }
// }
// const {name:publisherName = 'Self-Published'}=book.publisher

// console.log(publisherName);

const item=['Coffee (hot)','$2.00','$2.50','$2.75'];

const [itemSelected,,itemCost,menu = 'Hot coffee, cold Coffee']=item;

console.log(`A medium ${itemSelected} costs ${itemCost}. Coffee's offered today are ${menu}`);