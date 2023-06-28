window.addEventListener(`DOMContentLoaded`, (e)=>{
    $.ajax({
        type:`GET`,
        url:`http://localhost:3000/api/getAllAdmin`,
        headers: { Authorization: `token ${JSON.parse(localStorage.SESSION_TRANSPORT).body.token}`}
    })
    .done(response=>{
        console.log(response)
    })
})