var audio;

//Hide Pause Initially
$('#pause').hide();

// Imitialize Audio
initAudio($('#playlist li:first-child'));

function initAudio(element) {
    var song = element.attr('song');
    var title = element.text();
    var cover = element.attr('cover')
    var artist = element.attr('artist');

    //Create Audio Object
    audio = new Audio('media/' + song);

    if (!audio.currentTime) {
        $('#duration').html('0:00');
    }

    $('#audio-player .title').text(title);
    $('#audio-player .artist').text(artist);

    //Insert cover
    $('img.cover').attr('src', 'images/covers/' + cover);

    $('#playlist li').removeClass('active');
    element.addClass('active');
}

//Play Button
$('#play').click(function() {
    audio.play();
    $('#play').hide();
    $('#pause').show();
    $('duration').fadeIn(400);
    showDuration();
});

//Pause Button
$('#pause').click(function() {
    audio.pause();
    $('#pause').hide();
    $('#play').show();
    $('duration').fadeIn(400);
    showDuration();
});

// Stop Button 
// There is no audio.stop() so we will modify ausio.pause()
$('#stop').click(function() {
    audio.pause();
    audio.currentTime = 0;
    $('#pause').hide();
    $('#play').show();
    $('duration').fadeIn(400);
    showDuration();
});

//Next Button
$('#next').click(function() {
    audio.pause();
    var next = $('#playlist li.active').next();
    if (next.length == 0) {
        next = $('#playlist li:first-child');
    }
    initAudio(next);
    audio.play();
    $('#play').hide();
    $('#pause').show();
    showDuration();
});

//Next Button
$('#prev').click(function() {
    audio.pause();
    var prev = $('#playlist li.active').prev();
    if (prev.length == 0) {
        prev = $('#playlist li:last-child');
    }
    initAudio(prev);
    audio.play();
    $('#play').hide();
    $('#pause').show();
    showDuration();
});

//Volume Control
$('#volume').change(function() {
    audio.volume = parseInt((this.value / 10));
})

//Time duration
function showDuration() {
    $(audio).bind('timeupdate', function() {
        //Get Hours amd minutes

        var s = parseInt(audio.currentTime % 60);
        var m = parseInt((audio.currentTime / 60) % 60);
        //Add 0 if m/s is less than 10
        if (s < 10) {
            s = '0' + s;
        }
        if (m < 10) {
            m = '0' + m;
        }
        $('#duration').html(m + '-' + s);

        var value = 0;
        if (audio.currentTime > 0) {
            value = Math.floor((100 / audio.duration) * audio.currentTime);
            ``
        }
        $('#progress').css('width', value + '%')
    })
}