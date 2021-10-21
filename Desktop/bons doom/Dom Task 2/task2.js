
window.onload = function () {
    var select = document.getElementById("dropdown");
    for(var i = 1; i <= 25; i++) {
        var option = document.createElement('option');
        option.text = option.value = i;
        select.add(option, 0);
    }
};

        var count = 0;
        var btn = document.getElementById("btn");
        var disp = document.getElementById("display");

        btn.onclick = function () {
            count++;
            disp.innerHTML = count;
        }




        var gbp, usd, eur, cad, aud;
function init()
{
    sar = document.getElementById("SAR");
    usd = document.getElementById("USD");
    eur = document.getElementById("EUR");
    pound = document.getElementById("Pound");
}

function sarfunc()
{
    usd.value = parseFloat(sar.value) * 0.27;
    eur.value = parseFloat(sar.value) * 0.23;
    pound.value = parseFloat(sar.value) * 0.19;
}

function usdfunc()
{
    sar.value = parseFloat(usd.value) * 3.75;
    eur.value = parseFloat(usd.value) * 0.86;
    pound.value = parseFloat(usd.value) * 0.72;
}

function poundfunc()
{
    sar.value = parseFloat(pound.value) * 5.19;
    usd.value = parseFloat(pound.value) * 1.38;
    eur.value = parseFloat(pound.value) * 1.19;
}



function eurfunc()
{
    sar.value = parseFloat(eur.value) * 4.38;
    usd.value = parseFloat(eur.value) * 1.17;
    pound.value = parseFloat(eur.value) * 0.84;
}



init();