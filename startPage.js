document.addEventListener('DOMContentLoaded', function(){
    let tips = [
        'Take center first for max win lines',
        'Choose corners for better setups',
        'Create forks for two win chances',
        'Block opponents fork moves',
        'Control board with early center/corner',
        'Use edge trap if second player',
        'Avoid edge starts as first player',
        'Learn key win patterns like center-corner',
        'Force a draw if losing',
        'Anticipate and limit opponents moves'
      ];
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