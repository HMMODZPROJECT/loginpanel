document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault(); // biar tidak reload halaman

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Contoh validasi sederhana
    if(username === "hmmodz" && password === "1"){
        window.location.href = "https://sourcesystembyhmmodz.netlify.app/"; // arahkan ke halaman baru
    } else {
        alert("Username atau Password salah!");
    }
});