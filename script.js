let division=document.createElement("div");
division.setAttribute("class","container-fluid");

let navbar=document.createElement("nav");
navbar.setAttribute("class","navbar navbar-light bg-info");

let image=document.createElement("img");
image.setAttribute("class","img-thumbnail");
image.setAttribute("id","isro")
image.setAttribute("src","https://ih1.redbubble.net/image.833725273.8310/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg")
image.setAttribute("alt"," isro indian rocket tee")
navbar.append(image);

let h1tag=document.createElement("h1");
h1tag.setAttribute("id","head")
h1tag.innerHTML="Indian Space Research Oraganistation"
navbar.append(h1tag);
division.append(navbar);

let division1=document.createElement("div");

let tab =document.createElement("table");
tab.setAttribute("class","table table-striped table-dark");
tab.innerHTML=`<thead>
                  <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Country Name</th>
                      <th scope="col">Launch Date</th>
                      <th scope="col">Mass</th>
                      <th scope="col">Launcher</th>
                  </tr>
               </thead>`
const tbody=document.createElement("tbody")
tbody.setAttribute("class","tbod");
tab.append(tbody);
division1.append(tab);
division.append(division1);
document.body.append(division);

let isro=new Promise((resolve, reject) => {
    let request=new XMLHttpRequest();
    request.open("GET","https://isro.vercel.app/api/customer_satellites")
    request.send();
    request.onload=function(){
        if(request.status==200){
        let data= JSON.parse(request.response);
        resolve(data);
        }else{
            reject("some input error");
        }
    }
}) 
isro.then((res)=>{console.log(res)
    res.customer_satellites.map((ele)=>{ 
    tbody.innerHTML+=`<tr>
                        <td>${ele.id}</td>
                        <td>${ele.country}</td>
                        <td>${ele.launch_date}</td>
                        <td>${ele.mass}</td>
                        <td>${ele.launcher}</td>
                        </tr>`
                    })
   
}).catch((rej)=>{console.log(rej)})