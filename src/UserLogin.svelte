<script>
	import { user, currentTab, password, debug, lokiUrl } from './stores.js';

    let inputUser ="";
    let inputPassword ="";

    let loginInfo = {
        username:"ivorytoast",
        password:"password"
    }

    function createNewAccount() {
      $currentTab = "settings";
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
         },
       }
       console.log("The JSON payload being sent to Loki: " + settings.body)
       const response = await fetch($lokiUrl + 'vision/v1/users/validate/login', settings);
       if (!response.ok) throw Error(response.message);
       try {
          let outputData = await response.json();
          console.log("The JSON Loki sent back to us: " + JSON.stringify(outputData));
          if (outputData.validUser) {
            $user = inputUser;
            $password = inputPassword;
            console.log("Currently changed to user: " + inputUser);
          } else {
            alert("Login Failed. Please make sure username/password is correct.")
            console.log("Was not a valid user: " + outputData);
          }
       } catch (err) {
         throw err;
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
        <button on:click={login} class="bg-green-400 hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring focus:border-blue-500 mt-5 mb-5 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          Login
        </button>
      {:else}
        <button on:click={login} class="bg-green-400 hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring focus:border-blue-500 mt-5 mb-5 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          Login
        </button>
      {/if}
  </label>
</div>