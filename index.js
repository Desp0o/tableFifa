let teams1        =  Array = []
let addteam       =  Array = []
// let length        = teams.length // მასივის სიგრძე
let randomizerBtn = document.querySelector('.randomize')
let container     = document.querySelector('.container')
let teamInput     = document.getElementById('input')
let addBtn        = document.getElementById('btn')
let dashboard     = document.querySelector('.team_list')
let reloadBtn     = document.querySelector('.reload')
let groupTable    = document.querySelector('.group_table')


function submit() {
    if(teamInput.value === ''){
        teamInput.style.outline = 'solid'
        teamInput.style.outlineColor  = 'red'
        
    }else{
        teamInput.style.outline = 'unset'
        addteam.push(teamInput.value)
        let teamList = document.createElement('h3')
        teamList.classList.add('teamh3style')
        teamList.innerHTML = teamInput.value
        dashboard.append(teamList)
        teamInput.value = ''
    }
}

// მასივის შექმნა ინპუტიდან
addBtn.onclick = ()=>{
    submit()
}

function keypress() {
    if(event.key === 'Enter') {
        submit()        
    }
}

// რანდომ რიცხვო
function randomInt(number) {
    return Math.floor(Math.random()*number)
}

randomizerBtn.onclick = ()=>{
    let teams = teams1.concat(addteam)
    let length        = teams.length // მასივის სიგრძე
    let classIndex = 0
    let vs = 0
    
   
    while(length > 0){
        let random = randomInt(length)
        let randomTeam     = document.querySelector('.team_list'+`${classIndex}`)
        let team = document.createElement('h2')
        let vsIndex     = document.querySelectorAll('.hiddenVS'+`${vs}`)
        vsIndex.forEach(element => {
            element.classList.add('visibleVS')
        });
        
            if(randomInt(length) === 0){
                team.innerHTML = teams[0]
                randomTeam.append(team)
                teams.shift()
                
                

            }else{
                team.innerHTML = teams[random]
                randomTeam.append(team)
                teams.splice(random,1)
                
            }


            dashboard.style.display = 'none'
        
        length -= 1;
        classIndex++;
        vs++;
    }

    
}

reloadBtn.onclick = ()=>{
    document.querySelectorAll('.team_style_left').forEach(el =>{
        el.innerHTML = ''
    })

    document.querySelectorAll('.team_style').forEach(el =>{
        el.innerHTML = ''
    })

    document.querySelectorAll('.vsJS').forEach(el =>{
        el.classList.remove('visibleVS')
    })

    dashboard.style.display = 'flex'
}

