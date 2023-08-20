<script>

import { Card, Button } from "flowbite-svelte";
import Ads from '$lib/components/Ads.svelte';

</script>


<!-- <main
  class="pt-28 relative flex flex-col items-center justify-center min-h-screen py-10"
> -->
<main
  class="mainClass"
>




<!-- <div class="text-center text-4xl  font-extrabold sm:text-5xl">P R O J E C T S</div> -->
<!-- <div class="titleClass">P R O J E C T S</div> -->

<div class="flex justify-between w-8/12 md:hidden text-lg font-semibold">
    <a  class="underline hover:no-underline" href="/">Home</a>
    <a  class="underline hover:no-underline px-10 md:px-20" href="/services">Services</a>
    <a  class="underline hover:no-underline" href="/about">About</a>
</div>

<div class="titleClass">P R O J E C T S</div>

<hr class="w-11/12 h-1 my-5  bg-black rounded dark:bg-white" />

</main>


<div class="grid justify-center gap-10 lg:grid-cols-2  lg:gap-20">

  <div class="lg:col-span-1">
    <Card>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bitcoin Street</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
        BTC LIVE PRICE $ | Crypto, Bitcoin News | Crypto Converter | Top Free Faucet | Trusted Earnings Website | Mining - Trading - Investing.
      </p>
      <Button class="w-fit">
        <a class="flex" href="https://bitcoin-street.vercel.app" target="_blank" rel="noreferrer">
          Go To <p class="mx-2 underline font-bold">BTC-STREET</p> Web App
        </a>
        
      </Button>
    </Card>
    
  </div>

  <div class="lg:col-span-1">
    <Card>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SMRT MRKT</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
        Smrt Mrkt is an emerging company.
Specialized in the field of media services and modern technology.
      </p>
      <Button class="w-fit">
        <a class="flex" href="https://smrkt.vercel.app" target="_blank" rel="noreferrer">
          Go To <p class="mx-2 underline font-bold">SMRKT</p> Web App
        </a>
        
      </Button>
    </Card>    
  </div>

</div>

