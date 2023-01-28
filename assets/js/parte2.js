var inputGithub = document.querySelector("#cantidadGithub");
var inputGit = document.querySelector("#cantidadGit");
var inputSlack = document.querySelector("#cantidadSlack");

var spanCantidadTotal = document.querySelector ("#cantidadTotal");

function calcularTotalDeStickers() {
    var cantidadGithub = Number(inputGithub.value);
    var cantidadGit = Number(inputGit.value);
    var cantidadSlack = Number(inputSlack.value);

    var cantidadTotal = cantidadGithub + cantidadGit + cantidadSlack;

    if (cantidadTotal <=10) {
        spanCantidadTotal.innerHTML = cantidadTotal;
    }

    else {spanCantidadTotal.innerHTML = "Demasiados";
    }     
}

