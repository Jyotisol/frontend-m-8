const showHideTextBtns = document.querySelectorAll('.img-container.show-hide-text > img');
console.log(showHideTextBtns);
showHideTextBtns.forEach((btnIcon) => {
    btnIcon.addEventListener("click", function (e) {
        console.log(e.target.tagName);
        if (e.target.tagName === "IMG") {
            const src = e.target.getAttribute("src");
            console.log(src);
            const cardQaItem = e.target.closest(".card__qa");
            const text = cardQaItem.getElementsByClassName("card__answer")[0];
            if (src === "assets/images/icon-plus.svg") {
                e.target.src = "assets/images/icon-minus.svg";
                text.classList.toggle('card__answer--hidden');
            } else if (src === "assets/images/icon-minus.svg") {
                e.target.src = "assets/images/icon-plus.svg";
                text.classList.toggle('card__answer--hidden');
            }
            e.stopPropagation();

        }
    });
})