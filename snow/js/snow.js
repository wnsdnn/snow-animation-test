window.onload = function () { //window load완료시 시작

    setInterval(function(){ // setInterval(실햄 함수, 지속시간)
        let snow = document.createElement('div') // snow에 div dom 객체 저장
        let size = Math.round(Math.random()*5+10) //size에 랜덤값저장
        snow.classList.add('snow') // snow에 snow라는 클래스명 설정
        snow.style.width = size+'px' // 폭
        snow.style.height = size+'px' // 높이
        snow.style.left = Math.random()*window.innerWidth+'px' //snow에 떨어질 위치 선정
        document.body.appendChild(snow) //snow를 body안에 자식요소로 넣기
        let num = Math.round(Math.random()*1000+5000) // snow가 떨어질 시간 설정
        snow.animate([{ //snow의 애니메이션 효과 추가
            top:'100%' 
        }],{
            duration:num, // 떨어질 시간
            easing:'ease-out', // 떨어지는 효과 (ease-out: 빠르게 --> 느리게)
        })
        setTimeout(function(){ //settimeout:지속시간마다 함수 실행
            snow.remove()
        },num);
    },100)
}
