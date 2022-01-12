const { route } = require("express/lib/application");

import Menu from "./pages/Menu.js";
import Main from "./pages/Main.js";

const router = async () => {
    const routes = [
        {path: "/", view: Home},
        {path: "/Menu", view: Menu},
        {path: "/Main", view: Main},
    ];
}

const pageMatches = routes.map((route) => {
    return{
        route,
        isMatch: route.path === location.pathname,
    };
});
let match = pageMatches.find((pageMatch) => pageMatch.isMatch);
console.log(match.route.view());

document.addEventListener("DOMcontentLoaded",()=>{
    document.body.addEventListener("click",(e)=>{
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            history.pushState(null,null, e.target.href);
            router();
        }
    });
    router()
});