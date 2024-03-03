document.addEventListener('DOMContentLoaded', function(){
    let tips = ['bhalo kora khalbi','all the best','tumi sudu amar'
       
    ]
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile){
        const onlineButton = document.getElementById('online')
        const twoPlayerButton = document.getElementById('2player')
        const botButton = document.getElementById('bot')
		const liveButton = document.getElementById('live')
        onlineButton.style.width = '95vw'
        twoPlayerButton.style.width = '95vw'
        botButton.style.width = '95vw'
		liveButton.style.width = '95vw'
    }
    const tip = document.getElementById("tip")
    tip.innerHTML = "<p style='font-size : 20px'>Tip</p>" + tips[Math.round((Math.random() / 1) * (tips.length - 1))]
}, false)