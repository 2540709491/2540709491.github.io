start();
async function start() {
    var names = await fetch("https://st1by.rth1.one/bannames.txt?" + new Date().getTime()).then(res => res.text());
    console.log(names);
    var link = names.split(/[(\r\n)),\r\n]+/);
    var box = document.getElementById("raws");
    console.log(box.innerHTML);
    box.innerHTML = "<div class=\"space\" name=\"space\"></div>";
    for (let index = 0; index < link.length; index++) {
        box.innerHTML += "<h3 class=\"name\">" + link[index] + "</h3>";
    }
    box.innerHTML += "<div class=\"space\" name=\"space\"></div>";
}