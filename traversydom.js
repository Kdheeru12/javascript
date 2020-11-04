//document.getElementById('exampleInputEmail1').value = 'dd'

//$('#exampleInputEmail1').val('ddd')

//console.log(document.querySelectorAll('input'))

const input = document.querySelectorAll('input')

input.forEach( (i) => i.value='' )

const btn = document.querySelectorAll('button')

btn.forEach( (i) => i.addEventListener('click', (e) => i.innerHTML = 'clicked' ) )

const search = document.querySelector('#exampleInputEmail1')

search.addEventListener('keyup',searchItems)

function searchItems(e){
    
    var list1 = document.querySelectorAll('li')
    list1.forEach( (i) =>
    {
        if(i.firstChild.textContent.toLowerCase().indexOf(e.target.value) != -1){
            i.style.display = 'block'
        }else{
            i.style.display = 'none'
        }
    }
    ) 
}

const converter = document.getElementById('example')

converter.addEventListener('keyup',convert)

function convert(e){
    var list = document.querySelectorAll('.list-group-item1')
    list[0].firstChild.textContent =  `${Number(e.target.value)*10}  grams` 
    list[1].firstChild.textContent =  `${Number(e.target.value)*100}  kilo` 
    list[2].firstChild.textContent =  `${Number(e.target.value)*1000} mjg ` 
    
}

const get = document.querySelector('#i')

get.addEventListener('click',getData)

function getData(){
    fetch('hello.txt').then(function(i){
        return i.text()
    }).then((data) => {
        document.getElementById('h').innerHTML = data
    }) 
}

const datas = document.getElementById('dhe')

datas.addEventListener('click',dataList)

function dataList(){
    fetch('data.json')
    .then((list) => list.json())
    .then((dataitems) =>{
        let ww = ''
        dataitems.forEach( 
            function(countries){
           
            ww += `<h1>countries</h1>
                    <ul>
                <li>name:${countries.name} </li>
                <li>name:${countries.abbr} </li>
                <li>name:${countries.captial} </li>
            </ul>`
             
        })
        document.getElementById('dw').innerHTML = ww
        
    })
}