function isSafari() {
    var ua = navigator.userAgent.toLowerCase();
    return ua.includes('safari') && !ua.includes('chrome');
}

if (isSafari()) {
    window.location.reload();
}
