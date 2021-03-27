<script>
  import OrderList from './Order.svelte';
  import Submit from './Submit.svelte';
  import UserLogin from './UserLogin.svelte';
  import SymbolSelector from './SymbolSelector.svelte';

	let sendToLocalBackend = true;
  let url = "http://localhost:8084/"

  function handleClick() {
    if (sendToLocalBackend) {
      url = "http://8.9.11.249:8084/";
      sendToLocalBackend = false;
    } else {
      url = "http://localhost:8084/"
      sendToLocalBackend = true;
    }
    console.log("URL: " + url)
    console.log("Send to local backend: " + sendToLocalBackend)
  }
</script>

<!-- <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="" alt="">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>

<button on:click={handleClick}>
  Toggle Endpoints
</button>
<br>
{#if sendToLocalBackend}
  <h5>Sending to localhost:8084 for local development</h5>
{:else}
  <h5>Sending to Vultr instance</h5>
{/if}
-->
<div class="grid grid-cols-1 md:grid-cols-5 gap-5 font-mono">
  <div class="shadow-lg bg-white text-center p-5"><UserLogin {url}/></div>
  <div class="shadow-lg bg-white text-center p-5"><SymbolSelector/></div>
  <div class="shadow-lg bg-white text-center p-5"><Submit {url}/></div>
  <div class="shadow-lg bg-white text-center p-5"><OrderList bookType="bids" {url}/></div>
  <div class="shadow-lg bg-white text-center p-5"><OrderList bookType="asks" {url}/></div>
</div>

  <!-- <div class="flex flex-wrap space-x-4">
    <div class="flex-1"><UserLogin {url}/></div>
    <div class="flex-1"><SymbolSelector/></div>
    <div class="flex-1"><Submit {url}/></div>
    <div class="flex-1"><OrderList bookType="bids" {url}/></div>
    <div class="flex-1"><OrderList bookType="asks" {url}/></div>
  </div> -->