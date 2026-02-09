function goWelcome(){
    document.querySelector('.page1').style.display = "none";
    document.querySelector('.page2').style.display = "flex";
}

function showNoPopup(){
    document.getElementById("noPopup").style.display = "flex";
}

function closeNoPopup(){
    document.getElementById("noPopup").style.display = "none";
}

function openChoice(){
    document.getElementById("choicePopup").style.display = "flex";
}

function goExplore(){
    window.location.href = "explore.html";
}
function goGame(){
    window.location.href = "games.html";
}
