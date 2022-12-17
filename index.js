const input=document.getElementById("input")
const btn=document.getElementById('btn');
const text=document.getElementById('text')

function search(){
    const code=input.value;
    getData(code);
    const img=`https://http.cat/${code}`
    putData(img);
}

function getData(code){

    fetch(`../public/Http-data/${code}.json`).then(response => {
        return response.json();
      }).then(data => {
        textPut(data.Content)
      }).catch(err => {
        fetch(`../public/Http-data/default.json`).then(response => {
            return response.json();
          }).then(data => {
            textPut(data.Content)
        });
      });

}
function putData(img){
    document.getElementById("img").src=img;
    
}
function textPut(data){
    text.innerHTML=data;
}
btn.addEventListener('click',search);