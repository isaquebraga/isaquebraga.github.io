function isSafari() {
    const ua = navigator.userAgent;
    return /^(?!.*Chrome|.*Firefox|.*Opera).*Safari/.test(ua);
}

if (isSafari()) {
    if (!sessionStorage.getItem('safariRefreshDone')) {
        window.addEventListener('load', function () {
            location.reload();
            sessionStorage.setItem('safariRefreshDone', 'true');
        });
    }
}