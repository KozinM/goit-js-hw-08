
    import Player from '@vimeo/player';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    setPlayerTime();

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    player.on('timeupdate', onTimeUpdateHandler);

    function onTimeUpdateHandler (data) {
       //console.log(data.seconds);
       localStorage.setItem("videoplayer-current-time", `${data.seconds}`);
       //console.log(localStorage.getItem("videoplayer-current-time"));
    }

    function setPlayerTime()
    {
        if (!localStorage.getItem("videoplayer-current-time"))
        return;
        player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
    }