var tag = document.getElementById('sentakushi');
var taglist = tag.getElementsByTagName('button');
var rand = Math.round( Math.random()*3 )+1;
var k=0;
for(var i = 0; i<rand;i++){
    tag.appendChild(taglist[i]);
}

function answer(vara){
    if(vara == 3){
        alert("正解!!");
    }
    else {
        alert("不正解...");
    }
}

function hint(){
    var rand = Math.round( Math.random()*2);
    if(k==0){
        if(taglist[rand].id=="wrong"){
        $(taglist[rand]).fadeToggle();
        k=k+1;
        }
        else{
            $(taglist[(rand + 1)%3]).fadeToggle();
            k=k+1;
        }
    }
    
}