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
    console.log(target);
    let targetIndex = target.className[10];
    console.log(targetIndex);
    let className = text.children[targetIndex - 1];
    console.log(className);
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
        console.log(i + content);
    }
}
addNumberToTab();
