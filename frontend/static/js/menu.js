
export default class{
    constructor(){
        document.title = "Menu";
    }
    async getHtml(){
        return 
        ;
    }
}

const toogleBtn = document.querySelector('.side_toogleBtn');
const list = document.querySelector('.side_list');

toogleBtn.addEventListener('click', () => {
    list.classList.toggle('active');
});