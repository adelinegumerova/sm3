let price = prompt('Введите стоимость товара')
let count = prompt('Введите количество средств')

if(price == count){
    alert("Покупка совершена")
}else {
    if (price < count){
        let change = count - price;
        alert("Покупка совершена. Ваша сдача " + change)
    }else if(price > count){
        let a = price - count;
        alert ("Покупка не совершена. Для покупки не хватает " + a + " рублей")
    }
}