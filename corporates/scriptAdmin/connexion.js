window.addEventListener(`DOMContentLoaded`, (e)=>{
    const production_api_url = 'https://transport-severvice.onrender.com/api/';
    const development_api_url = 'http://localhost:3000/api/';
    const formulure=document.getElementById('formulaireAdd');
    formulure.addEventListener('submit', event=>{
        event.preventDefault();
        console.log(event.target)
        const formData=new FormData(event.target);
        const data=new URLSearchParams(formData);
        fetch(production_api_url+'sendDemande', {
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