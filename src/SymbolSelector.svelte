<script>
	import { symbol, debug, url } from './stores.js';

    let doNotFilter = true;

    function handleChange() {
        console.log("The value it is showing is: " + doNotFilter)
        if (doNotFilter) {
            $symbol = ""
        }
    }
</script>

<div class="container">
    {#if doNotFilter}
        <br>
        <label>
            Do not filter: <input type=checkbox on:click={handleChange} bind:checked={doNotFilter}><br>
        </label>
        Please uncheck to choose a symbol to filter by
    {:else}
        <br>
        <label>
            Do not filter: <input type=checkbox on:click={handleChange} bind:checked={doNotFilter}><br>
        </label>
        <div class="mb-3 pt-0">
            <input type="text" bind:value={$symbol} placeholder="Filter By This Symbol" class="mt-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
          </div>
        {#if $debug === 'true'}
            [{$symbol}]
        {/if}
    {/if}
    <br>
</div>

<style>
    .container {
        border: 1px blue solid;
    }
</style>