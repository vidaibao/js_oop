const outerButtonIds = [1, 2, 3, 6, 9, 8, 7, 4];
var btn5 = document.getElementById('btn5');
const outerButtonLbls = [...outerButtonIds]
btn5.onclick = function() {
    
    const btns = outerButtonIds.map(id => document.getElementById('btn' + id));
    //console.log(btns)
    //const lastBtn = btns.pop();
    const lastLabel = outerButtonLbls.pop()
    //btns.unshift(lastBtn);
    outerButtonLbls.unshift(lastLabel)
    console.log(outerButtonLbls)

    for (let i = 0; i < outerButtonIds.length; i++) {
        btns[i].innerText = outerButtonLbls[i];
    }
};