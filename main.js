function swapSection(e) {
    var id = e.id;

    var lists = document.querySelectorAll('.listnone');
    lists.forEach(element => {
        element.style.display = "none";
        console.log(element);
    });
    document.querySelector('.' + id).style.display = "block";
    console.log(id);
    console.log(document.getElementsByClassNamey(id).style.display);
}

function swapIcon(icon) {
    icon.children[1].classList.toggle("d-none");
    icon.children[2].classList.toggle("d-none");
}