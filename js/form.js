function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask(e) {
    //console.log('mask',e);
    var matrix = this.placeholder,// .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function (a) {
        return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
}
window.addEventListener("DOMContentLoaded", function () {
    var input = document.querySelector("#online_phone");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
});

function viewDiv() {
    document.getElementById("form-locked").style.visibility = "visible";
};
function closeDiv() {
    document.getElementById("form-locked").style.visibility = "hidden";
    document.getElementById("name").value = "";
    document.getElementById("online_phone").value = "+7(___)___-__-__";
    document.getElementById("one").checked = false;
    document.getElementById("submit").setAttribute("disabled", "");
};


function checkFluency() {
    var chbox;
    chbox = document.getElementById('one');
    if (chbox.checked) {
        document.getElementById("submit").removeAttribute("disabled");
    }
    else {
        document.getElementById("submit").setAttribute("disabled", "");
    }
};
