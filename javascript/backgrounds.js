let colors = new Array();
colors.push('red');
colors.push('white');
colors.push('light-blue');
colors.push('purple');
colors.push('pink');

function changeBodyBackground(color){

    colors.forEach((element) => {
        if(document.getElementById('body').classList.contains(element)) {
            document.getElementById('body').classList.remove(element);
        }
    })
    document.getElementById('body').classList.add(color);
}