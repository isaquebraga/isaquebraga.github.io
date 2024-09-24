function isSafari() {
    var ua = navigator.userAgent.toLowerCase();
    return ua.includes('safari') && !ua.includes('chrome');
}

window.addEventListener('load', function () {
    if (isSafari() && !localStorage.getItem('safariReloadedOnce')) {
        setTimeout(function () {
            localStorage.setItem('safariReloadedOnce', 'true');
            window.location.reload();
        }, 1000);
    }
});