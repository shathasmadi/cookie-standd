'use stricts';
let objectOfAll=[];
function city(name,minimum,maximum,avgC){
  this.cityName=name;
  this.minCust=minimum;
  this.maxCust=maximum;
  this.avgCookies=avgC;
  this.avgCustPerHr=[];
  this.cookPerEachHr=[];
  objectOfAll.push(this);
}

let seattle = new city('seattle',23,65,6.3);
let tokyo = new city('tokyo',3,24,1.2);
let dubai = new city('dubai',11,38,2.3);
let paris = new city('paris',20,38,2.3);
let lima = new city('lima',11,38,3.7);

city.prototype.rand=function(){
  return Math.random() * (this.maxCust - this.minCust) + this.minCust
};

city.prototype.avgCust=function(){
  for(let i=0;i<14;i++){
    this.avgCustPerHr[i]=this.rand();
    this.cookPerEachHr[i]=Math.ceil(this.avgCustPerHr[i]*this.avgCookies);
  }
};
seattle.avgCust();
tokyo.avgCust();
dubai.avgCust();
paris.avgCust();
lima.avgCust();

let container=document.getElementById('contanet1');
let table=document.createElement('table');
container.appendChild(table);


let tbEl='';
function tableRow(){
  let headerRow=document.createElement('tr');
  table.appendChild(headerRow);
  tbEl=document.createElement('td');
  headerRow.appendChild(tbEl);
  let amPm='';
  let clock=5;

  for(let i =0 ; i<15 ; i++){

    tbEl=document.createElement('td');
    headerRow.appendChild(tbEl);

    if (clock < 12 ){
      clock++;
    }else{
      clock=1;
    }if(clock < 12 && i<6){
      amPm='am';

    }
    if(i>=6){
      amPm='pm';
    }
    if(i<14){
      tbEl.textContent=` ${clock}${amPm}`+' ';
    }else{
      tbEl.textContent=' Daily total';
    }
  }
}
tableRow();


