const jvLoBg = document.getElementById("jvLoBg");
const java = document.getElementById("java");
java.addEventListener("pointerenter",function(){
    jvLoBg.style.opacity = "100%";
})
java.addEventListener("pointerleave",function(){
    jvLoBg.style.opacity = "00%";
})
//\\Test code//\\
/*const h2 = document.createElement("h2");
h2.textContent = "JavaScript!";
document.body.append(h2);*/