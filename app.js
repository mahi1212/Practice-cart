document.getElementById('heading').style.backgroundColor = 'rgba(0,0,0,0.4)'

// Adding element in list
document.getElementById('add').addEventListener('click', function(){
    const list = document.createElement('li');
    list.innerText = 'This list item is added'
    const UL = document.getElementById('unordered');
    UL.appendChild(list);
})

// function updateInputNumber(product, isIncreasing){
//     const productInput = document.getElementById(product + '-plus')
//     const productInputText = productInput.innerText
    
//     const productCount = document.getElementById(product + '-count')
//     const productInputText = productInput.innerText
    
// }
    
    const laptopCount = document.getElementById('laptop-count')
    const laptopCountValue = laptopCount.value
    
    const laptopPrice = document.getElementById('laptop-price')
    const laptopPriceText = laptopPrice.innerText

    const subTotal = document.getElementById('sub-total')
    const subTotalText = subTotal.innerText

document.getElementById('laptop-minus').addEventListener('click', function(){
    const laptopCount = document.getElementById('laptop-count')
    const laptopCountValue = laptopCount.value
    const laptopPrice = document.getElementById('laptop-price')
    const laptopPriceText = laptopPrice.innerText
    const subTotal = document.getElementById('sub-total')
    const subTotalText = subTotal.innerText
    if(laptopCountValue > 0){ 
        laptopCount.value = parseInt(laptopCountValue) - 1
        laptopPrice.innerText = parseFloat(laptopPriceText) - 899
        subTotal.innerText = parseFloat(subTotalText) - 899
    }
})

document.getElementById('laptop-plus').addEventListener('click', function(){
    const laptopCount =document.getElementById('laptop-count')
    const laptopCountValue = laptopCount.value
    const laptopPrice = document.getElementById('laptop-price')
    const laptopPriceText = laptopPrice.innerText
    const subTotal = document.getElementById('sub-total')
    const subTotalText = subTotal.innerText
    if(laptopCountValue < 5){ 
        laptopCount.value = parseInt(laptopCountValue) + 1
        laptopPrice.innerText = parseFloat(laptopPriceText) + 899
        subTotal.innerText = parseFloat(subTotalText) + 899
    }
})


// document.getElementById('phone-minus').addEventListener('click', function(){
//     updateInputNumber('phone', false)
// })

// document.getElementById('laptop-plus').addEventListener('click', function(){
//     updateInputNumber('phone', true)
// })