let b=document.getElementById('caroGame');
let data='';
let board=[];
let h=1;
//Add cac phan tu vao mang 2 chieu
for(let i=0; i<5; i++){
    board[i]=new Array('(.)','(.)','(.)','(.)','(.)');
}
//Xu ly hien thi ban dau
for(let i=0; i<5; i++){
    data+='<br>';
    for(let j=0; j<5; j++){
        data+=board[i][j];
    }
}
b.innerHTML=data;

function changeValue(){
    data='';
    let posX=parseInt(prompt("Nhap vi tri cua x"));
    let posY=parseInt(prompt("Nhap vi tri cua y"));
    if(h%2===0){
        board[posX][posY]='x';
    }else{
        board[posX][posY]='o';
    }
    h++;
    for(let i=0; i<5; i++){
        data+='<br>';
        for(let j=0; j<5; j++){
            data+=board[i][j];
        }
    }
    b.innerHTML=data;
    for(let i=0; i<5; i++){
        for (let j=0; j<5; j++){
            if (board[i][j] === 'x' && board[i][j+1] === 'x' && board[i][j+2] === 'x' ||
                board[i][j] === 'x' && board[i+1][j] === 'x' && board[i+2][j] === 'x'){
                alert("x Thắng");
            }else if(board[i][j] === 'o' && board[i][j+1] === 'o' && board[i][j+2] === 'o' ||
                board[i][j] === 'o' && board[i+1][j] === 'o' && board[i+2][j] === 'o'){
                alert("o Thắng");
            }
        }
    }
}