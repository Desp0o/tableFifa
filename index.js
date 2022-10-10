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

function makeGroup(indexA, indexB){
    
        let teamName = document.createElement('h2')
        teamName.innerHTML = indexA + ' vs ' + indexB
        teamName.classList.add('team_style')
        groupTable.append(teamName)
        console.log(teamName.innerHTML);
    
}

function groupName(number) {
    let round = document.createElement('h1')
        round.innerHTML = 'Round '+number
        round.classList.add('round')
        groupTable.append(round)

}

randomizerBtn.onclick = ()=>{
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
        console.log(gundi.innerHTML);

        
    }

    

    
    if(newArr.length === 3){
        groupName(1)

        makeGroup(newArr[0],newArr[1]) // პირველი
        makeGroup(newArr[2],newArr[1]) // პირველი 
        
        groupName(2)

        makeGroup(newArr[1],newArr[0]) // მეორე
        makeGroup(newArr[1],newArr[2]) // მეორე
        makeGroup(newArr[1],newArr[1]) // მეორე
        
        
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

        groupName(1)
        makeGroup(newArr[0],newArr[2])
        makeGroup(newArr[1],newArr[3])
        makeGroup(newArr[4],newArr[6])
        makeGroup(newArr[5],newArr[7])

        groupName(1)
        makeGroup(newArr[0],newArr[3])
        makeGroup(newArr[1],newArr[2])
        makeGroup(newArr[4],newArr[7])
        makeGroup(newArr[5],newArr[6])

        groupName(1)
        makeGroup(newArr[0],newArr[4])
        makeGroup(newArr[1],newArr[5])
        makeGroup(newArr[2],newArr[6])
        makeGroup(newArr[3],newArr[7])

        groupName(1)
        makeGroup(newArr[0],newArr[5])
        makeGroup(newArr[1],newArr[4])
        makeGroup(newArr[3],newArr[6])
        makeGroup(newArr[2],newArr[7])

        groupName(1)
        makeGroup(newArr[0],newArr[6])
        makeGroup(newArr[1],newArr[7])
        makeGroup(newArr[2],newArr[4])
        makeGroup(newArr[3],newArr[5])


        groupName(1)
        makeGroup(newArr[0],newArr[7])
        makeGroup(newArr[1],newArr[6])
        makeGroup(newArr[2],newArr[5])
        makeGroup(newArr[3],newArr[4])
        
        

        
        
        
       

        
        
        

       
        

        



    }else{
        console.log('hey');
    }
    
}

