<script>
	import { user, password } from './stores.js';

    export let url;

    let inputUser ="";
    let inputPassword ="";

    let loginInfo = {
        username:"",
        password:""
    }

    const login = async () => {
        loginInfo.username = inputUser;
        loginInfo.password = inputPassword;
        const settings = {
         method: 'POST',
         body: JSON.stringify(loginInfo),
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         }
       }
       console.log(settings.body)
        const response = await fetch('http://localhost:8084/order/validate/login', settings);
       if (!response.ok) throw Error(response.message);
       try {
          let outputData = await response.json();
          console.log(outputData);
          if (outputData.validUser) {
            $user = inputUser;
            $password = inputPassword;
            console.log("Currently changed to user: " + outputData);
          }
          console.log("Was not a valid user: " + outputData);
       } catch (err) {
         throw err;
       }
     };

    const fetchUsers = async () => {
        loginInfo.username = inputUser;
        loginInfo.password = inputPassword;
       const settings = {
         method: 'POST',
         body: JSON.stringify(loginInfo),
         headers: {
           'Accept': 'text/html',
           'Content-Type': 'application/json',
         }
       }
       console.log(settings.body)
       const response = await fetch("http://localhost:8084/order/validate/login", settings);
       if (!response.ok) {
           alert("Login not successfull")
       }
       try {
         const data = await response.data;
         console.log(data.data);
         if (isValidLogin) {
            $user = inputUser;
            $password = inputPassword;
         }
       } catch (err) {
         alert("Login not successfull!")
       }
     };
</script>

<div class="container">
    <label>
        User Name: <input type=text bind:value={inputUser}> {inputUser} -> {$user}<br>
    </label>
    <label>
        Password: <input type=text bind:value={inputPassword}> {inputPassword} -> {$password}<br>
    </label>
    <br>
    <label>
        {#if $user === ""}
            <button on:click={login}>Login</button> You are currently not logged in...
        {:else}
            <button on:click={login}>Login</button> You are logged in as user: {$user}
        {/if}
    </label>
</div>

<style>
    .container {
        border: 1px blue solid;
    }
</style>