<script>
    import { onMount } from 'svelte';

    export let port = "";
    export let service = "";

    async function getHealthData() {
          const res = await fetch("http://localhost:"+port+"/"+service+"/status");
          const text = await res.text();
  
          if (res.ok) {
              return text;
          } else {
              throw new Error(text);
        }
    }

    onMount(async () => {
		promisedHealthData = getHealthData();
	});
  
    let promisedHealthData = []
  
    function handleClick() {
        promisedHealthData = getHealthData()
        console.log(promisedHealthData)
    }
</script>

  <div>
    <h2>{port}'s {service}</h2>

    {#await promisedHealthData}
        <p class="text-lg mt-3">...retrieving health data</p>
    {:then healthData}
        <p class="text-lg mt-3" style="color: green">{healthData}</p>
    {:catch error}
        <p class="text-lg mt-3" style="color: red">{error.message}</p>
    {/await}
    <button on:click={handleClick} class="bg-green-400 mt-5 mb-5 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
        Refresh Endpoint Status
    </button>
  </div>