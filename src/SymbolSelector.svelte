<script>
	import { symbol } from './stores.js';

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
        <label>
            Do not filter: <input type=checkbox on:click={handleChange} bind:checked={doNotFilter}><br>
        </label>
        Please uncheck to choose a symbol to filter by
    {:else}
        <label>
            Choose Symbol: <input type=text bind:value={$symbol}> -> {$symbol}<br>
        </label>
        <label>
            Do not filter: <input type=checkbox on:click={handleChange} bind:checked={doNotFilter}><br>
        </label>
    {/if}
    <br>
</div>

<style>
    .container {
        border: 1px blue solid;
    }
</style>