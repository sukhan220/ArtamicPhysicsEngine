console.log(artamic('h3').htmt());
artamic('h1').on('click',function(){
    alert('click');
    document.getElementById('h').style.color="red";
    artamic('h1').hide();
})

artamic('h1').attr("class","nice")