function firstFunction() {
    var elems = document.querySelector(".active");
    if (elems !== null) {
        elems.classList.remove("active");
    }
    // this.target.className = "active";
    this.classList.add("active");
}
firstLi.forEach(item =>{
    item.onclick = firstFunction;
})

function secondFunction() {
    var elems = document.querySelector(".active-second");
    if (elems !== null) {
        elems.classList.remove("active-second");
    }
    // this.target.className = "active";
    this.classList.add("active-second");
}
secondLi.forEach(item =>{
    item.onclick = secondFunction;
})




// for (var i = 0; i < firstLi.length; i++) {
//     firstLi[i].onclick = function () {
//         // remove class from sibling
//         var el = firstLi[0];
//         while (el) {
//             if (el.tagName === "LI") {
//                 //remove class
//                 el.classList.remove("active");

//             }
//             // pass to the new sibling
//             el = el.nextSibling;
//         }

//         this.classList.add("active");
//     }
// }
// for (var i = 0; i < secondLi.length; i++) {
//     secondLi[i].onclick = function () {
//         // remove class from sibling
//         var el = secondLi[0];
//         while (el) {
//             if (el.tagName === "LI") {
//                 //remove class
//                 el.classList.remove("active");

//             }
//             // pass to the new sibling
//             el = el.nextSibling;
//         }

//         this.classList.add("active");
//     }
// }

