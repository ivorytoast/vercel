<script>
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
    }
</script>

  <div class="container">
    <button on:click={handleClick}>
        Get Orders
    </button>
    
    {#if bookType === "bids"}
        <h1>Bids</h1>
    {:else}
        <h1>Asks</h1>
    {/if}
  
    {#await promisedOrders}
        <p>...retrieving orders</p>
    {:then listOfOrders}
    <ul>
      {#each listOfOrders as order }
        {#if order.side === sideToMatch}
            {#if order.quantityRemaining === 0}
                <li class="completedOrder">{order.id} -> {order.symbol} {order.side}s {order.quantity}/{order.quantityRemaining} shares @ {order.price}</li>
            {:else}
                <li>{order.id} -> {order.symbol} {order.side}s {order.quantity}/{order.quantityRemaining} shares @ {order.price}</li>
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