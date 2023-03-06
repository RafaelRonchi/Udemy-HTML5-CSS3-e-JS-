(function(){
    'use strict';
    var $form = document.querySelector('form')
    var $txtUser = document.getElementById('txtUser')
    var $txtPass = document.getElementById('txtPass')
    var $btn = document.getElementById('submit')

    $form.addEventListener('submit', function(){
        if(!$txtUser.value|| !$txtPass.value){
            alert('Error! name or password is null')
            event.preventDefault();
        } else {
            alert('OK')
        }
    })
})()