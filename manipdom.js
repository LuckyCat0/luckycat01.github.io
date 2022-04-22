const btn = document.querySelector('#btn');
const img = document.getElementById('img');

btn.addEventListener('click', (e) => {
    console.log(e)
    img.classList.toggle('show')
    alert('Ca a changé')
})

// pour ça on aurait aussi pu faire 
// btn.onclick = function(){
// console.log(e)
// img.classList.toggle('show')
// alert('Ca a changé')
// }

// ***********************

const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const textee = document.querySelector('.textee')

mouseEvent.addEventListener('mousemove', (e) => {
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%"

    if (e.x > 500) {
        document.body.style.filter = "blur(3px)";
    } else {
        document.body.style.filter = "none";
    }
})

//********
document.getElementById('input').addEventListener('input', (e) =>{
    console.log(e.target.value);
    textee.innerHTML = e.target.value
})

// ****************************

const theme = document.querySelectorAll('.theme');

theme.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target.id);
        document.body.classList.remove("darkTheme", "redTheme", "goldTheme")
        switch (e.target.id) {
            case "dark" :
                document.body.classList.add("darkTheme");
                break;
            case "red" :
                document.body.classList.add("redTheme");
                break;
            case "gold" :
                document.body.classList.add("goldTheme");
                break;
            default:
                null;
        }
    })
})
