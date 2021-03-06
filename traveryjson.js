
const search = document.querySelector('input')
const match = document.querySelector('.match')

search.addEventListener('input',() =>searchStates(search.value))

const jso = () =>{
     fetch('data.json')
    .then((i) => i.json())
    .then((j) => console.log(j))
} 

 
const searchStates = async searchText =>{
    const i = await fetch('data.json')
    const states = await i.json()
    
    let matches = states.filter( (j) =>{
        const regex = new RegExp(`^${searchText}`,'gi')
        return j.name.match(regex) || j.abbr.match(regex)
    })
    if( searchText.length === 0){
        matches = []
    }
    let output = ''
    const matchhtml = matches.forEach((match) =>{
    output += `
                ${match.name}
                <br>
            `
    })
    match.innerHTML = output
}

async function getCountryName(code) {
    const i = await fetch('https://jsonmock.hackerrank.com/api/countries?page=1')
    const states = await i.json()
    let matches = states.data.filter( (j) =>{
        const regex = new RegExp(`^${code}`,'gi')
        console.log(j.alpha2Code);
        if(j.alpha2Code.match(regex)){
            console.log(j.name);  
        }
    })
    console.log(matches)
}
getCountryName('AF')