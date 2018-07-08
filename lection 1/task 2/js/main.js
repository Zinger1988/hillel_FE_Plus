'use strict';

fetch('json/data.json')
.then(function(response) {
    return response.text();
})
.then (function(text){
    
    let getList = JSON.parse(text);
    
    class ViewController{
        constructor(el){
            this.title = el.title;
            this.size = el.size;
            this.img = el.img;
        }
        render (){
            let [wrapper, newItem] = [document.querySelector('.task-body'), document.createElement('div')];
            newItem.classList.add('item');
            wrapper.appendChild(newItem);
            newItem.innerHTML = `<img src=${this.img} class="item-img">
            <div class="item-size">Size: ${this.size}</div>
            <div class="item-title">${this.title}</div>`
        }
    }
    
    getList.forEach(element => {
        element = new ViewController(element);
        element.render();
    });
    
})
.catch(function() {
    alert("Smt going wrong");
});




