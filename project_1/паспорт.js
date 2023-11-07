const mode_for_click = document.getElementById("for_click");
function find_edit(){
    const block4 = document.getElementsByClassName('block4')[0];
    console.log(block4.innerText);
    block4.innerText = 'Klenova';
    const block5 = document.getElementsByClassName('block5')[0];
    console.log(block5.innerText);
    block5.innerText = 'Anastasia';
    const block6 = document.getElementsByClassName('block6')[0];
    console.log(block6.innerText);
    block6.innerText = 'Andreevna';
}
mode_for_click.addEventListener("click", find_edit);
