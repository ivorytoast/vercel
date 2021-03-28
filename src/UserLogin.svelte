<script>
	import { user, password, debug, url } from './stores.js';

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
        const response = await fetch($url + 'order/validate/login', settings);
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
        <div class="flex flex-wrap mt-6">
          <div class="w-1/2">
            <a href="" class="text-gray-400"><small>Forgot password?</small></a>
          </div>
          <div class="w-1/2 text-right">
            <a href="" class="text-gray-400"><small>Create new account</small></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>