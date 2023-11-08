//make a fetch to the url/home and put in headers the token 
/*
    with login i generate a token and send it back to the front
    then I have to store the token in get's authorization headers and then make a get to /home
    in that get is when i use the middleware that validates the token
*/



$('form').on('submit', async (e)=>{
    e.preventDefault();
    const user = $('#username').first().val();
    const password = $('#password').first().val();
    console.log(user, password);
    const url = 'http://localhost:3001'; 
    const res = await fetch(url, {
        method:'POST',
        headers:{
            "Conten-Type":"application/json"
        },
        body:JSON.stringify({
            username:user,
            password:password
        })
    });

});
