function login() {
    var id = document.querySelector('#id');
    var password = document.querySelector('#password');

    if(id.value == "" || password.value == "") {
        alert("로그인을 할 수 없습니다.")
    }
    else {
        location.href = 'main.html';
    }
}

