function isSafari() {
    var ua = navigator.userAgent.toLowerCase();
    return ua.includes('safari') && !ua.includes('chrome');
}

if (isSafari() && !localStorage.getItem('safariReloaded')) {
    localStorage.setItem('safariReloaded', 'true');
    window.location.reload();
}
