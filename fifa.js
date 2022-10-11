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

// randomizerBtn.onclick = ()=>{
//     let teams = teams1.concat(addteam)
//     let length        = teams.length // მასივის სიგრძე
//     let classIndex = 0
//     let vs = 0
    
   
//     while(length > 0){
//         let random = randomInt(length)
//         let randomTeam     = document.querySelector('.team_list'+`${classIndex}`)
//         let team = document.createElement('h2')
//         while(length / 2 > vs){
//             let vsIndex     = document.querySelectorAll('.hiddenVS'+`${vs}`)
//             vsIndex.forEach(element => {
//                 element.classList.add('visibleVS')
//             });

//             vs++;
//         }
        
//             if(randomInt(length) === 0){
//                 team.innerHTML = teams[0]
//                 randomTeam.append(team)
//                 teams.shift()
                
                

//             }else{
//                 team.innerHTML = teams[random]
//                 randomTeam.append(team)
//                 teams.splice(random,1)
                
//             }


//             dashboard.style.display = 'none'
        
//         length -= 1;
//         classIndex++;
        
//     }

    
// }

reloadBtn.onclick = ()=>{
    
    dashboard.style.display = 'flex'
    teamInput.style.display = 'flex'
    addBtn.style.display = 'flex'
    randomizerBtn.style.display = 'flex'
    reloadBtn.style.display = 'none'
    document.querySelector('.quote').style.display = 'none'

    groupTable.innerHTML = ''
    dashboard.innerHTML = ''
}

function makeGroup(indexA, indexB){
    
        let teamName1 = document.createElement('h4')
        let teamName2 = document.createElement('h4')
        let versus = document.createElement('h3')
        let makeCouple = document.createElement('h3')

        teamName1.innerHTML = indexA 
        teamName2.innerHTML = indexB
        versus.innerHTML    = 'VS'

        teamName1.classList.add('team_style_left')
        teamName2.classList.add('team_style')
        versus.classList.add('vs')
        makeCouple.classList.add('makeCouple')

        makeCouple.append(teamName1)
        makeCouple.append(versus)
        makeCouple.append(teamName2)
        groupTable.append(makeCouple)
        
        
    
}

function groupName(number) {
    let round = document.createElement('h1')
        round.innerHTML = 'Round '+number
        round.classList.add('round')
        groupTable.append(round)

}

