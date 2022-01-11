const toogleBtn = document.querySelector('.side_toogleBtn');
const list = document.querySelector('.side_list');

toogleBtn.addEventListener('click', () => {
    list.classList.toggle('active');
});

const router = async () => {
    const routes = [
        {path: "/", view:()=>console.log("Viewing Home")},
        {path: "/posts", view:()=>console.log("Viewing Posts")},
        {path: "/settings", view:()=>console.log("Viewing Setting")},
    ];
}