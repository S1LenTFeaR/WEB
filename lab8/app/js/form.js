//Открытие формы
$("#contact").on("click", function()
{
    $("#form-locked").css("visibility", "visible");
})
//Закрытие формы
$("#close").on("click", function()
{
    $("#form-locked").css("visibility", "hidden");
    $("#name").val("");
    $("#online_phone").val("+7(___)___-__-__");
    $("#one").prop("checked", false);
    $("#submit").attr("disabled", "");
})


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
