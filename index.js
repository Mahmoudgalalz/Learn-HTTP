const input=document.getElementById("input")
const btn=document.getElementById('btn');
const text=document.getElementById('text')
const kindBtn=document.getElementById('kindBtn');
let kind="cat";


function ChangeTheHTTPAnimal(){
    if(kindBtn.textContent!="Cats")
    {
        kindBtn.textContent="Cats"
        kind="cat"
    }
    else{
        kindBtn.textContent="Dog"
        kind="dog"
    }
}

function search(){
    const code=input.value;
    getData(code);
    console.log(kind);
    const img=`https://http.${kind}/${code}.jpg`
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

kindBtn.addEventListener('click',ChangeTheHTTPAnimal)
btn.addEventListener('click',search);