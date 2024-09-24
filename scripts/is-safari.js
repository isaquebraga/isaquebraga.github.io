function isSafari() {
    const ua = navigator.userAgent;
    return /^(?!.*Chrome|.*Firefox|.*Opera).*Safari/.test(ua);
}

if (isSafari()) {
    if (!sessionStorage.getItem('safariRefreshDone')) {
        window.addEventListener('load', function () {
            setTimeout(function () {
                window.location.href = '/';
                sessionStorage.setItem('safariRefreshDone', 'true');
            }, 1000);
        });
    }
}
