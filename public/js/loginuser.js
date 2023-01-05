
async function loginForm(e){
    e.preventDefault();
    
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const res = await fetch('/api/user/login', {
        method: 'POST', 
        body: JSON.stringify({
            email, 
            password
        }),
        headers: { 'Content-Type': 'application/json'}
    })

    if(res.ok){
        document.location.replace('/home')
    }else{
        alert('Unable to login!')
    }
}

document.getElementById('login-form').addEventListener('submit', loginForm)