(function(){
    'use strict';
    var $txtUser = document.getElementById('txtUser')
    var $txtPass = document.getElementById('txtPass')
    var $btn = document.getElementById('submit')

    $btn.addEventListener('click', function(){
        if($txtUser.nodeValue === null || $txtPass.nodeValue === null){
            alert('Error! name or password is null')
        }
    })
})()