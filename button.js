var btn = document.getElementById('btn');

btn.onclick = function() {
    /* This changes the button's label */
    let i = parseInt(btn.innerHTML) + 1
    btn.innerHTML = i.toString();
};