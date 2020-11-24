window.onload = function () {

    setInterval(function(){
        let snow = document.createElement('div')
        let size = Math.round(Math.random()*5+10)
        snow.classList.add('snow')
        snow.style.width = 3+'px'
        snow.style.height = size+'px'
        snow.style.left = Math.random()*window.innerWidth+'px'
        document.body.appendChild(snow)
        let num = Math.round(Math.random()*500+2000)
        snow.animate([{
            top:'100%'
        }],{
            duration:num,
            easing:'ease-out',
        })
        setTimeout(function(){
            snow.remove()
        },num)
    },10)
}