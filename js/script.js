// COOKIES
if (document.getElementById("concorda_cookie")) {

    // VERIFICAÇÃO LOCAL STORAGE
    if (!localStorage.getItem("ls_concorda_cookie")) {
        document.getElementById("concorda_cookie").addEventListener("click", aceitar_cookie);
        document.getElementById("msg_cookies").style.display = "flex";
    }

    // FUNÇÃO ADICIONAR LOCAL STORAGE
    function aceitar_cookie() {
        window.localStorage.setItem('ls_concorda_cookie', 'true');
        document.getElementById("msg_cookies").style.display = "none";
    }

}