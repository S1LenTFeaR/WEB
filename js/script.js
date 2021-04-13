$(document).ready(function () {
    $('.bookmark').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('added');
        var parentId = $(this).parent().attr("id");
        var bookMarks = $('.bookmark-list');
        if ($(this).hasClass('added')) {
            $(this).text("Удалить из закладок");
            var text = $('#' + parentId + ' h2').text();
            $('<a>', { href: '#' + parentId, text: text }).appendTo(bookMarks);
        } else {
            $(this).text("Добавить в закладки");
            $('a[href="#' + parentId + '"]').remove();
        }
    });
});

var detailsBtn = document.querySelectorAll('.details');

function detailsClick(e) {
    e.preventDefault();
    var bn = this;
    bn.classList.toggle('addedInfo');
    var parentId2 = bn.parentElement.id;
    if (bn.classList.contains('addedInfo')) {
        document.getElementById(parentId2 + "_content").style.display = "flex";
    }
    else {
        document.getElementById(parentId2 + "_content").style.display = "none";
    }
}

for (let i = 0; i < detailsBtn.length; i++) {
    detailsBtn[i].onclick = detailsClick;
}