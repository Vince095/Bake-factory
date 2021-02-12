//                    ©Vincent
window.onload=()=>{
setTimeout (()=>{
       let nav = document.querySelector('.nav_bar')
    if(nav.classList.toggle('active')){
        nav.style.display='none'
}
},20);

setTimeout(() => {
    let itab = document.getElementById("container");
    let nav = document.querySelector('.nav_bar')
        nav.style.display='flex'


    itab.remove();
} , 2500);

//object
const obj = (()=>{
    let bake =[{
        name:'Brownie',
        price: '$8.99',
        url: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?cs=srgb&dl=pexels-elli-1854652.jpg&fm=jpg'
    },
    {
        name: 'Green valvet',
        price: '$16.50',    url:'https://images.pexels.com/photos/4396304/pexels-photo-4396304.jpeg?cs=srgb&dl=pexels-ph%E1%BA%A1m-th%C3%A0nh-%C4%91%E1%BA%A1t-4396304.jpg&fm=jpg'
    },
    {
        name: 'Chocolate cake',
        price: '$10.50',
        url: 'https://images.pexels.com/photos/4109997/pexels-photo-4109997.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4109997.jpg&fm=jpg'
    },
    {
        name:'Blackout cake',
        price: '$12.40',
        url: 'https://images.pexels.com/photos/3851042/pexels-photo-3851042.jpeg?cs=srgb&dl=pexels-ready-made-3851042.jpg&fm=jpg'
    },
    {
        name: 'cup cake',
        price: '$2.80' ,
        url:  'https://images.pexels.com/photos/8882/love-heart-purple-dessert.jpg?cs=srgb&dl=pexels-snapwire-8882.jpg&fm=jpg'
    },
    {
        name:'Blondie',
        price: '$1.20',
        url : 'https://images.pexels.com/photos/4906519/pexels-photo-4906519.jpeg?cs=srgb&dl=pexels-maria-orlova-4906519.jpg&fm=jpg'
    }];
    let bread = [{
        name: 'croissant',
        price:'$5.50',
        info:'when it comes to our bread we do not compromise and our croissant is a testament to that',
        url:'https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg?cs=srgb&dl=pexels-ivan-j-long-1387070.jpg&fm=jpg'
    },
    {
        name:'plain bun',
        price:'$0.50',
        info:'our plain buns are very soft and fresh ',
        url:'https://images.pexels.com/photos/1118332/pexels-photo-1118332.jpeg?cs=srgb&dl=pexels-buenosia-carol-1118332.jpg&fm=jpg'
    },
    {
        name:'baguette',
        price:'$2.30',
        info:'Our whole wheat baguette is nice and crisp it  will have you bagging for more',
        url:'https://images.pexels.com/photos/1346216/pexels-photo-1346216.jpeg?cs=srgb&dl=pexels-alisha-mishra-1346216.jpg&fm=jpg'
    }]
    let display =[{
        id:'01',
        url:'https://images.pexels.com/photos/227432/pexels-photo-227432.jpeg?cs=srgb&dl=pexels-antonio-quagliata-227432.jpg&fm=jpg'},
        {
        id:'02',
        url:'https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?cs=srgb&dl=pexels-arminas-raudys-808941.jpg&fm=jpg'
    },
    {
        id:'03',
        url:'https://images.pexels.com/photos/1756062/pexels-photo-1756062.jpeg?cs=srgb&dl=pexels-mariana-kurnyk-1756062.jpg&fm=jpg'
    }]
    
    let getFreshBread =[{}];
            const randomValue = Math.floor(Math.random() * bread.length);
            getFreshBread[0] = bread[randomValue];
    let users = [{
        id:1,
        name:'Vincent',
        pic:'https://st.depositphotos.com/1898481/3716/i/950/depositphotos_37166517-stock-photo-unknown.jpg'
    }]
    return{
         bake ,
         bread ,
         getFreshBread,
         users,
         display 
         }
})();
class userLog{
    constructor(userName ,password){
        this.user =user;
        this.password = "";
        this.login =()=>{
            
        }
    }
}

const recommend =((obj )=>{
    let content_con = document.querySelector('.content-con');
    var tapped = false;
    
    for(let i =0; i <obj.bake.length; i++ ){
    content_con.innerHTML+=`<div class="recommend-con">
     <div class="img-con">
          <img src="${obj.bake[i].url}" alt="">
          <i class="bx bxs-cart">BUY</i>
          <p>${obj.bake[i].name}<br> 
            ${obj.bake[i].price}     
          </p>  
          </div>
       </div>  `
    }
    const tap = (()=>{
     let img_con= document.querySelectorAll('.img-con');
        img_con.forEach((item)=>{
            item.addEventListener('touchstart', _=>{
                if(!tapped){
                   // console.log("tapped")
                    tapped =setTimeout (function (){
                        tapped =null
                    },3000);
                 } else{
                    clearTimeout(tapped);
                    tapped =null;
                    item.classList.add('buy');
            
                    setTimeout(()=>{
                        item.classList.remove('buy')
                    }, 6000);
                }
            })
        })
   })();
})(obj);

const fresh =((obj)=>{
     let freshBaked = document.querySelector('.baked-con');
    console.log(obj.getFreshBread[0].name)
 setTimeout (()=>{
     for(let i =0; i <obj.bread.length; i++ ){
    freshBaked.innerHTML+=`<h4>${obj.getFreshBread[i].info}</h4>
    <div class="recommend-con">
     <div class="img-con">
          <img src="${obj.getFreshBread[i].url}" alt="">
             <i class="bx bxs-cart">BUY</i>
          <h5 class="new">Oven fresh</h5>
          <p>${obj.getFreshBread[i].name}<br> 
            ${obj.getFreshBread[i].price}     
          </p>  
          </div>
       </div>  `
       }
       tap();
 },3000);
    
})(obj);

const user= ((obj)=>{
    let usrbtn = document.getElementById('user');
    let homebtn = document.getElementById('home');
    let usrCon = document.createElement('div');
    let proCon = document.createElement('div');
    
    proCon.className= 'profile-con'
    for(let i =0; i<obj.users.length ;i++){
    proCon.innerHTML=`
        <div id="back" class="bx bx-left-arrow-alt bx-md"></div><br>
        <div id="avater" class="bx bx-md"><img src="${obj.users[i].pic}"><br>${obj.users[i].name}<div><br>
        <div class="info">
            <p>Notifications</p>
                <div class="con-card">
                    Orders made:
                </div>
        </div>
     `
     }
    usrCon.appendChild(proCon);
    usrCon.className = 'user-con'
    document.body.appendChild(usrCon);
    usrbtn.addEventListener('click',( )=>{
        
        
       // console.log("clicked")
        usrCon.style.display="flex"
        usrCon.classList.add('show')
        
    });    
    homebtn.addEventListener('click',()=>{
        usrCon.style.display="none"   
                
        })
    let back = document.getElementById("back");
    back.addEventListener('click',()=>{
        usrCon.style.display="none"    
        
        })
        
    
})(obj);

var count =0;
const store = ((obj)=>{
    let storebtn = document.getElementById('store');
    let storeCon = document.createElement('div');
    let layout = document.createElement('div')
    storeCon.className="store-con"
    layout.className ="layout"
    
    
    storeCon.append(layout);
    document.body.append(storeCon);

   for(let i =0; i <obj.bake.length; i++){
       if(i<1){
           layout.innerHTML =`<div id="back2" class="bx
   bx-left-arrow-alt bx-md"></div><br>`}
   
    storeCon.innerHTML +=`
     <div class="con-cards">
         <div class="item-con">
          <img src="${obj.bake[i].url}" alt="">
              <i id="star" class="bx bxs-star bx-star">
              </i>
               <i id="star" class="bx bxs-star bx-star"></i>
                <i class="bx bxs-star bx-star"></i>
                 <i class="bx bxs-star bx-star"></i>
                  <i class="bx bxs-star bx-star"></i>
                    <button class="btn">buy</button>
          <p>${obj.bake[i].name}<br> 
            ${obj.bake[i].price}     
          </p>  
      
          </div>
       </div>
       
        
        `
        
    }
    for(let i =0; i<obj.bread.length;i++){
         storeCon.innerHTML +=`
     <div class="con-cards">
         </div>
              <div class="item-con">
                   <img src="${obj.bread[i].url}" alt="">
                       <i id="star" class="bx bxs-star bx-star"></i>
            
               <i id="star" class="bx bx-star bxs-star"></i>
                <i id="star" class="bx bx-star bxs-star"></i>
                 <i id="star" class="bx bx-star bxs-star tada"></i>
                 <i id="star" class="bx bx-star bxs-star"></i>
               <button class="btn">buy</button>
          <p>${obj.bread[i].name}<br> 
            ${obj.bread[i].price}     
          </p>  
        
              </div>
     </div>`
    }
  
    setTimeout(()=>{
    storebtn.addEventListener('click',()=>{
        storeCon.style.display="block"
     //   storeCon.classList.remove('bx-star')
    })
      },3000)
    let back = document.getElementById("back2");
    back.addEventListener('click',()=>{
        storeCon.style.display="none"    
        })  
        let star = document.getElementById("star");
        let solid = document.getElementById("solid");
        let icon = document.querySelectorAll('.bxs-star')
      
     icon.forEach((star)=>{
     
        star.addEventListener('touchstart',evt=>{
            star.classList.toggle('bxs-star')
            star.style.visibility="visible"
            //console.log("click")
        })  
 })
})(obj);

//buy activity
const buy =((obj)=>{
    let buyBtn = document.querySelectorAll('.btn');
    let buyCon = document.createElement('div');
    
    buyCon.className = "buy-con"
    document.body.append(buyCon)
    
  const renderView =index=>{
    buyCon.innerHTML =`<div id="back3" class="bx
   bx-left-arrow-alt bx-md"></div><br>
       <div class="item-pic">
           <img src="${obj.bake[index-1].url}" alt="">
           
       </div>
        <p>
           ${obj.bake[index-1].name}
           <span>
            ${obj.bake[index-1].price}</span>
       </p>
      
       <div class="item-bar">
           <div class="des">
               Description
           </div>
           <div class="buy-act">
               Buy now
           </div>
       </div>
       
   `}
        
    
        buyBtn.forEach(btn=>{
               let clicked = false ;
               let ids = obj.bake.map(el=>el.name)
               let btnNo =ids.indexOf(obj.bake[count].name);
               
           btn.addEventListener('click',()=>{
                if(!clicked && count< obj.bake.length){
                    buyCon.style.display="flex";
                    clicked = null;
                    count++;
                    renderView(count);  
                    
               let back =document.getElementById("back3");
                    back.addEventListener('click',()=>{
                       buyCon.style.display="none" 
                         })
                   } else{
                          count = btnNo;
                         count++;
                }
                console.log('clicked',count,btnNo);
                 
        
        })
    
  })


})(obj);



const slideDisplay =((obj)=>{
    let slide = document.querySelector('.img-slider')
    let slideIndex = 1;    
        
         setInterval (()=>{
             if(slideIndex > obj.display.length){
            slideIndex = 1;
            }
            if(slideIndex < 1){slideIndex = obj.display.length }
            
            slide.innerHTML =`
                <img src="${obj.display[slideIndex-1].url}" alt="">
         `
        
            // console.log(obj.display[slideIndex-1].id)
             slideIndex ++;
         },5000)
    
})(obj);

const handleSearch = ((obj)=>{
    let input =document.getElementById("myInput");
    let src_btn = document.getElementById("srcBtn")
    
    let srcRes= document.querySelector('.result-con');
    let li = srcRes.getElementsByTagName('li');
   
    
    for(let i =0; i<obj.bake.length; i++){
         let textValue = obj.bake[0].name;
   
   //General display      
    if(textValue.toUpperCase().indexOf(input.value.toUpperCase())>-1 ){
            srcRes.innerHTML +=`<ul>
              <li> ${obj.bake[i].name.toUpperCase()}                    <span>${obj.bake[i].price}</span></li>
                  </ul>`
                  //console.log(obj.bake[i].name.toUpperCase());
       
  }
         
      }
        input.addEventListener('click',()=>{
                srcRes.style.display="block"
        })
        //Onclick search icon
        src_btn.addEventListener('click',evt=>{
            const lookUp = obj.bake.map(el =>el.name.toUpperCase()) || obj.bread.map(el=>el.name.toUpperCase());
            if(lookUp.includes(input.value.toUpperCase())){
               let num = lookUp.indexOf(input.value.toUpperCase());
               
               srcRes.innerHTML =`<i id="cancel" class="bx bx-x"></i>
               <ul>
              <li> ${obj.bake[num].name.toUpperCase()}              <span>${obj.bake[num].price}</span></li>
                  </ul>`
                srcRes.style.display="block"
            
                console.log(input.value);
            }else {
                  setTimeout (()=>{
            srcRes.style.display="none";
        
                  srcRes.innerHTML = `<ul><li>no data</li> </ul>`
        },2500)
            }
              //  console.log("no match")
            
        })
    
     let cancel= document.getElementById("cancel");
    cancel.addEventListener('click',()=>{
       setTimeout (()=>{
            srcRes.style.height=0;
            srcRes.style.display="none";
             console.log("cancel")
        },250)
                
   })
    
        
    
})(obj);



}







