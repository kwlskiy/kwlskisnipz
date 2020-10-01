
let measurements1 = [];
let measurements2 = [];
window.addEventListener("load", () => {
    document.getElementById("measure").addEventListener("click", () => {
        liftingWrapper1(1)
        liftingWrapper2(1)

        const m1 = measurements1.reduce((p, c) => p + c, 0);
        const m2 = measurements2.reduce((p, c) => p + c, 0);
        console.log(m1)
        console.log(m2)
        console.log(m1 < m2 ? "1 is faster by " + ((m2 / m1) * 100 - 100) + " %" : "2 is faster by " + ((m1 / m2) * 100 - 100) + " %")
    })
});
function heavylifting1() {
    const compute = 3 ** 3 * 3 * 3
    return compute
}

function heavylifting2() {
    const obj = { name: "", name: "" }
    return 3 ** 3 * 3
}

function liftingWrapper1(count) {
    performance.mark("a");
    for (let i = 0; i < count; i++) heavylifting1();
    measurements1.push(performance.measure("measure a to now", "a").duration);
}

function liftingWrapper2(count) {
    performance.mark("b");
    for (let i = 0; i < count; i++) heavylifting2();
    measurements2.push(performance.measure("measure b to now", "b").duration);
}