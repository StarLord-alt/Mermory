 // document.addEventListener('DOMContentLoader',()=>{
 let nbr_click=0;
let pred_item=-1;
let pred_index=-1;
    let GridGame=[]
 let score=0;
 let deja_vu=[]
    const GridItems=[
        {
            id:0,
            name:"fries",
            image:"images/fries.png"
        },
        {
            id:1,
            name:"fries",
            image:"images/fries.png"
        },
        {
            id:2,
            name:"cheeseburger",
            image:"images/cheeseburger.png"
        },
        {
            id:3,
            name:"cheeseburger",
            image:"images/cheeseburger.png"
        },
        {
            id:4,
            name:"hotdog",
            image:"images/hotdog.png"
        },
        {
            id:5,
            name:"hotdog",
            image:"images/hotdog.png"
        },
        {
            id:6,
            name:"ice-cream",
            image:"images/ice-cream.png"
        },
        {
            id:7,
            name:"ice-cream",
            image:"images/ice-cream.png"
        },
        {
            id:8,
            name:"milkshake",
            image:"images/milkshake.png"
        },
        {
            id:9,
            name:"milkshake",
            image:"images/milkshake.png"
        },
        {
            id:10,
            name:"pizza",
            image:"images/pizza.png"
        },
        {
            id:11,
            name:"pizza",
            image:"images/pizza.png"
        },
        {
            id:12,
            name:"flower",
            image:"images/flower.png"
        },
        {
            id:13,
            name:"flower",
            image:"images/flower.png"
        },
        {
            id:14,
            name:"heart",
            image:"images/heart.png"
        },
        {
            id:15,
            name:"heart",
            image:"images/heart.png"
        },
        {
            id:16,
            name:"blank",
            image:"images/blank.png"
        }
    ]
    const grid = document.querySelector(".grid")


    function creatBoard() {

        initGrid();

    }
    function flipCard(idGridGame){

        let selectedCard= GridGame.find(({id})=>id===idGridGame);
        let index=selectedCard.index;

        GridGame[index].selected=1;
        if(selectedCard.locked!==1){
        GridGame[index].visible=1
        nbr_click++;
        DisplayBoard()
    if(nbr_click===1){
        pred_item=GridGame[index];
    }else if(nbr_click===2){
        if(pred_item.name===GridGame[index].name && pred_item.id !==GridGame[index].id){
            GridGame[pred_item.index].locked=1;
            GridGame[index].locked=1;

            nbr_click=0;
            GridGame[pred_item.index].selected=0;
            GridGame[index].selected=0;
            score++;
            refreshScore(score);
            DisplayBoard()
        }else{
            DisplayBoard()
            if(GridGame[pred_item.index].locked!==1){
                GridGame[pred_item.index].visible=0;
            }
            if(GridGame[index].locked!==1) {
                GridGame[index].visible = 0;
            }
            GridGame[pred_item.index].selected=0;
            GridGame[index].selected=0;
            score--;
            refreshScore(score)
            DisplayBoard()
            nbr_click=0;
        }
    }else{

    }
        }else{

        }
    }
    function refreshScore(score){
         let item=document.querySelector('.score').innerHTML=' <h3>Score :'+score+' </h3>'
    }
    function DisplayBoard(delay=0,init=0){


        grid.innerHTML=""
        for(let i=0;i<GridGame.length;i++){
            var card=document.createElement('img')
            if(GridGame[i].visible===0){

                    card.setAttribute('src','images/blank.png')
            }else{


                if(GridGame[i].selected===1){
                    let position=(GridGame[i].image).length-4;
                    let output = [GridGame[i].image.slice(0, position), "_selected", GridGame[i].image.slice(position)].join('');
                    card.setAttribute('src',''+output)
                }else{
                    card.setAttribute('src',''+GridGame[i].image)
                }
                if(GridGame[i].locked===1){
                    let position=(GridGame[i].image).length-4;
                    let output = [GridGame[i].image.slice(0, position), "_nb", GridGame[i].image.slice(position)].join('');
                    card.setAttribute('src',''+output)
                }
            }


            card.setAttribute('id',i);
            card.setAttribute('OnClick',"flipCard("+GridGame[i].id+","+i+")")

            grid.appendChild(card)

        }


    }
    // function resetItems(item_index){
    //     let item=document.getElementById(item_index).setAttribute('src','images/blank.png')
    // }
    function initGrid(){

     let itemPlus=[];
        for(let i=0;i<=15;i++){
             let index_random=Math.floor(Math.random() * Math.floor(16));
             while(deja_vu.includes(index_random)){
                 index_random=Math.floor(Math.random() * Math.floor(16));
            }
            if(index_random !== 'undefined'){
                 deja_vu.push(index_random)
            }
            itemPlus=GridItems[index_random]
            itemPlus.visible=0;
            itemPlus.locked=0;
            itemPlus.index=i;
            itemPlus.selected=0;

             GridGame.push(itemPlus)
        }
        DisplayBoard(5000,1);
        DisplayBoard(0,0);
    }
    function print_r(array){
        console.log(JSON.stringify(array, null,1)+"\n\n")
    }
    creatBoard()