function randomizerFunc() {

    
    let jgupi  = document.createElement('div')
    let length = addteam.length 
    let newArr = Array = []
    
    dashboard.style.display = 'none'
    
    while(length > 0){
        let random = randomInt(length)           
        let gundi = document.createElement('p')  

        // რანდომ გუნდები და დამატება მასივში
        if(random === 0){
            gundi.innerHTML = addteam[random]
            jgupi.append(gundi)  
            newArr.push(gundi.innerHTML)
            addteam.shift()
        }else{
            gundi.innerHTML = addteam[random]  
            jgupi.append(gundi)  
            newArr.push(gundi.innerHTML)
            addteam.splice(random,1)
        }



        length -= 1;
        

        
    }

    

    if(newArr.length === 3){
        groupName(1)
        makeGroup(newArr[0],newArr[1])
        makeGroup(newArr[1],newArr[2])
        makeGroup(newArr[2],newArr[0])
    }else if(newArr.length  === 4){
        groupName(1)
        makeGroup(newArr[0],newArr[1])
        makeGroup(newArr[2],newArr[3])

        groupName(2)
        makeGroup(newArr[1],newArr[2])
        makeGroup(newArr[3],newArr[0])
        
        groupName(3)
        makeGroup(newArr[2],newArr[0])
        makeGroup(newArr[1],newArr[3])

    }else if(newArr.length  === 5){
        groupName(1)
        makeGroup(newArr[0],newArr[1])
        makeGroup(newArr[2],newArr[3])
        makeGroup(newArr[4],newArr[0])
        
        groupName(2)
        makeGroup(newArr[0],newArr[2])
        makeGroup(newArr[1],newArr[3])
        makeGroup(newArr[4],newArr[2])
        
        groupName(3)
        makeGroup(newArr[3],newArr[0])
        makeGroup(newArr[1],newArr[2])
        makeGroup(newArr[4],newArr[3])
        makeGroup(newArr[1],newArr[4])
    }else if(newArr.length  === 6){
        groupName(1)
        makeGroup(newArr[0],newArr[1])
        makeGroup(newArr[2],newArr[3])
        makeGroup(newArr[4],newArr[5])

        groupName(2)
        makeGroup(newArr[0],newArr[2])
        makeGroup(newArr[3],newArr[4])
        makeGroup(newArr[1],newArr[5])
        
        groupName(3)
        makeGroup(newArr[0],newArr[3])
        makeGroup(newArr[1],newArr[4])
        makeGroup(newArr[5],newArr[2])
        
        groupName(4)
        makeGroup(newArr[0],newArr[4])
        makeGroup(newArr[1],newArr[2])
        makeGroup(newArr[3],newArr[5])

        groupName(5)
        makeGroup(newArr[0],newArr[5])
        makeGroup(newArr[3],newArr[1])
        makeGroup(newArr[2],newArr[4])
    }else if(newArr.length  === 7){
        groupName(1)
        makeGroup(newArr[0],newArr[1])
        makeGroup(newArr[2],newArr[3])
        makeGroup(newArr[4],newArr[5])
        makeGroup(newArr[6],newArr[0])

        groupName(2)
        makeGroup(newArr[0],newArr[2])
        makeGroup(newArr[3],newArr[4])
        makeGroup(newArr[5],newArr[6])
        makeGroup(newArr[1],newArr[2])
        
        groupName(3)
        makeGroup(newArr[0],newArr[3])
        makeGroup(newArr[1],newArr[4])
        makeGroup(newArr[2],newArr[5])
        makeGroup(newArr[3],newArr[6])

        groupName(4)
        makeGroup(newArr[0],newArr[4])
        makeGroup(newArr[1],newArr[5])
        makeGroup(newArr[2],newArr[6])
        makeGroup(newArr[0],newArr[5])

        groupName(5)
        makeGroup(newArr[1],newArr[3])
        makeGroup(newArr[1],newArr[6])
        makeGroup(newArr[3],newArr[5])
        makeGroup(newArr[4],newArr[6])
    }else if(newArr.length  === 8){
        groupName(1)
        makeGroup(newArr[0],newArr[1])
        makeGroup(newArr[2],newArr[3])
        makeGroup(newArr[4],newArr[5])
        makeGroup(newArr[6],newArr[7])

        groupName(2)
        makeGroup(newArr[0],newArr[2])
        makeGroup(newArr[1],newArr[3])
        makeGroup(newArr[4],newArr[6])
        makeGroup(newArr[5],newArr[7])

        groupName(3)
        makeGroup(newArr[0],newArr[3])
        makeGroup(newArr[1],newArr[2])
        makeGroup(newArr[4],newArr[7])
        makeGroup(newArr[5],newArr[6])

        groupName(4)
        makeGroup(newArr[0],newArr[4])
        makeGroup(newArr[1],newArr[5])
        makeGroup(newArr[2],newArr[6])
        makeGroup(newArr[3],newArr[7])

        groupName(5)
        makeGroup(newArr[0],newArr[5])
        makeGroup(newArr[1],newArr[4])
        makeGroup(newArr[3],newArr[6])
        makeGroup(newArr[2],newArr[7])

        groupName(6)
        makeGroup(newArr[0],newArr[6])
        makeGroup(newArr[1],newArr[7])
        makeGroup(newArr[2],newArr[4])
        makeGroup(newArr[3],newArr[5])


        groupName(7)
        makeGroup(newArr[0],newArr[7])
        makeGroup(newArr[1],newArr[6])
        makeGroup(newArr[2],newArr[5])
        makeGroup(newArr[3],newArr[4])
    }else{
        console.log('hey');
    }
    
  

   
}




randomizerBtn.onclick = ()=>{
    if(dashboard.innerHTML === ''){
        teamInput.style.outline = 'solid'
        teamInput.style.outlineColor  = 'red'
        
    }else{
        randomizerFunc()
        teamInput.style.display = 'none'
        addBtn.style.display = 'none'
        randomizerBtn.style.display = 'none'
        reloadBtn.style.display = 'flex'
        document.querySelector('.quote').style.display = 'flex'
    }
}


