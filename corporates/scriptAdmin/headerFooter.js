window.addEventListener(`DOMContentLoaded`, (e)=>{
    const production_api_url = 'https://transport-severvice.onrender.com/api/';
    const development_api_url = 'http://localhost:3000/api/';
    function headerFooter(url){
        try {
            fetch(url)
            .then(res=>res.json())
            .then(succes=>{
                const data=succes.data
                const localisation=document.getElementById('localisation');
                const phoneAdress=document.getElementById('phoneAdress');
                const emailAdress=document.getElementById('emailAdress');
                const UrgencePhone=document.getElementById('UrgencePhone');
                const copyright=document.getElementById('copyright');
                const phtoUser=document.getElementById('phto-user');
                const adminName= document.querySelector('.admin-name');

                if(data.length>0){
                    const compagie=data[0];
                    if(localisation){
                        localisation.textContent="Abidjan (Côte d'Ivoire)";
                        phoneAdress.textContent='(+225) '+compagie.telephone;
                        emailAdress.textContent=compagie.email;
                        UrgencePhone.textContent='(+225) '+compagie.telephone;
                    }
                    copyright.innerHTML=compagie.copyright;
                    
                    let imgPath= location.href.includes('views/index.html')? '../logics/' : './../../logics/';
                    document.querySelectorAll('img[logo=my-logo]').forEach(item=>item.src=imgPath+compagie.photo);
                    if(localStorage.SESSION_TRANSPORT && phtoUser){
                        phtoUser.src = imgPath+JSON.parse(localStorage.SESSION_TRANSPORT).body.user.photo;
                    }
                    if(localStorage.SESSION_TRANSPORT && adminName){
                        adminName.textContent=JSON.parse(localStorage.SESSION_TRANSPORT).body.user.nomPrenom.split(' ').slice(0, 2);
                    }
                    
                }
                
            })
        } catch (error) {
            console.log('error', error)
        }
    }
    headerFooter(production_api_url+'getAllCompagny')
})