//给登录按钮绑定点击事件
document
    .getElementById("login")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const localuser = localStorage.getItem("username");
        const localpswd = localStorage.getItem("password");
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === localuser && password === localpswd) {
            alert("登录成功");
            window.location.href = "index.html";
        } else {
            alert("账号或密码错误");
        }
    });