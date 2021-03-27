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

<button on:click={handleClick}>
  Toggle Endpoints
</button>
<br>
{#if sendToLocalBackend}
  <h5>Sending to localhost:8084 for local development</h5>
{:else}
  <h5>Sending to Vultr instance</h5>
{/if}
<div class="ordersPanel">
<UserLogin {url}/>
<SymbolSelector/>
</div>
<br>
<div class="ordersPanel">
  <Submit {url}/>
  <div><OrderList bookType="bids" {url}/></div>
  <div><OrderList bookType="asks" {url}/></div>
</div>

<style>
  .ordersPanel {
    display: flex;
    flex-direction: row;
  }
</style>