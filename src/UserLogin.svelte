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
         agent: httpsAgent,
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
              <label>
                  {#if $user === ""}
                    <button on:click={login} class="bg-green-400 hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring focus:border-blue-500 mt-5 mb-5 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      Login
                    </button>
                    <br>
                    You are currently not logged in...
                  {:else}
                    <button on:click={login} class="bg-green-400 hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring focus:border-blue-500 mt-5 mb-5 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      Login
                    </button>
                    <br>
                    You are logged in as user: <br>[{$user}]
                  {/if}
              </label>
          </div>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 text-center">
          <div class="">
            <a on:click={createNewAccount} class="cursor-pointer text-gray-400"><small>Create new account</small></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>