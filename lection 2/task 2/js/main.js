'use strict';
window.onload = function(){

    let repoHead = document.querySelector('.repo-head'),
        repoBody = document.querySelector('.repo-body');
    
    function getRepo(url){
        return fetch(url)
        .then(function(response) {
            return response.text();
        })
        .then ((response) => {
            let repoInfo = JSON.parse(response);
            repoHead.innerHTML += `<img class="repo-avatar" src="${repoInfo.avatar_url}" alt="${repoInfo.login}">`;
            return(repoInfo.repos_url);
        })
    }
    
    function getChild(url){
        return fetch(url)
        .then(function(response) {
            return response.text();
        })
        .then ((response) => {
            let repoInfo = JSON.parse(response);
            console.log(repoInfo);
            repoInfo.forEach((item) => {
                repoBody.innerHTML += `<article data-id="${item.id}" class="repo-body_item">
                    <h1 class="repo-body_item_id">ID: ${item.id}</h1>
                    <div class="repo-body_item_branch">Default branch: <b>${item.default_branch}</b></div>
                    <div class="repo-body_item_update">Last update: <b>${item.updated_at}</b></div>
                    <div class="repo-body_item_language">Language: <b>${item.language}</b></div>
                </article>
                `
            })
        })
    }
    
    async function renderRepo(url){
        let mainRepo = await getRepo(url)
        await getChild(mainRepo);
    }
    
    renderRepo('https://api.github.com/orgs/hillel-front-end')
    
}
