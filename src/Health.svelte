<script>
    import { lokiUrl } from './stores.js';

    async function getHealthData() {
          const res = await fetch($lokiUrl + "actuator/health");
          const text = await res.json();
  
          if (res.ok) {
              return text;
          } else {
              throw new Error(text);
        }
    }
  
    let promisedHealthData = []
  
    function handleClick() {
        promisedHealthData = getHealthData()
        console.log(promisedHealthData)
    }
</script>

  <div>
    <button on:click={handleClick} class="bg-green-400 mt-5 mb-5 text-white active:bg-green-700 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
        Get Health Data
    </button>

    {#await promisedHealthData}
        <p>...retrieving health data</p>
    {:then healthData}
    <br>
        Not implemented yet...
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
  </div>