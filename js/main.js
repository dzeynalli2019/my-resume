let tabs = document.getElementById("change-icons");
let activeTab = document.querySelectorAll(".active");

let text = document.querySelector(".tab-content");
let shownText = document.querySelectorAll(".hide");

tabs.addEventListener("click", function (e) {
    let target = e.target;
    if (activeTab) {
        for (let el of tabs.children) {
            el.classList.remove("active");
        }
    }
    target.classList.add("active");
});

tabs.addEventListener("click", function (e) {
    let target = e.target;
    let targetIndex = target.className[10];
    let className = text.children[targetIndex - 1];
    if (shownText) {
        if (shownText.length) {
            for (let el of shownText) {
                el.classList.remove("show");
            }
        }
        className.classList.add("show");
    }

});

function addNumberToTab() {
    let i = 1;
    for (let content of tabs.children) {
        content.classList.add(i);
        i++;
    }
}
addNumberToTab();




//---------------------------- portifolio -------------------------------

const filtersTitlesContainer = document.getElementById('portifolio-ul');
const projects = document.querySelectorAll('.col');

filtersTitlesContainer.addEventListener('click', (e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains('portifolio-li')) {
        const title = e.target;
        const type = title.dataset.filterby || "col";
        const isActive = title.classList.contains('act');

        if (!isActive) {
            document.querySelector('.portifolio-li.act').classList.remove('act');
            title.classList.add('act');

            filterByClassName(projects,type);
        }
    }

});

function filterByClassName(elements, className) {
    for (let element of elements) {
        element.hidden = !element.classList.contains(className);
    }
}
