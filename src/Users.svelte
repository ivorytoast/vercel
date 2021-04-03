<script>
    import { symbol, lokiUrl, user } from './stores.js';

    async function getAllUsers() {
          const res = await fetch($lokiUrl + "vision/v1/users/all");
          const text = await res.json();
  
          if (res.ok) {
              return text;
          } else {
              throw new Error(text);
        }
    }
  
    let promisedUsers = []
  
    function handleClick() {
        promisedUsers = getAllUsers()
        console.log(promisedUsers)
    }
</script>

  <div>
    <button on:click={handleClick} class="bg-green-400 mt-5 mb-5 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
        Get List Of Available Users
    </button>

    {#await promisedUsers}
        <p>...retrieving users</p>
    {:then listOfUsers}
    <ul class="text-center">
      {#each listOfUsers as user}
        <li>{user.userID} -> {user.password}</li>
      {/each}
    </ul>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
  </div>