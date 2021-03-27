<script>
    import { user } from './stores.js';

    export let url;

    let orderToAdd = {
      userID:"",
      symbol:"",
      quantity:0.0,
      price:0.0,
      side:"",
    };

    const addOrder = async () => {
      orderToAdd.userID = $user;
       const settings = {
         method: 'POST',
         body: JSON.stringify(orderToAdd),
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         }
       }
       console.log(settings.body)
       const response = await fetch(url + "loki/v1/request/submit", settings);
       if (!response.ok) {
           console.log("Error was: " + response.message)
       }
       try {
         const data = await response.data;
         console.log(data);
       } catch (err) {
         console.log(err)
       }
     };
</script>

<div class="container">
    <label>
        Symbol: <input type=text bind:value={orderToAdd.symbol}><br>
    </label>
    <label>
        Quantity: <input type=number bind:value={orderToAdd.quantity}><br>
    </label>
    <label>
        Price: <input type=number bind:value={orderToAdd.price}><br>
    </label>
    <label>
        Side: <input type=text bind:value={orderToAdd.side}><br>
    </label>
    <br>
    {#if $user === ""}
      <p>Cannot submit an order without logging in</p>
    {:else}
      <button on:click={addOrder}>
        Add Order
      </button>
    {/if}
</div>

<style>
    .container {
        border: 1px blue solid;
    }
</style>