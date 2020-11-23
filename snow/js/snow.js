window.onload = function(){

    setInterval(function(){
        let snow = document.createElement('div')
        snow.classList.add('snow')
        let size = Math.round(Math.random()*10+5)
        snow.style.width = size+'px'
        snow.style.height = size+'px'
        snow.style.left = Math.random()*(window.innerWidth-size)+'px'
        document.body.appendChild(snow)
        let num = Math.round(Math.random()*1000+5000)
        snow.animate({
            top:'100%'
        },{
            duration:num,
            easing:'ease-out'
        }) 
        setTimeout(function(){
            snow.remove()
        },num)
    },50)
}