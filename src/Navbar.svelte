<script>
  import { user, lokiUrl, thorUrl, debug, currentTab } from './stores.js';

  let sendToLocalBackend = true;

  function handleClick() {
    if (sendToLocalBackend) {
      $lokiUrl = "https://149.28.42.55:8084/";
      $thorUrl = "https://149.28.42.55:8085/";
      sendToLocalBackend = false;
    } else {
      $lokiUrl = "https://localhost:8084/"
      $thorUrl = "https://localhost:8085/";
      sendToLocalBackend = true;
    }
    console.log("Loki URL: " + $lokiUrl)
    console.log("Thor URL: " + $thorUrl)
    console.log("Send to local backend: " + sendToLocalBackend)
  }

  function changeTab(newTab) {
    console.log("Changing to tab: " + newTab)
    $currentTab = newTab;
    console.log("Current tab is: " + $currentTab)
  }
</script>

<nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-50 mb-3">
  <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <div class="text-md leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-black">
        {#if $user === ""}
          Not Logged In
        {:else}
          Welcome {$user}
        {/if}
      </div>
    </div>
    <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
      <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <div>
              {#if sendToLocalBackend}
                <button on:click={handleClick} class="bg-green-400 hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring focus:border-blue-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                  Current API Location: Localhost
                </button>
              {:else}
                <button on:click={handleClick} class="bg-green-500 hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring focus:border-blue-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                  Current API Location: Vultr
                </button>
              {/if}
            </div>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 cursor-pointer flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" on:click={() => changeTab("home")}>
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 pr-3 py-2 cursor-pointer flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" on:click={() => changeTab("settings")}>
              Create New User
            </a>
          </li>
      </ul>
    </div>
  </div>
</nav>