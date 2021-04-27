<script>
  import { thorUrl } from './stores.js';

  async function runAddIntegration() {
    const res = await fetch($thorUrl + "maw/v1/run/tesseract/add");
    const text = await res.text();
  
    if (res.ok) {
      console.log("Maw sent back: " + text);
      return text;
    } else {
      console.log("Something went wrong. Maw sent back: " + text);
      throw new Error(text);
    }
  }

  async function runQuantityIntegration() {
    const res = await fetch($thorUrl + "maw/v1/run/tesseract/add");
    const text = await res.text();
  
    if (res.ok) {
      console.log("Maw sent back: " + text);
      return text;
    } else {
      console.log("Something went wrong. Maw sent back: " + text);
      throw new Error(text);
    }
  }
</script>

<p class="text-l">Integration Test Center</p>
<br>
<button on:click={runQuantityIntegration} class="bg-green-400 hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring focus:border-blue-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
  Run Loki Tests
</button>
<br>
<button on:click={runQuantityIntegration} class="bg-green-400 hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring focus:border-blue-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
  Run Thor Tests
</button>
<br>
<button on:click={runAddIntegration} class="bg-green-400 hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring focus:border-blue-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
  Run Redis Tests
</button>
<br>
<button on:click={runAddIntegration} class="bg-green-400 hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring focus:border-blue-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
  Run Database Tests
</button>