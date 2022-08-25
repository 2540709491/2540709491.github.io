start()
async function start() {
    var names = await fetch("./bannames.txt").then(res => res.text())
    console.log(names)
    var link = names.split(/[(,)),]+/)
    var box = document.getElementById("raws")
    console.log(box.innerHTML)
    box.innerHTML = "<div class=\"space\" name=\"space\"></div>"
    for (let index = 0; index < link.length; index++) {
        box.innerHTML += "<h3 class=\"name\">" + link[index] + "</h3>"
    }
    box.innerHTML += "<h2 class=\"T2\">以上用户全部出现违规使用服务器情况,已经停用</h2><h2 class=\"T2\">请自觉遵守使用规定,规范使用服务器!</h2><h2 class=\"T2\">谢谢配合!</h2><div class=\"space\" name=\"space\"></div>"
}