async function main(){
    async function handleCC(){
        document.querySelector("#box").textContent = await (await fetch("http://127.0.0.1:3000")).text();
    }

    document.querySelector("#ccBtn").addEventListener("click", handleCC);
}
document.addEventListener("DOMContentLoaded", main);