document.getElementById('heading').style.backgroundColor = 'rgba(0,0,0,0.4)'

// Adding element in list
document.getElementById('add').addEventListener('click', function(){
    const list = document.createElement('li');
    list.innerText = 'This list item is added'
    const UL = document.getElementById('unordered');
    UL.appendChild(list);
})

