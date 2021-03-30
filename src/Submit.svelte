<script>
    import { user, url } from './stores.js';

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
       const response = await fetch($url + "loki/v1/request/submit", settings);
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

<div>
  <div class="mb-3 pt-0">
    <input type="text" bind:value={orderToAdd.symbol} placeholder="Symbol" class="mt-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
  </div>
  <div class="mb-3 pt-0">
    <input type="number" bind:value={orderToAdd.quantity} placeholder="Quantity" class="mt-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
  </div>
  <div class="mb-3 pt-0">
    <input type="number" bind:value={orderToAdd.price} placeholder="Price" class="mt-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
  </div>
  <div class="mb-3 pt-0">
    <input type="text" bind:value={orderToAdd.side} placeholder="Side" class="mt-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
  </div>
    <br>
    {#if $user === ""}
      <p>Cannot submit an order without logging in</p>
    {:else}
    <button on:click={addOrder} class="bg-green-400 hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring focus:border-blue-500 mt-5 mb-5 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
      Add Order
    </button>
    {/if}
</div>