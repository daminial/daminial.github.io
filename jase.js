function toggleContent() {
    var content = document.getElementById("content");
    if (content.style.display === "none") {
        content.style.display = "block"; 
    } else {
        content.style.display = "none"; 
    }
    let arrowButton = document.getElementById('arrowButton');
    if (arrowButton.style.transform === 'rotate(0deg)') {
        arrowButton.style.transform = 'rotate(270deg)';
    } else {
        arrowButton.style.transform = 'rotate(0deg)';
    }
}
function toggleContent1() {
    var content_1 = document.getElementById("content_1");
    if (content_1.style.display === "none") {
        content_1.style.display = "block"; 
    } else {
        content_1.style.display = "none"; 
    }
    let arrowButton_1 = document.getElementById('arrowButton_1');
    if (arrowButton_1.style.transform === 'rotate(0deg)') {
        arrowButton_1.style.transform = 'rotate(270deg)';
    } else {
        arrowButton_1.style.transform = 'rotate(0deg)';
    }
}
function toggleContent2() {
    var content_2 = document.getElementById("content_2");
    if (content_2.style.display === "none") {
        content_2.style.display = "block"; 
    } else {
        content_2.style.display = "none"; 
    }
    let arrowButton_2 = document.getElementById('arrowButton_2');
    if (arrowButton_2.style.transform === 'rotate(0deg)') {
        arrowButton_2.style.transform = 'rotate(270deg)';
    } else {
        arrowButton_2.style.transform = 'rotate(0deg)';
    }
}
function toggleContent3() {
    var content_3 = document.getElementById("content_3");
    if (content_3.style.display === "none") {
        content_3.style.display = "block"; 
    } else {
        content_3.style.display = "none"; 
    }
    let arrowButton_3 = document.getElementById('arrowButton_3');
    if (arrowButton_3.style.transform === 'rotate(0deg)') {
        arrowButton_3.style.transform = 'rotate(270deg)';
    } else {
        arrowButton_3.style.transform = 'rotate(0deg)';
    }
}
function toggleContent4() {
    var content_4 = document.getElementById("content_4");
    if (content_4.style.display === "none") {
        content_4.style.display = "block"; 
    } else {
        content_4.style.display = "none"; 
    }
    let arrowButton_4 = document.getElementById('arrowButton_4');
    if (arrowButton_4.style.transform === 'rotate(0deg)') {
        arrowButton_4.style.transform = 'rotate(270deg)';
    } else {
        arrowButton_4.style.transform = 'rotate(0deg)';
    }
}
function toggleContent5() {
    var content_5 = document.getElementById("content_5");
    if (content_5.style.display === "none") {
        content_5.style.display = "block"; 
    } else {
        content_5.style.display = "none"; 
    }
    let arrowButton_5 = document.getElementById('arrowButton_5');
    if (arrowButton_5.style.transform === 'rotate(0deg)') {
        arrowButton_5.style.transform = 'rotate(270deg)';
    } else {
        arrowButton_3.style.transform = 'rotate(0deg)';
    }
}
function toggleContent6() {
    var content_6 = document.getElementById("content_6");
    if (content_6.style.display === "none") {
        content_6.style.display = "block"; 
    } else {
        content_6.style.display = "none"; 
    }
    let arrowButton_6 = document.getElementById('arrowButton_6');
    if (arrowButton_6.style.transform === 'rotate(0deg)') {
        arrowButton_6.style.transform = 'rotate(270deg)';
    } else {
        arrowButton_3.style.transform = 'rotate(0deg)';
    }
}
function toggleContent7() {
    var content_7 = document.getElementById("content_7");
    if (content_7.style.display === "none") {
        content_7.style.display = "block"; 
    } else {
        content_7.style.display = "none"; 
    }
    let arrowButton_7 = document.getElementById('arrowButton_7');
    if (arrowButton_7.style.transform === 'rotate(0deg)') {
        arrowButton_7.style.transform = 'rotate(270deg)';
    } else {
        arrowButton_7.style.transform = 'rotate(0deg)';
    }
}
// поиск маршрута

superfind = function(){
    var surround = document.createElement('span');
    surround.style.background='#e9bd13';

    return function( str ){
        var sel = getSelection();        
        sel.removeAllRanges();           


    if(surround.hasChildNodes()){ 
        sel.collapse(surround.nextSibling,0);

        var temp = document.createDocumentFragment();
        while(surround.hasChildNodes()) temp.appendChild(surround.firstChild);
        surround.parentNode.replaceChild( temp,surround); 
            }

        while(sel.isCollapsed){ 
            if(!find( str )){   
                return false
            }
        }
        var range  = sel.getRangeAt(0); 
        range.surroundContents(surround); 
        sel.collapse(surround,1);

            return true
        }
}();
