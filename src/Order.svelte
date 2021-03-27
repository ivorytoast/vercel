<script>
    import { symbol, user } from './stores.js';

    export let bookType = "";
    export let url;

    let sideToMatch = (bookType === "bids") ? "buy" : "sell";

    async function getAllOrders() {
          const res = await fetch(url + "order/all");
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

  <div class="container">
    <button on:click={handleClick}>
        Get Orders
    </button>
    
    {#if bookType === "bids"}
        <h3>Bids</h3>
    {:else}
        <h3>Asks</h3>
    {/if}
  
    {#await promisedOrders}
        <p>...retrieving orders</p>
    {:then listOfOrders}
    <ul>
      {#each listOfOrders as order }
      {#if order.userID === $user}
        {#if order.side === sideToMatch}
            {#if $symbol === ""}
                {#if order.quantityRemaining === 0}
                    <li class="completedOrder">{order.id} -> {order.symbol} {order.side}s {order.quantity}/{order.quantityRemaining} shares @ {order.price}</li>
                {:else}
                    <li>{order.id} -> {order.symbol} {order.side}s {order.quantity}/{order.quantityRemaining} shares @ {order.price}</li>
                {/if}
            {:else}
                {#if $symbol === order.symbol}
                    {#if order.quantityRemaining === 0}
                        <li class="completedOrder">{order.id} -> {order.symbol} {order.side}s {order.quantity}/{order.quantityRemaining} shares @ {order.price}</li>
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

  <style>
      .container {
          border: 1px pink solid;
      }

      .completedOrder {
          color: lightgray;
      }
  </style>