process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!
const mapped  = [1,2,3,4,5];
const items = [
              {id:1,name:'coca-cola',price:120},
              {id:2,name:'pepsi',price:122},    
              {id:3,name:'Fanta',price:124},
              ];
const halfPrice = items.map((item)=>{
    if (item.id == 2) {
        return {
            ...item,
            price: item.price*15,
        };
    }
    return item;
});
console.log(mapped.map((coco)=>coco*5));
console.log(halfPrice);
console.log(items);
