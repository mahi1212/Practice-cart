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
    

// laptop minus
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
        const total = document.getElementById('total')
        const newSubTotal = parseFloat(subTotalText) - 899
        subTotal.innerText = newSubTotal;
        const newTax = Math.round(parseFloat(newSubTotal) / 20) 
        tax.innerText = newTax
        total.innerText = parseFloat(newTax) + parseFloat(newSubTotal)
    }
})
// laptop plus
document.getElementById('laptop-plus').addEventListener('click', function(){
    const laptopCount =document.getElementById('laptop-count')
    const laptopCountValue = laptopCount.value
    const laptopPrice = document.getElementById('laptop-price')
    const laptopPriceText = laptopPrice.innerText
    const subTotal = document.getElementById('sub-total')
    const subTotalText = subTotal.innerText
    const total = document.getElementById('total')

    if(laptopCountValue < 5){ 
        laptopCount.value = parseInt(laptopCountValue) + 1
        laptopPrice.innerText = parseFloat(laptopPriceText) + 899
        subTotal.innerText = parseFloat(subTotalText) + 899
        
        const newSubTotal = parseFloat(subTotalText) + 700
        subTotal.innerText = newSubTotal;
        const newTax = Math.round(parseFloat(newSubTotal) / 10) 
        tax.innerText = newTax
        total.innerText = parseFloat(newTax) + parseFloat(newSubTotal)
    }
})

// iphone minus
document.getElementById('iphone-minus').addEventListener('click', function(){
    const mobileCount = document.getElementById('iphone-count')
    const mobileCountValue = mobileCount.value
    const mobilePrice = document.getElementById('iphone-price')
    const mobilePriceText = mobilePrice.innerText
    const subTotal = document.getElementById('sub-total')
    const subTotalText = subTotal.innerText
    if(mobileCountValue > 0){ 
        mobileCount.value = parseInt(mobileCountValue) - 1
        mobilePrice.innerText = parseFloat(mobilePriceText) - 700
        subTotal.innerText = parseFloat(subTotalText) - 700
        const total = document.getElementById('total')
        const newSubTotal = parseFloat(subTotalText) - 700
        subTotal.innerText = newSubTotal;
        const newTax = Math.round(parseFloat(newSubTotal) / 20) 
        tax.innerText = newTax
        total.innerText = parseFloat(newTax) + parseFloat(newSubTotal)
    }
})
// iphone plus
document.getElementById('iphone-plus').addEventListener('click', function(){
    const mobileCount = document.getElementById('iphone-count')
    const mobileCountValue = mobileCount.value
    const mobilePrice = document.getElementById('iphone-price')
    const mobilePriceText = mobilePrice.innerText
    const subTotal = document.getElementById('sub-total')
    const subTotalText = subTotal.innerText
    const total = document.getElementById('total')
    if(mobileCountValue < 5){ 
        mobileCount.value = parseInt(mobileCountValue) + 1
        mobilePrice.innerText = parseFloat(mobilePriceText) + 700
        
        const newSubTotal = parseFloat(subTotalText) + 700
        subTotal.innerText = newSubTotal;
        const newTax = Math.round(parseFloat(newSubTotal) / 10) 
        tax.innerText = newTax
        total.innerText = parseFloat(newTax) + parseFloat(newSubTotal)
    }
})
