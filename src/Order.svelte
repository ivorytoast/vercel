<script>
    import { symbol, user, thorUrl } from './stores.js';

    export let bookType = "";

    let sideToMatch = (bookType === "bids") ? "buy" : "sell";

    async function getAllOrders() {
          const res = await fetch($thorUrl + "maw/v1/orders/all");
          const text = await res.json();
  
          if (res.ok) {
              return text;
          } else {
              throw new Error(text);
        }
    }
  
    let promisedOrders = []
  
    function handleClick() {
        promisedOrders = getAllOrders()
        console.log(promisedOrders)
        console.log(sideToMatch)
        console.log("Symbol to filter by: (" + $symbol + ")")
    }
</script>

  <div>
    <button on:click={handleClick} class="bg-green-400 mt-5 mb-5 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
        {#if bookType === "bids"}
            Get Bids
        {:else}
            Get Asks
        {/if}
    </button>
  
    {#await promisedOrders}
        <p>...retrieving orders</p>
    {:then listOfOrders}
    <ul class="text-left">
      {#each listOfOrders as order }
      {#if order.userID === $user}
        {#if order.side === sideToMatch}
            {#if $symbol === ""}
                {#if order.quantityRemaining === 0}
                    <li class="text-gray-300">{order.id} -> {order.symbol} {order.side}s {order.quantity}/{order.quantityRemaining} shares @ {order.price}</li>
                {:else}
                    <li>{order.id} -> {order.symbol} {order.side}s {order.quantity}/{order.quantityRemaining} shares @ {order.price}</li>
                {/if}
            {:else}
                {#if $symbol === order.symbol}
                    {#if order.quantityRemaining === 0}
                        <li class="text-gray-300">{order.id} -> {order.symbol} {order.side}s {order.quantity}/{order.quantityRemaining} shares @ {order.price}</li>
                    {:else}
                        <li>{order.id} -> {order.symbol} {order.side}s {order.quantity}/{order.quantityRemaining} shares @ {order.price}</li>
                    {/if}
                {/if}
            {/if}
        {/if}
        {/if}
      {/each}
    </ul>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
  </div>