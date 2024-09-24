function isSafari() {
    var ua = navigator.userAgent.toLowerCase();
    return ua.includes('safari') && !ua.includes('chrome');
}

window.addEventListener('load', function () {
    if (isSafari()) {
        setTimeout(function () {
            window.location.reload();
        }, 1000);
    }
});