namespace Interface {
    document.addEventListener('DOMContentLoaded', video);
    
    function video():void {
        let video = document.createElement ('video');
        video.setAttribute('src','./animation/voodoo.mp4');
        document.getElementById("Video").appendChild(video);
        video.play();
    }

}