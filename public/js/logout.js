
async function logOut(e){
    e.preventDefault();

    const res = await fetch('/api/user/logout', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json'}
    })
    

    if(res.ok){
        document.location.replace('/')
    }else{
        alert('Unable to logout!')
    }
}

document.getElementById('logout').addEventListener('click', logOut);