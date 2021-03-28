<script>
  import OrderList from './Order.svelte';
  import Submit from './Submit.svelte';
  import UserLogin from './UserLogin.svelte';
  import SymbolSelector from './SymbolSelector.svelte';
  import Navbar from './Navbar.svelte';

  import { url, debug, currentTab, user } from './stores.js';

	let sendToLocalBackend = true;

  function changeCurrentTab(newValue) {
    $currentTab = newValue;
  }
</script>

<Navbar/>
<!-- <div class="flex">
  <div class="m-auto">
  </div>
</div> -->
<!-- <Tabs class="container mx-auto"/> -->

{#if $currentTab === "home"}
  <UserLogin/>
{:else if $currentTab === "orders"}
  {#if $user === ""}
    <h1>Please log in first to see your orders :)</h1>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5 font-mono">
      <div class="shadow-lg bg-blue-50 text-center p-5"><SymbolSelector/></div>
      <div class="shadow-lg bg-blue-50 text-center p-5"><Submit/></div>
      <div class="shadow-lg bg-blue-50 text-center p-5"><OrderList bookType="bids"/></div>
      <div class="shadow-lg bg-blue-50 text-center p-5"><OrderList bookType="asks"/></div>
    </div>
  {/if}
{:else if $currentTab === "dashboard"}
  ...dashboard
{:else if $currentTab === "settings"}
  ...settings
{:else}
	<h1>How did you get here? This is not a valid tab on this website :(</h1>
{/if}