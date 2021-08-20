document.getElementById('heading').style.backgroundColor = 'rgba(0,0,0,0.4)'

// Adding element in list
document.getElementById('add').addEventListener('click', function(){
    const list = document.createElement('li');
    list.innerText = 'This list item is added'
    const UL = document.getElementById('unordered');
    UL.appendChild(list);
})

// Minus button eventListener
document.getElementById('laptop-minus').addEventListener('click',function(){
    const laptopCount = document.getElementById('laptop-count')
    let laptopCountValue = laptopCount.value;
    if(laptopCountValue > 0){
        laptopCountValue = laptopCountValue - 1
        laptopCount.value = laptopCountValue
        const laptopPrice = document.querySelector('#laptop-price')
        const laptopPriceValue = laptopPrice.innerText
        laptopPrice.innerText = parseFloat(laptopPriceValue) - 899
        document.getElementById('laptop-plus').disabled = false;
    }
})

// plus btn eventListener
document.getElementById('laptop-plus').addEventListener('click',function(){
    const laptopCount = document.getElementById('laptop-count')
    let laptopCountText = laptopCount.value;
    let laptopCountValue = parseFloat(laptopCountText)
    laptopCountValue = laptopCountValue + 1
    laptopCount.value = laptopCountValue
    const laptopPrice = document.querySelector('#laptop-price')
    const laptopPriceValue = laptopPrice.innerText
    laptopPrice.innerText = parseFloat(laptopPriceValue) + 899
    if(laptopCountValue >= 5){
        document.getElementById('laptop-plus').disabled = true
    }
})
