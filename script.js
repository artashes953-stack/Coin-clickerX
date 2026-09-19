//ranks
let ranks = [
    "Owner", 'Ceo owner', 'Ceo Helper', 'Admin+', 'Admin Pro', 'Admin Masters', 
    'Admin Legendary', 'Admin Mythic', 'Admin Diamond', 'Admin Gold', 'Admin Silver',
    'Admin Bronze', 'Vip+', 'Vip Pro', 'Vip Masters', 'Vip Legendary', 'Vip Mythic', 
    'Vip Diamond', 'Vip Gold', 'Vip Silver', 'Vip Bronze', 'Noob+', 'Noob Masters', 
    'Noob Legendary', 'Noob Mythic', 'Noob Diamond', 'Noob Gold', 'Noob Silver', 'Noob  Bronze',
    'Co-Owner', 'Vice CEO', 'Head Admin', 'Admin Champion', 'Admin Elite', 
    'Moderator+', 'Mod Pro', 'Mod Masters', 'Mod Legendary', 'Helper Pro',
    'MVP', 'MVP+', 'MVP Pro', 'Elite Pro', 'Elite Legendary', 
    'Titan', 'Titan Pro', 'Immortal', 'Immortal+', 'God Mode',
    'Cosmic Diamond', 'Cosmic Mythic', 'Galaxy Pro', 'Shadow Master', 'Quantum+',
    'Starter Pro', 'Starter Masters', 'Noob Elite', 'Super Noob', 'Recruit+'
];
const me={
    mename: "Artashes",
    lastname: "Barbaryan",
    age: "10",
    rank: ranks[0]
}
document.getElementById("namep").textContent="Name: "+me.mename;
   document.getElementById("lp").textContent="Last name: "+me.lastname;
   document.getElementById("agep").textContent="Age: "+me.age;
   document.getElementById("rankp").textContent="Rank: "+me.rank;
//start
let danger=new Audio (`./danger.mp4`)
//boxes st
 let shopbox=document.getElementById("zone3")
let Ceobox=document.getElementById("zone1")
//boxes end
//panel
let opacbox=document.getElementById("first")
let adminpasswordinput=document.getElementById("adminpassword")
let adminpasswordenter=document.getElementById("Enter")
let adminbox=document.getElementById("adminbox")
let adminh1=document.getElementById("Adminh1")



adminpasswordenter.onclick=function(){
    if(adminpasswordinput.value==="1234"){
        adminbox.style.opacity="1"
        opacbox.style.opacity="0"
        adminh1.textContent="Admin Open"
      let logo=  document.getElementById("adlogo")
      logo.style.opacity="0"
      logo.style.top="0"
    }
    else{
        alert("Wrong Password⚠️")
        shopbox.style.width="50%"
        Ceobox.style.width="50%"
        document.getElementById("zone2-panel").style.display="none"
    }
}
//coins
//inputs
let addsetcoins=document.getElementById("addsetcoins")
const addcoinsadm=document.getElementById("Addcoins")
const setcoinsadm=document.getElementById("Setcoins")
addcoinsadm.onclick = function(){
    mycoins+=Number(addsetcoins.value)
    coinsp.textContent="Coins: "+mycoins
}
setcoinsadm.onclick = function(){
    mycoins=Number(addsetcoins.value)
     coinsp.textContent="Coins: "+mycoins
}
//powers
let addsetpower=document.getElementById("addsetpower")
const addpoweradm=document.getElementById("Addpower")
const setpoweradm=document.getElementById("Setpower")
addpoweradm.onclick = function(){
clickpower+=Number(addsetpower.value)
alert("power added- "+addsetpower.value)
}
setpoweradm.onclick = function(){
    clickpower=Number(addsetpower.value)
    alert("power set to "+clickpower)
}
let announceinput=document.getElementById("aninp")
let announcebox=document.getElementById("anbox")
let announcebtn=document.getElementById("announcebtn")
announcebtn.onclick = function(){
    announcebox.style.top="200px"
    announcebox.textContent=announceinput.value
    // danger.currentTime=0;
    // danger.play()
    announcebtn.style.pointerEvents="none"
    setTimeout(() => {
          announcebox.style.top="-600px"
              announcebtn.style.pointerEvents="all"
  
    }, 1300);
}

