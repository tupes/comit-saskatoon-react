

window.onload = () => {
    let itemButton = document.querySelector('#item-1');
    itemButton.onclick = (event) => {
        console.log('Button clicked!');
        console.log(event);
    };
}