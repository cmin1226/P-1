
export default class{
    constructor(){
        document.title = "Menu";
    }
    async getHtml(){
        return 
            <h1>메롱</h1>
        ;
    }
}


const toogleBtn = document.querySelector('.side_toogleBtn');
const list = document.querySelector('.side_list');

toogleBtn.addEventListener('click', () => {
    list.classList.toggle('active');
});