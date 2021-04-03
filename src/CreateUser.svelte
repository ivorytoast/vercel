<script>
	import { user, password, debug, currentTab, lokiUrl } from './stores.js';

    let inputUser ="";
    let inputPassword ="";

    let loginInfo = {
        username:"",
        password:""
    }

    function goBackToSignIn() {
      $currentTab = "home";
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
       console.log("JSON sending to create new user: " + settings.body)
       const response = await fetch($lokiUrl + 'vision/v1/users/create', settings);
       console.log(response)
       if (!response.ok) {
           console.error("Response is not okay!")
       }
       try {
          let outputData = await response.text();
          if (outputData) {
            console.log("Creating user: " + inputUser + " was a success!");
            alert("User " + inputUser + " was created!");
          } else {
            console.error("Creating user: " + inputUser + " failed!");
          }
       } catch (err) {
         throw err;
       }
     };
</script>

<div class="grid grid-cols-1 gap-4 font-mono">
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-50 border-0">
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h2 class="text-gray-600 text-lg font-bold">
                Titan
              </h2>
            </div>
            <hr class="mt-6 border-b-1 border-gray-400" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
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
            <button on:click={login} class="bg-green-400 hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring focus:border-blue-500 mt-5 mb-5 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                Create New User
            </button>
          </div>
          </div>
        </div>
        <div class="flex flex-wrap mt-6">
            <a on:click={goBackToSignIn} class="cursor-pointer text-gray-400"><small>Sign In</small></a>
        </div>
      </div>
    </div>
  </div>
</div>