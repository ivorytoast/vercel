<script>
	import { user, password, debug } from './stores.js';

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

<div>
    <div class="mb-3 pt-0">
      <input type="text" bind:value={inputUser} placeholder="User Name" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
    </div>
    {#if $debug === 'true'}
      {inputUser} -> {$user}
      <br>
    {/if}
    <div class="mb-3 pt-0">
      <input type="text" bind:value={inputPassword} placeholder="Password" class="mt-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
    </div>
    {#if $debug === 'true'}
      {inputPassword} -> {$password}
      <br>
    {/if}
    <label>
        {#if $user === ""}
          <button on:click={login} class="bg-pink-500 hover:bg-pink-700 focus:bg-pink-700 focus:outline-none focus:ring focus:border-blue-500 mt-5 mb-5 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Login
          </button>
          <br>
          You are currently not logged in...
        {:else}
          <button on:click={login} class="bg-pink-500 hover:bg-pink-700 focus:bg-pink-700 focus:outline-none focus:ring focus:border-blue-500 mt-5 mb-5 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Login
          </button>
          <br>
          You are logged in as user: <br>[{$user}]
        {/if}
    </label>
</div>