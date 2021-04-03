<script>
  import OrderList from './Order.svelte';
  import Submit from './Submit.svelte';
  import UserLogin from './UserLogin.svelte';
  import SymbolSelector from './SymbolSelector.svelte';
  import Navbar from './Navbar.svelte';
  import Users from './Users.svelte';
  import Health from './Health.svelte';
  import CreateNewUser from './CreateUser.svelte';
  import Integration from './Integration.svelte';

  import { debug, currentTab, user } from './stores.js';

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
  <br>
  <div class="shadow-lg bg-red-50 text-center p-5"><p class="text-3xl font-extrabold">First time at this site? Then please do the following:</p><br>
    Please go visit the website's cloud provider's (Vultr) host:port address:<br><br><a href="https://149.28.42.55:8084/vision/v1/users/all" class="font-extrabold">https://149.28.42.55:8084/vision/v1/users/all</a><br><br>Your web browser will say this is an "Unsecure Site since it has a self signing certificate".
    This is because I do not want to pay for an actual certificate :) <br><br>
    All you have to do is then click on:<br><br><ol><li>1. <span class="font-extrabold">"Show Details"</span></li><li>2. <span class="font-extrabold">"Visit this website"</span></li></ol><br>
    Once this happens, your browser will not block requests due to it thinking it is unsecure!</div>
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
  <div class="grid grid-cols-1 md:grid-cols-4 gap-5 font-mono">
    <div class="shadow-lg bg-blue-50 text-center p-5"><Users/></div>
    <div class="shadow-lg bg-blue-50 text-center p-5"><Health/></div>
  </div>
{:else if $currentTab === "integration"}
  <Integration/>
{:else if $currentTab === "settings"}
  <CreateNewUser/>
{:else}
	<h1>How did you get here? This is not a valid tab on this website :(</h1>
{/if}