const { route } = require("express/lib/application");

import Home from "./"
import Menu from "./static/Menu.js";
import Main from "./static/Main.js";

const router = async () => {
    const routes = [
        {path: "/", view: Home},
        {path: "/Menu", view: Menu},
        {path: "/Main", view: Main},
    ];
};

const page = new match.route.view();
document.querySelector("#root").innerHTML = await page.getHTML();

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