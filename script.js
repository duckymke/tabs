const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const article = document.querySelectorAll(".content");

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if(id){
        // this is to manipulate the active on the buttons when you click
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
    });
// this hides the other articles and show one
        article.forEach(function(article){
            article.classList.remove("active") // removes active class to leave the conent class showing
        })
        const element = document.getElementById(id);
        element.classList.add('active') // adds the active class to hide the content
}
});