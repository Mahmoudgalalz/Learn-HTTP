const input=document.getElementById("input")
const btn=document.getElementById('btn');


function search(){
    const code=input.value;
    const data=getData(code);
    const img=`https://http.cat/${code}`
    putData(img,data);
}

function getData(code){
    fetch(`../public/Http-data/${code}.json`).then(response => {
        return response.json();
      }).then(data => {
        return data;
      }).catch(err => {
        fetch(`../public/Http-data/default.json`).then(response => {
            return response.json();
          }).then(data => {
            return data;
        });
      });
}
function putData(img,data){
    document.getElementById("img").src=img;
}
btn.addEventListener('click',search);