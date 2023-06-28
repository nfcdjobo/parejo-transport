window.addEventListener(`DOMContentLoaded`, (e)=>{
    const formulure=document.getElementById('formulaireAdd');
    formulure.addEventListener('submit', event=>{
        event.preventDefault();
        console.log(event.target)
        const formData=new FormData(event.target);
        const data=new URLSearchParams(formData);
        fetch('http://localhost:3000/api/sendDemande', {
            method:'POST',
            body:data
        })
        .then(res=>res.json())
        .then(succes=>{
            console.log(succes)
        })
        .catch(error=>{
            console.log(error)
        })
    })
})