let sTotal=0;
city.prototype.render=function(){
  let tr1=document.createElement('tr');
  table.appendChild(tr1);

  tbEl=document.createElement('td');
  tr1.appendChild(tbEl);
  tbEl.textContent=`${this.cityName}`;

  let total=0;
  for(let i =0 ; i<=this.cookPerEachHr.length ; i++){
    tbEl=document.createElement('td');
    tr1.appendChild(tbEl);
    if(i<14){
      tbEl.textContent=`${this.cookPerEachHr[i]}`;
      total=total+this.cookPerEachHr[i];
      sTotal=sTotal+this.cookPerEachHr[i];
    }else{
      tbEl.textContent=`${total}`;
    }
  }
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();



function tableFoRow(){
  let lastRow=document.createElement('tr');
  table.appendChild(lastRow);
  tbEl=document.createElement('td');
  lastRow.appendChild(tbEl);
  tbEl.textContent='totals';
  let arr1=[];
  let arrStart=0;
  for(let i=0;i<seattle.cookPerEachHr.length;i++){
    for(let j=0; j<objectOfAll.length;j++){
      arrStart+= objectOfAll[j].cookPerEachHr[i];
    }
    arr1.push(arrStart);
    arrStart=0;
  }
  for(let i =0 ; i<=arr1.length ; i++){
    tbEl=document.createElement('td');
    lastRow.appendChild(tbEl);
    if(i<14){
      tbEl.textContent=`${arr1[i]}`;
    }else{
      tbEl.textContent=`${sTotal}`;
    }
  }
}
tableFoRow();













// 'use strict';
// //seattle
// const seatle = {
//   minCust:23,
//   maxCust:65,
//   avgCookie:6.3,
//   avgCustPerHr:[],
//   cookPurchEachHr:[],
//   rand:function () {
//     return Math.random() * (this.maxCust - this.minCust) + this.minCust;
//   },
//   avgCust: function(){
//     for(let i=0 ; i < 14 ; i++){
//       this.avgCustPerHr[i]=this.rand();
//       this.cookPurchEachHr[i]=Math.floor(this.avgCustPerHr[i]*this.avgCookie);
//     }
//   },

// };
// seatle.avgCust();

// let container=document.getElementById('cont');
// let locationName=document.createElement('h1');
// container.appendChild(locationName);
// locationName.textContent='Seattle';


// let unorderedList=document.createElement('ul');
// container.appendChild(unorderedList);

// let amPm='';
// let list='';
// let total=0;
// let clock=5;


// for(let i =0 ; i<15 ; i++){
//   list=document.createElement('li');
//   unorderedList.appendChild(list);
//   if (clock < 12 ){
//     clock++;
//   }else{
//     clock=1;
//   }if(clock < 12 && i<6){
//     amPm='am';
//   }
//   if(i>=6){
//     amPm='pm';
//   }
//   if(i<14){
//     list.textContent=`${clock} ${amPm}: ${seatle.cookPurchEachHr[i]}`;
//     total=total+seatle.cookPurchEachHr[i];
//   }else{
//     list.textContent=`total: ${total}`;
//   }
// }

// //tokyo
// const tokyo = {
//     minCust:3,
//     maxCust:24,
//     avgCookie:1.2,
//     avgCustPerHr:[],
//     cookPurchEachHr:[],
//     rand:function () {
//       return Math.random() * (this.maxCust - this.minCust) + this.minCust;
//     },
//     avgCust: function(){
//       for(let i=0 ; i < 14 ; i++){
//         this.avgCustPerHr[i]=this.rand();
//         this.cookPurchEachHr[i]=Math.floor(this.avgCustPerHr[i]*this.avgCookie);
//       }
//     },
  
//   };
//   tokyo.avgCust();
  
//   container=document.getElementById('cont');
//   locationName=document.createElement('h1');
//   container.appendChild(locationName);
//   locationName.textContent='Tokyo';
  
  
//   unorderedList=document.createElement('ul');
//   container.appendChild(unorderedList);
  
//   amPm='';
//   list='';
//   total=0;
//   clock=5;
  
  
//   for(let i =0 ; i<15 ; i++){
//     list=document.createElement('li');
//     unorderedList.appendChild(list);
//     if (clock < 12 ){
//       clock++;
//     }else{
//       clock=1;
//     }if(clock < 12 && i<6){
//       amPm='am';
//     }
//     if(i>=6){
//       amPm='pm';
//     }
//     if(i<14){
//       list.textContent=`${clock} ${amPm}: ${tokyo.cookPurchEachHr[i]}`;
//       total=total+tokyo.cookPurchEachHr[i];
//     }else{
//       list.textContent=`total: ${total}`;
//     }
//   }

// //Dubai
// const dubai = {
//     minCust:11,
//     maxCust:38,
//     avgCookie:3.7,
//     avgCustPerHr:[],
//     cookPurchEachHr:[],
//     rand:function () {
//       return Math.random() * (this.maxCust - this.minCust) + this.minCust;
//     },
//     avgCust: function(){
//       for(let i=0 ; i < 14 ; i++){
//         this.avgCustPerHr[i]=this.rand();
//         this.cookPurchEachHr[i]=Math.floor(this.avgCustPerHr[i]*this.avgCookie);
//       }
//     },
  
//   };
//   dubai.avgCust();
  
//   container=document.getElementById('cont');
//   locationName=document.createElement('h1');
//   container.appendChild(locationName);
//   locationName.textContent='Dubai';
  
  
//   unorderedList=document.createElement('ul');
//   container.appendChild(unorderedList);
  
//   amPm='';
//   list='';
//   total=0;
//   clock=5;
  
//   for(let i =0 ; i<15 ; i++){
//     list=document.createElement('li');
//     unorderedList.appendChild(list);
//     if (clock < 12 ){
//       clock++;
//     }else{
//       clock=1;
//     }if(clock < 12 && i<6){
//       amPm='am';
//     }
//     if(i>=6){
//       amPm='pm';
//     }
//     if(i<14){
//       list.textContent=`${clock} ${amPm}: ${dubai.cookPurchEachHr[i]}`;
//       total=total+dubai.cookPurchEachHr[i];
//     }else{
//       list.textContent=`total: ${total}`;
//     }
//   }
//   //paris
// const paris = {
//     minCust:20,
//     maxCust:38,
//     avgCookie:2.3,
//     avgCustPerHr:[],
//     cookPurchEachHr:[],
//     rand:function () {
//       return Math.random() * (this.maxCust - this.minCust) + this.minCust;
//     },
//     avgCust: function(){
//       for(let i=0 ; i < 14 ; i++){
//         this.avgCustPerHr[i]=this.rand();
//         this.cookPurchEachHr[i]=Math.floor(this.avgCustPerHr[i]*this.avgCookie);
//       }
//     },
  
//   };
//   paris.avgCust();
  
//   container=document.getElementById('cont');
//   locationName=document.createElement('h1');
//   container.appendChild(locationName);
//   locationName.textContent='Paris';
  
  
//   unorderedList=document.createElement('ul');
//   container.appendChild(unorderedList);
  
//   amPm='';
//   list='';
//   total=0;
//   clock=5;
  
//   for(let i =0 ; i<15 ; i++){
//     list=document.createElement('li');
//     unorderedList.appendChild(list);
//     if (clock < 12 ){
//       clock++;
//     }else{
//       clock=1;
//     }if(clock < 12 && i<6){
//       amPm='am';
//     }
//     if(i>=6){
//       amPm='pm';
//     }
//     if(i<14){
//       list.textContent=`${clock} ${amPm}: ${paris.cookPurchEachHr[i]}`;
//       total=total+paris.cookPurchEachHr[i];
//     }else{
//       list.textContent=`total: ${total}`;
//     }
//   }
  
  
// //lima
// const lima = {
//     minCust:11,
//     maxCust:38,
//     avgCookie:3.7,
//     avgCustPerHr:[],
//     cookPurchEachHr:[],
//     rand:function () {
//       return Math.random() * (this.maxCust - this.minCust) + this.minCust;
//     },
//     avgCust: function(){
//       for(let i=0 ; i < 14 ; i++){
//         this.avgCustPerHr[i]=this.rand();
//         this.cookPurchEachHr[i]=Math.floor(this.avgCustPerHr[i]*this.avgCookie);
//       }
//     },
  
//   };
//   lima.avgCust();
  
//   container=document.getElementById('cont');
//   locationName=document.createElement('h1');
//   container.appendChild(locationName);
//   locationName.textContent='Lima';
  
  
//   unorderedList=document.createElement('ul');
//   container.appendChild(unorderedList);
  
//   amPm='';
//   list='';
//   total=0;
//   clock=5;
  
//   for(let i =0 ; i<15 ; i++){
//     list=document.createElement('li');
//     unorderedList.appendChild(list);
//     if (clock < 12 ){
//       clock++;
//     }else{
//       clock=1;
//     }if(clock < 12 && i<6){
//       amPm='am';
//     }
//     if(i>=6){
//       amPm='pm';
//     }
//     if(i<14){
//       list.textContent=`${clock} ${amPm}: ${lima.cookPurchEachHr[i]}`;
//       total=total+lima.cookPurchEachHr[i];
//     }else{
//       list.textContent=`total: ${total}`;
//     }
//   }
  

