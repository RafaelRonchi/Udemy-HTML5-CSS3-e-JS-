(function(){
    'use strict';
    
    var $form = document.querySelector('form')
    var $txtUser = document.getElementById('txtUser')
    var $txtPass = document.getElementById('txtPass')
    var $btn = document.getElementById('submit')
    
    /* $txtMsg.addEventListener('keypress', keypress)
    $txtMsg.addEventListener('keyup', keyup)
    $txtMsg.addEventListener('keydown', keydown) */

    /* function keypress(e){}
    function keyup(e){}
    function keydown(e){} */

    $form.addEventListener('submit', function(){
        if(!$txtUser.value|| !$txtPass.value){
            alert('Error! name or password is null')
            event.preventDefault();
        } else {
            alert('OK')
        }
    })
})()