$(document).ready(function(){
    var videoElement = document.querySelector("#backgroundVideo");

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

    if (navigator.getUserMedia) {
    navigator.getUserMedia({video: true}, handleVideo, videoError);
}

    function handleVideo(stream) {
        videoElement.src = window.URL.createObjectURL(stream);
    }

    function videoError(e) {
        // do something
    }
});

handleLanguageForm = function(){

    var formData = $("#languageForm").serializeArray();

    var language = formData[0].value;

    var newUrl = "/learn/" + language;

    window.location.href = newUrl;
}