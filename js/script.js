var bookmarkBtn = document.querySelectorAll('.bookmark');

function bookmarkClick(e) {
    e.preventDefault();
    var bm = this;
    bm.classList.toggle('added');
    var parentId = bm.parentElement.id;
    var bookMarks = document.querySelector('.bookmark-list');
    if (bm.classList.contains('added')) {
        bm.textContent = 'Удалить из закладок';
        var headerArticle = document.querySelector('#' + parentId + ' h2');
        var linkArticle = document.createElement('a');
        linkArticle.textContent = headerArticle.textContent;
        linkArticle.setAttribute('href', '#' + parentId);
        bookMarks.append(linkArticle);
    } else {
        bm.textContent = 'Добавить в закладки';
        var linkRemove = document.querySelector('a[href="#' + parentId + '"]');
        linkRemove.remove();
    }
}

for(let i=0; i<bookmarkBtn.length; i++)
{
    bookmarkBtn[i].onclick = bookmarkClick;
}

var detailsBtn = document.querySelectorAll('.details');

function detailsClick(e) {
    e.preventDefault();
    var bn = this;
    bn.classList.toggle('addedInfo');
    var parentId2 = bn.parentElement.id;
    if(bn.classList.contains('addedInfo'))
    {
        document.getElementById(parentId2 + "_content").style.display = "flex";
    }
    else
    {
        document.getElementById(parentId2 + "_content").style.display = "none";
    }
}

for(let i=0; i<detailsBtn.length; i++)
{
    detailsBtn[i].onclick = detailsClick;
}