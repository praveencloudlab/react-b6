let d1=document.getElementById("indianClock")
let d2=document.getElementById("dubaiClock")
let d3=document.getElementById("usClock")


let d4=document.getElementById("indianClockV1")
let d5=document.getElementById("dubaiClockV1")
let d6=document.getElementById("usClockV1")

function jsClock(props){
    let time=new  Date().toLocaleTimeString("en-US",props)
    let template=`
    <div class='card'>
        <div class='card-header bg-success'>${props.timeZone}</div>
        <div class='card-body'>
        <div class='card-text'>
        <h2>${time}</h2>
         </div>
        </div>
    </div>
    `
    return template
}

function reactClock(props){
    // JSX 

    let time=new  Date().toLocaleTimeString("en-US",{timeZone:props.timeZone})
    return <div class='card'>
        <div class='card-header bg-info'>{props.timeZone}</div>
        <div class='card-body'>
        <div class='card-text'>
        <h2>{time}</h2>
         </div>
        </div>
    </div>
}



setInterval(()=>{
    d1.innerHTML=jsClock({timeZone:'asia/kolkata'})
    d2.innerHTML=jsClock({timeZone:'asia/dubai'})
    d3.innerHTML=jsClock({timeZone:'america/new_York'})

    ReactDOM.render(reactClock({timeZone:'asia/kolkata'}),d4)
    ReactDOM.render(reactClock({timeZone:'asia/dubai'}),d5)
    ReactDOM.render(reactClock({timeZone:'america/New_York'}),d6)


},1000)
