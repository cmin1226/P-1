export default class{
    constructor(){
        document.title = "Main";
    }
    async getHtml(){
        return
        <div>
        <div class="header">
            <a href="/Menu" class="side_toogleBtn">
                <i class="fas fa-bars"></i>
                <ul class="side_list">
                    <li><a href="#" class="side_link">자유 게시판</a></li>
                    <li><a href="#" class="side_link">비밀 게시판</a></li>
                    <li><a href="#" class="side_link">정보 게시판</a></li>
                    <li><a href="#" class="side_link">홍보 게시판</a></li>
                    <li><a href="#" class="side_link">SW 게시판</a></li>
                </ul>
            </a>
            <a href="/" class="ajou_memo" data-link>AJOU Memo</a>
            <a href="/login" class="login" data-link>Log In</a>
        
        </div>
            <div>
            <div class="board_list_wrap">
            <div class="borad_list">
                <div class="board_list_head">
                    자유게시판
                    <input type="submit" value="등록하기"></input>
                </div>
                <div class="board_list_body">
                    <div class="content">
                        <div class="date">12/18</div>
                        <div class="title"><a href="#">아주 비기너 참여하시는..</a></div>
                        <div class="writer">익명</div>  
                    </div>
                    <div class="content">
                        <div class="date">12/18</div>    
                        <div class="title"><a href="#">아주 비기너 참여하시는..</a></div>
                        <div class="writer">익명</div>
                    </div>
                    <div class="content"> 
                        <div class="date">12/18</div>
                        <div class="title"><a href="#">아주 비기너 참여하시는..</a></div>
                        <div class="writer">익명</div>
                    </div>
                    <div class="content">
                        <div class="date">12/18</div>
                        <div class="title"><a href="#">아주 비기너 참여하시는..</a></div>
                        <div class="writer">익명</div>
                    </div>
                    <div class="content">
                        <div class="date">12/18</div>
                        <div class="title"><a href="#">아주 비기너 참여하시는..</a></div>
                        <div class="writer">익명</div>
                    </div>
                    <div class="content"> 
                        <div class="date">12/18</div>   
                        <div class="title"><a href="#">아주 비기너 참여하시는..</a></div>
                        <div class="writer">익명</div>
                    </div>
                </div>
            </div>
            </div>
            
            <footer>
            <div class="paging">
                <a href="#" class="num">1</a>
                <a href="#" class="num">2</a>
                <a href="#" class="num">3</a>
                <a href="#" class="num">4</a>
                <a href="#" class="num">5</a>
                <a href="#" class="num">6</a>
                <a href="#" class="num">7</a>
                <a href="#" class="num">8</a>
                <a href="#" class="num">9</a>
            </div>
            </footer>
            </div>
        </div>
        ;
    }
}