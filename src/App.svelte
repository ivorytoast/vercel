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
 {#if $currentTab === "home"}
  <div class="grid grid-cols-1 md:grid-cols-5 gap-5 font-mono">
    <div class="md:col-start-2 md:row-start-2 h-60 shadow-lg bg-blue-50 text-center p-5"><SymbolSelector/></div>
    <div class="md:col-start-2 md:row-start-1 h-60 shadow-lg bg-blue-50 text-center p-5"><UserLogin/></div>
    <div class="md:col-start-3 md:row-start-1 md:row-end-3 min-h-500 shadow-lg bg-blue-50 text-center p-5"><Submit/></div>
    <div class="md:col-start-1 md:row-start-1 md:row-end-3 overflow-y-auto shadow-lg bg-blue-50 text-center p-5" style="height: 510px"><OrderList bookType="bids"/></div>
    <div class="md:col-start-5 md:row-start-1 md:row-end-3 overflow-y-auto shadow-lg bg-blue-50 text-center p-5" style="height: 510px"><OrderList bookType="asks"/></div>
    <div class="md:col-start-4 md:row-start-1 md:row-end-2 overflow-y-auto shadow-lg bg-blue-50 text-center p-5" style="height: 240px"><Users/></div>
    <div class="md:col-start-4 md:row-start-2 md:row-end-3 overflow-y-auto shadow-lg bg-blue-50 text-center p-5" style="height: 240px"><Integration/></div>
    <div class="md:row-start-3 h-40 shadow-lg bg-blue-50 text-center p-5"><Health service="loki" port="8081"/></div>
    <div class="md:row-start-3 h-40 shadow-lg bg-blue-50 text-center p-5"><Health service="loki" port="8083"/></div>
    <div class="md:row-start-3 h-40 shadow-lg bg-blue-50 text-center p-5"><Health service="loki" port="8084"/></div>
    <div class="md:row-start-3 h-40 shadow-lg bg-blue-50 text-center p-5"><Health service="vision" port="8081"/></div>
    <div class="md:row-start-3 h-40 shadow-lg bg-blue-50 text-center p-5"><Health service="vision" port="8083"/></div>
    <div class="md:row-start-4 h-40 shadow-lg bg-blue-50 text-center p-5"><Health service="vision" port="8084"/></div>
    <div class="md:row-start-4 h-40 shadow-lg bg-blue-50 text-center p-5"><Health service="maw" port="8087"/></div>
    <div class="md:row-start-4 h-40 shadow-lg bg-blue-50 text-center p-5"><Health service="maw" port="8088"/></div>
    <div class="md:row-start-4 h-40 shadow-lg bg-blue-50 text-center p-5"><Health service="maw" port="8089"/></div>
    <div class="md:row-start-4 h-40 shadow-lg bg-blue-50 text-center p-5"><Health service="FAKE SERVICE" port="8085"/></div>
  </div>
{:else if $currentTab === "settings"}
  <CreateNewUser/>
{:else}
	<h1>How did you get here? This is not a valid tab on this website :(</h1>
{/if}