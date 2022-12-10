/* REMOVE 000WEBHOST ADS */
$("footer + div").remove();
$("footer + script").remove();

var sound = new Howl({
src: ['HB-Hindi.mp3']
});

sound.play();

// Change global volume.
Howler.volume(0.5);