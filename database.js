var student=[
    row1={
        "name":"Vivek",
        "age":21,
        "roll":"22mh1a05f3"
    },
    row2={
        "name":"Rajesh",
        "age":25,
        "roll":"22mh1a05k4"
    },
    row3={
        "name":"Jitendra",
        "age":21,
        "roll":"22mh1a05h7"
    }
    ,row4={
        "name":"Hritik",
        "age":22,
        "roll":"22mh1a05h4"
    },
    row5={
        "name":"N R Yadav",
        "age":23,
        "roll":"22a91a05e7"
    },
    row6={
        "name":"Srinivas",
        "age":22,
        "roll":"22mh1a05k2"
    }
]

function Add(){
 let table= document.getElementsByClassName("tble")[0];
    if(!document.getElementsByClassName("tble")[0]){
        data()
    }
    else{
        if(document.getElementsByClassName("tble")[0]){
            var a=prompt("enter the name")
            var b=prompt("enter the age")
            var c=prompt("enter the roll")
          
              row7={"name":a,"age":b,"roll":c}
              student.push(row7)
              let tble= document.getElementsByClassName("tble")[0];
              let n=student.length
               let last_element=student[n-1];

            //    console.log(last_element.name);
               var tables=document.getElementsByTagName("table")[0];
              var tr7=document.createElement("tr")
                tables.appendChild(tr7)
                var td1=document.createElement("td")
                tr7.appendChild(td1)
                var td2=document.createElement("td")
                tr7.appendChild(td2)
                var td3=document.createElement("td")
                tr7.appendChild(td3)
                var td4=document.createElement("td")
                tr7.appendChild(td4)
                var td5=document.createElement("td")
                tr7.appendChild(td5)
                var btn1=document.createElement("button")
                td4.appendChild(btn1)
                let no=`${student.length}`;
                // console.log(no);
                btn1.setAttribute("id",`btns${no}`)
       
                var btn2=document.createElement("button")
                btn2.classList.add("del")
                td5.appendChild(btn2)
                td1.innerHTML=last_element.name
                td2.innerHTML=last_element.age
                td3.innerHTML=last_element.roll
                btn1.innerHTML="Update"
                btn2.innerHTML="Delete"

                //deleting the row
                btn2.addEventListener('click',(e) => {
                  e.target.closest("tr").remove()
                }
                )

                var len=document.getElementsByTagName("tr").length;
                // console.log(len)
                let btns=document.getElementById(`btns${no}`)
                        btns.addEventListener('click',() => {
                        var tr1=document.getElementById(`${len}`)
                        console.log(tr1)
                        var a=prompt("enter the name")
                        var b=prompt("enter the age")
                        var c=prompt("enter the roll")
                        tr1.cells[0].innerHTML=a;
                         tr1.cells[1].innerHTML=b;
                        tr1.cells[2].innerHTML=c;
                        // check=true;
                        
                        }
                        )
                
                var trow=Array.from(document.getElementsByTagName('tr'))
                for (let i = 0; i < trow.length; i++) {
                    trow[i].setAttribute("id",i+1);
                }

          
              }
    }
}
function data(){
var Body=document.getElementsByTagName("body")[0]
var tables=document.createElement("table")
tables.setAttribute("data-aos","zoom-in")
tables.setAttribute("data-aos-duration","1000")
tables.classList.add("tble")

Body.appendChild(tables)
var tr=document.createElement("tr")
tables.appendChild(tr)
var th1=document.createElement("th")
tr.appendChild(th1)
var th2=document.createElement("th")
tr.appendChild(th2)
var th3=document.createElement("th")
tr.appendChild(th3)
var th4=document.createElement("th")
tr.appendChild(th4)
var th5=document.createElement("th")
tr.appendChild(th5)
th1.innerHTML="Name"
th2.innerHTML="Age"
th3.innerHTML="Roll"
th4.innerHTML="Update Operation"
th5.innerHTML="Delete Operation"

var tr1=document.createElement("tr")
tables.appendChild(tr1)
var td1=document.createElement("td")
tr1.appendChild(td1)
var td2=document.createElement("td")
tr1.appendChild(td2)
var td3=document.createElement("td")
tr1.appendChild(td3)

var td4=document.createElement("td");
tr1.appendChild(td4)
var btn1=document.createElement("button")
td4.appendChild(btn1)
btn1.setAttribute("id","btns1")

var td5=document.createElement("td");
tr1.appendChild(td5)
var btn2=document.createElement("button")
btn2.classList.add("del")
var last_child_tr=document.getElementsByTagName("tr")[1];
last_child_tr.lastChild.appendChild(btn2);
// td5.appendChild("btn2")
td1.innerHTML=row1.name;
td2.innerHTML=row1.age;
td3.innerHTML=row1.roll;
btn1.innerHTML="Update"
btn2.innerHTML="Delete"

let btns1=document.getElementById("btns1")
btns1.addEventListener('click',() => {
    var tr1=document.getElementById("2")
    var a=prompt("enter the name")
    var b=prompt("enter the age")
    var c=prompt("enter the roll")
    tr1.cells[0].innerHTML=a;
    tr1.cells[1].innerHTML=b;
    tr1.cells[2].innerHTML=c;
  }
  )
btn2.addEventListener('click',(e) => {
  e.target.closest("tr").remove()
}
)

var tr2=document.createElement("tr")
tables.appendChild(tr2)
var td1=document.createElement("td")
tr2.appendChild(td1)
var td2=document.createElement("td")
tr2.appendChild(td2)
var td3=document.createElement("td")
tr2.appendChild(td3)
var td4=document.createElement("td");
tr2.appendChild(td4)
var td5=document.createElement("td");
tr2.appendChild(td5)
var btn1=document.createElement("button")
td4.appendChild(btn1)
btn1.setAttribute("id","btns2")

var btn2=document.createElement("button")
btn2.classList.add("del")
var last_child_tr=document.getElementsByTagName("tr")[2];
last_child_tr.lastChild.appendChild(btn2);
td1.innerHTML=row2.name;
td2.innerHTML=row2.age;
td3.innerHTML=row2.roll
btn1.innerHTML="Update"
btn2.innerHTML="Delete"

btn2.addEventListener('click',(e) => {
  e.target.closest("tr").remove()
}
)

let btns2=document.getElementById("btns2")
btns2.addEventListener('click',() => {
  var tr3=document.getElementById("3")
  var a=prompt("enter the name")
  var b=prompt("enter the age")
  var c=prompt("enter the roll")
  tr3.cells[0].innerHTML=a;
  tr3.cells[1].innerHTML=b;
  tr3.cells[2].innerHTML=c;
}
)

var tr3=document.createElement("tr")
tables.appendChild(tr3)
var td1=document.createElement("td")
tr3.appendChild(td1)
var td2=document.createElement("td")
tr3.appendChild(td2)
var td3=document.createElement("td")
tr3.appendChild(td3)

var td4=document.createElement("td");
tr3.appendChild(td4)
var td5=document.createElement("td");
tr3.appendChild(td5)
var btn1=document.createElement("button")
td4.appendChild(btn1)
btn1.setAttribute("id","btns3")

var btn2=document.createElement("button")
btn2.classList.add("del")
var last_child_tr=document.getElementsByTagName("tr")[3];
last_child_tr.lastChild.appendChild(btn2);
td1.innerHTML=row3.name;
td2.innerHTML=row3.age;
td3.innerHTML=row3.roll;
btn1.innerHTML="Update"
btn2.innerHTML="Delete"

btn2.addEventListener('click',(e) => {
  e.target.closest("tr").remove()
}
)

let btns3=document.getElementById("btns3")
btns3.addEventListener('click',() => {
  var tr=document.getElementById("4")
  var a=prompt("enter the name")
  var b=prompt("enter the age")
  var c=prompt("enter the roll")
  tr.cells[0].innerHTML=a;
  tr.cells[1].innerHTML=b;
  tr.cells[2].innerHTML=c;
}
)

var tr4=document.createElement("tr")
tables.appendChild(tr4)
var td1=document.createElement("td")
tr4.appendChild(td1)
var td2=document.createElement("td")
tr4.appendChild(td2)
var td3=document.createElement("td")
tr4.appendChild(td3)
var td4=document.createElement("td");
tr4.appendChild(td4)
var td5=document.createElement("td");
tr4.appendChild(td5)
var btn1=document.createElement("button")
td4.appendChild(btn1)
btn1.setAttribute("id","btns4")

var btn2=document.createElement("button")
btn2.classList.add("del")
var last_child_tr=document.getElementsByTagName("tr")[4];
last_child_tr.lastChild.appendChild(btn2);
td1.innerHTML=row4.name;
td2.innerHTML=row4.age;
td3.innerHTML=row4.roll;
btn1.innerHTML="Update"
btn2.innerHTML="Delete"

btn2.addEventListener('click',(e) => {
  e.target.closest("tr").remove()
}
)

let btns4=document.getElementById("btns4")
btns4.addEventListener('click',() => {
  var tr1=document.getElementById("5")
  var a=prompt("enter the name")
  var b=prompt("enter the age")
  var c=prompt("enter the roll")
  tr1.cells[0].innerHTML=a;
  tr1.cells[1].innerHTML=b;
  tr1.cells[2].innerHTML=c;
}
)


var tr5=document.createElement("tr")
tables.appendChild(tr5)
var td1=document.createElement("td")
tr5.appendChild(td1)
var td2=document.createElement("td")
tr5.appendChild(td2)
var td3=document.createElement("td")
tr5.appendChild(td3)
var td4=document.createElement("td");
tr5.appendChild(td4)
var td5=document.createElement("td");
tr5.appendChild(td5)
var btn1=document.createElement("button")
td4.appendChild(btn1)
btn1.setAttribute("id","btns5")

var btn2=document.createElement("button")
btn2.classList.add("del")
var last_child_tr=document.getElementsByTagName("tr")[5];
last_child_tr.lastChild.appendChild(btn2);
td1.innerHTML=row5.name;
td2.innerHTML=row5.age;
td3.innerHTML=row5.roll;
btn1.innerHTML="Update"
btn2.innerHTML="Delete"

btn2.addEventListener('click',(e) => {
  e.target.closest("tr").remove()
}
)

let btns5=document.getElementById("btns5")
btns5.addEventListener('click',() => {
  var tr1=document.getElementById("6")
  var a=prompt("enter the name")
  var b=prompt("enter the age")
  var c=prompt("enter the roll")
  tr1.cells[0].innerHTML=a;
  tr1.cells[1].innerHTML=b;
  tr1.cells[2].innerHTML=c;
}
)


var tr6=document.createElement("tr")
tables.appendChild(tr6)
var td1=document.createElement("td")
tr6.appendChild(td1)
var td2=document.createElement("td")
tr6.appendChild(td2)
var td3=document.createElement("td")
tr6.appendChild(td3)
var td4=document.createElement("td");
tr6.appendChild(td4)
var td5=document.createElement("td");
tr6.appendChild(td5)
var btn1=document.createElement("button")
td4.appendChild(btn1)
btn1.setAttribute("id","btns6")

var btn2=document.createElement("button")
btn2.classList.add("del")
var last_child_tr=document.getElementsByTagName("tr")[6];
last_child_tr.lastChild.appendChild(btn2);
td1.innerHTML=row6.name;
td2.innerHTML=row6.age;
td3.innerHTML=row6.roll;
btn1.innerHTML="Update"
btn2.innerHTML="Delete"

btn2.addEventListener('click',(e) => {
  e.target.closest("tr").remove()
}
)

let btns6=document.getElementById("btns6")
btns6.addEventListener('click',() => {
  var tr1=document.getElementById("7")
  var a=prompt("enter the name")
  var b=prompt("enter the age")
  var c=prompt("enter the roll")
  tr1.cells[0].innerHTML=a;
  tr1.cells[1].innerHTML=b;
  tr1.cells[2].innerHTML=c;
}
)

var trow=Array.from(document.getElementsByTagName('tr'))
for (let i = 0; i < trow.length; i++) {
    trow[i].setAttribute("id",i+1);
}
let tble=document.getElementsByTagName("table")[0]
let btn=document.getElementsByClassName("button")[0]
btn.setAttribute("data-aos","zoom-in")
btn.setAttribute("data-aos-duration","1000")
tble.insertAdjacentElement("afterend",btn)
let h2=document.createElement("h1")
h2.innerHTML="Local Database Using Javascript"
tble.insertAdjacentElement("beforebegin",h2)
h2.setAttribute("data-aos","zoom-in")
h2.setAttribute("data-aos-duration","2000")

}