let page = document.querySelector('html');
let dist =  1390/* 1398 if fullscreen, else 1390*/;

let pagesInBook = 294; //Eragon:294, Inheritance:515, Eldest:397, Brisingr:

if(localStorage.pageNum > 0){

    for(let i = 1; i < Number(localStorage.pageNum); i++){
        page.style.left = parseFloat(page.style.left || 0) - dist + 'px'; 
        page.style.right = parseFloat(page.style.right || 0) + dist + 'px';
    }

} else {
    localStorage.pageNum = 1;
}


document.addEventListener('keydown', (e) => {
    if (e.keyCode == 39 && Number(localStorage.pageNum) < pagesInBook){
        e.preventDefault();
        page.style.left = parseFloat(page.style.left || 0) - dist + 'px'; 
        page.style.right = parseFloat(page.style.right || 0) + dist + 'px';

        localStorage.pageNum = Number(localStorage.pageNum) + 1;
    }
    else if (e.keyCode == 37 && Number(localStorage.pageNum) > 1){
        e.preventDefault();
        page.style.left = parseFloat(page.style.left || 0) + dist + 'px'; 
        page.style.right = parseFloat(page.style.right || 0) - dist + 'px';

        localStorage.pageNum = Number(localStorage.pageNum) - 1;
    }
});