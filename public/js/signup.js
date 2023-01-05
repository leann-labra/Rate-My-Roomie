
async function signupForm(e){
    e.preventDefault();

    const name = document.getElementById('name').value
    const password = document.getElementById('password').value
    const email = document.getElementById('email').value

    const res = await fetch('/api/user', {
        method: 'POST', 
        body: JSON.stringify({
            name, 
            password, 
            email,
        }),
        headers: { 'Content-Type': 'application/json'}
    })
    console.log(res);

    if(res.ok){
        document.location.replace('/roommatepage')
    }else{
        alert('Unable to sign up!')
    }
}

document.getElementById('signup-form').addEventListener('submit', signupForm);