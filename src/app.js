const comentarios = [
    {
        "id":1,
        "comment" : "M'agradat molt. Un lloc molt agradable per passar el dia.",
        "user": "Gerard"

    },
    {
        "id":2,
        "comment" : "L'interior de l'esglèsia es molt maco",
        "user": "Cristina"

    },
    {
        "id":3,
        "comment" : "Vaig estar l'altre dia amb els meus pares. Molt recomanable.",
        "user": "Maria"

    },
    {
        "id":4,
        "comment" : "La porxada és un molt bon lloc a la festa major.",
        "user": "Eric"

    }
];

const commentHTML= document.querySelector(".comments");
const form = document.querySelector(".form");

const nameInput=document.querySelector(".inputName").value;
const textInput=document.querySelector(".commentText").value;

var id=0;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    var temporaryName = document.querySelector(".inputName").value;
    var temporaryText = document.querySelector(".commentText").value;
    addComment(temporaryText, temporaryName);
    getComments();
})

const addComment = (comment, name ) =>{
    localStorage.setItem("id",comentarios.length);
    comentarios.push({
        "id":comentarios.length+1,
        "comment": comment,
        "user": name
    })
};

const getComments=()=>{
    id=localStorage.getItem("id")
    comentarios.forEach((com)=>{
        if(com.id > id) commentHTML.innerHTML+=`<div class="comment"><p class="comment-name">${com.user}</p><p>${com.comment}</p> </div>`;
    });
};

localStorage.clear();

if(localStorage.clear) {
    getComments();
}
