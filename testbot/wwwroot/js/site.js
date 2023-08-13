// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function onTelegramAuth(user) {
    alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @@' + user.username : '') + ')');
}

function newWindow() {
    console.log(123)
    var script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';

    script.async;
    script.setAttribute("data-telegram-login", 'online_sdelka_bot')
    script.setAttribute("data-size", 'large')
    script.setAttribute("data-onauth", 'onTelegramAuth(user)')
    script.setAttribute("data-request-access", 'write')

    document.getElementById('tg_login').appendChild(script);
}

function generate(code) {
    $('tg_login').appendChild(code)
}