//for rebirths start
let rebclick=document.getElementById("rebclick")
let rebp=document.getElementById("rebp")
let myrebirths=0;
let rebirthcost=10;
rebclick.onclick = ()=>{
    if(mycoins<rebirthcost){
        alert("not enough money need "+rebirthcost)
    }
    else{
        myrebirths+=1
        rebp.textContent="Rebirths: "+myrebirths
        clickpower*=2
        rebirthcost*=2
        mycoins=0
         coinsp.textContent="Coins: "+mycoins
         alert("Rebirthed! Next rebirth cost "+rebirthcost + `: This is youre ${myrebirths} Rebirth`)
    }

}

//for rebirths end
//shop start
let dog=document.getElementById("dog")
let cat=document.getElementById("cat")
let lion=document.getElementById("lion")
let dogcost=100;
let catcost=500;
let lioncost=1500;
dog.onclick = ()=>{
    if(mycoins<dogcost){
        alert("not enough money need: "+dogcost)
    }
    else{
        clickpower+=50
        mycoins-=dogcost
        coinsp.textContent="Coins: "+mycoins
        alert("you bought pet cat youre clickpower is now "+clickpower)
    }
}
cat.addEventListener(`click`, ()=>{
       if(mycoins<catcost){
        alert("not enough money need: "+catcost)
    }
    else{
        clickpower+=150
            mycoins-=catcost
        coinsp.textContent="Coins: "+mycoins
        alert("you bought pet cat youre clickpower is now "+clickpower)
    } 
})
lion.addEventListener(`click`, ()=>{
       if(mycoins<lioncost){
        alert("not enough money need: "+lioncost)
    }
    else{
        clickpower+=500
            mycoins-=lioncost
        coinsp.textContent="Coins: "+mycoins
        alert("you bought pet cat youre clickpower is now "+clickpower)
    } 
})
let pet1="cat";
let pet2="dog";
let pet3="lion";
//shop end
//for coins start
let coinclick=document.getElementById("click");
let coinsp=document.getElementById("coinsp")
let mycoins=0
let clickpower=1
//variables
let reached1=false;
let reached50=false;
let reached100=false;
let reached1000=false;
let reached10000=false;
let reached100000=false;
let reached10000000000=false;
coinclick.onclick=function(){
    mycoins+=clickpower;
    coinsp.textContent="Coins: "+mycoins
    if(mycoins==10000000000 && !reached10000000000){
         reached10000000000=true;
        announcebox.style.top="200px"
        announcebox.textContent="heyy you reached 10000000000; And got free owner rank"
           danger.currentTime=0;
              document.getElementById("namep").textContent="Name: "+me.mename;
   document.getElementById("lp").textContent="Last name: "+me.lastname;
   document.getElementById("agep").textContent="Age: "+me.age;
   document.getElementById("rankp").textContent="Rank: "+ranks[0];
    danger.play()
        setTimeout(() => {
              announcebox.style.top="-600px"  
        }, 1300);
    }
   else if(mycoins==1 && !reached1){
        reached1=true;
        announcebox.style.top="200px"
        announcebox.textContent="heyy you reached 1"
           danger.currentTime=0;
    danger.play()
        setTimeout(() => {
              announcebox.style.top="-600px"  
        }, 1300);
    }
    else if(mycoins==50 && !reached50){
        reached50=true;
           danger.currentTime=0;
    danger.play()
           announcebox.style.top="200px"
        announcebox.textContent="heyy you reached 50"
        setTimeout(() => {
              announcebox.style.top="-600px"  
        }, 1300);
    }
    else if(mycoins==100 && !reached100){
                reached100=true;
                   danger.currentTime=0;
    danger.play()
        announcebox.style.top="200px"
        announcebox.textContent="heyy you reached 100"
        setTimeout(() => {
              announcebox.style.top="-600px"  
        }, 1300)
    
    }
        else if(mycoins==1000 && !reached1000){
            reached1000=true;
               danger.currentTime=0;
    danger.play()
             announcebox.style.top="200px"
        announcebox.textContent="heyy you reached 1000"
        setTimeout(() => {
              announcebox.style.top="-600px"  
        }, 1300)
        }
                else if(mycoins==10000 && !reached10000){
            reached10000=true;
               danger.currentTime=0;
             danger.play()
             announcebox.style.top="200px"
        announcebox.textContent="heyy you reached 10000"
        setTimeout(() => {
              announcebox.style.top="-600px"  
        }, 1300)
        }
    else if(mycoins==100000 && !reached100000){
  reached10000=true;
     danger.currentTime=0;
    danger.play()
    announcebox.style.top="200px"
      announcebox.textContent="heyy you reached 100000"
      setTimeout(() => {
             announcebox.style.top="-600px"  
      }, 1300)
        }
}
//for coins end
function setcoins(ammount1){
    mycoins=Number(ammount1);
    coinsp.textContent="Coins: "+mycoins

}
function addcoins(ammount2){
    mycoins+=Number(ammount2);
    coinsp.textContent="Coins: "+mycoins

}
function setpower(powam1){
    clickpower=Number(powam1)
    alert("clickpower set to "+clickpower)
}
function addpower(powam1){
    clickpower+=Number(powam1)
    alert("clickpower set to "+clickpower)

}
let showpower=document.getElementById("Showpower")
showpower.addEventListener(`click`, function(){
    alert("youre click power is now "+clickpower)
})
function announce(text){
     announcebox.style.top="200px"
    announcebox.textContent=text

    setTimeout(() => {
          announcebox.style.top="-600px"  
    }, 1800);
}
// alert("Welcome to the Coin clicker: you have a chance to get owner rank lets se youre luck")
function ayyo(){
let randomindex=Math.floor(Math.random()*ranks.length)
let randomrank=ranks[randomindex]
document.getElementById("rankp").textContent="Rank: "+  randomrank 
announce("Ayy you got the "+randomrank+" Rank")
}
let closeprof=document.getElementById("close")
let profbtn=document.getElementById("Profbtn")
let profile=document.getElementById("ownerprof")
profbtn.onclick =()=>{
profile.style.opacity="1"
}
closeprof.onclick= ()=>{
   profile.style.opacity="0"
 
}
ayyo()
let sqvsound = new Audio(`./seyo.mp4`);
let btnsqv = document.getElementById("sqvbtn");
let btnsqv2 = document.getElementById("sqvbtn2");
let btnsqv3 = document.getElementById("sqvbtn3");
let btnsqv4 = document.getElementById("sqvbtn4");
let btnsqv5 = document.getElementById("sqvbtn5");
let btnsqv6 = document.getElementById("sqvbtn6");
let btnsqv7 = document.getElementById("sqvbtn7");
let btnsqv8 = document.getElementById("sqvbtn8");

btnsqv.addEventListener("click", function() {
    sqvsound.currentTime = 0;
    sqvsound.play();
});
btnsqv2.addEventListener("click", function() {
    sqvsound.currentTime = 0;
    sqvsound.play();
});
btnsqv3.addEventListener("click", function() {
    sqvsound.currentTime = 0;
    sqvsound.play();
});
btnsqv4.addEventListener("click", function() {
    sqvsound.currentTime = 0;
    sqvsound.play();
});
btnsqv5.addEventListener("click", function() {
    sqvsound.currentTime = 0;
    sqvsound.play();
});
btnsqv6.addEventListener("click", function() {
    sqvsound.currentTime = 0;
    sqvsound.play();
});
btnsqv7.addEventListener("click", function() {
    sqvsound.currentTime = 0;
    sqvsound.play();
});
btnsqv8.addEventListener("click", function() {
    sqvsound.currentTime = 0;
    sqvsound.play();
});
alert("Welcome to the coin clicker")
