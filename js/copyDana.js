function copyStringToClipboard(str) {
    var el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function dana() {
    copyStringToClipboard("082122384617");
}

document.querySelector(".dana").addEventListener('click', function () {
    swal("Sukses!", "Nomor Dana telah di salin, silahkan buka aplikasi Dana dan pastekan nomor tujuan.", "success");
    copyStringToClipboard("082122384617");
});

document.querySelector(".gopay").addEventListener('click', function () {
    swal("Sukses!", "Nomor Gopay telah di salin, silahkan buka aplikasi Gopay dan pastekan nomor tujuan.", "success");
    copyStringToClipboard("082122384617");
});

document.querySelector(".ovo").addEventListener('click', function () {
    swal("Sukses!", "Nomor Ovo telah di salin, silahkan buka aplikasi Ovo dan pastekan nomor tujuan.", "success");
    copyStringToClipboard("082122384617");
});