let btns = document.querySelectorAll(".btn");
let turn = "x";
let resbtn=document.querySelector(".reset");
let newbtn=document.querySelector(".newgame");
let msg=document.querySelector(".msg");
let windiv=document.querySelector(".winner")
let arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let count=0;
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (turn === "x") {
        btn.innerHTML = "X";
        turn = "o";
        btn.disabled = true;
      } else {
        btn.innerHTML = "O";
        turn = "x";
        btn.disabled = true;
      }
      count++;
      checkwinner();
      if(resbtn.addEventListener("click",()=>{
        btns.disabled=true;
      }));
      if(count===9)
      {
        gametie();
      }
    
    });
  });

const checkwinner=()=>{
    for(let a of arr)
    {
      let pos1=btns[a[0]].innerHTML;
      let pos2=btns[a[1]].innerHTML;
      let pos3=btns[a[2]].innerHTML;
      if(pos1!="" && pos2!="" && pos3!="")
      {
      if((pos1===pos2 || pos1==pos3) && pos2===pos3 && pos1===pos3)
      showwinner(pos1);
      }
    }
};

const showwinner=(pos1)=>{
  msg.innerText=`Winner is ${pos1}`;
  windiv.classList.remove("hide");
  disableboxes();
}
const disableboxes=()=>{
  for(let a of btns)
  a.disabled=true;
}
const enableboxes=()=>{
  for(let a of btns)
  {
  a.disabled=false;
  a.innerText="";
  }
}

newbtn.addEventListener("click",()=>{
  turn="x";
  enableboxes();
  windiv.classList.add("hide");
  count=0;
})

resbtn.addEventListener("click",()=>{
  turn="x";
  enableboxes();
  count=0;
})

const gametie=()=>{
  msg.innerText=`Match is Tie`;
  windiv.classList.remove("hide");
  disableboxes();
}