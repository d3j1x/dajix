<script>

import { Card, Button } from "flowbite-svelte";

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


<div class="grid justify-around gap-10 md:grid-cols-2  md:gap-4 xl:grid-cols-3 mx-1">

  <div class="grid md:col-span-1 text-center justify-center items-center mx-auto">
    <Card class="justify-center items-center mx-auto h-44">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cyber X</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
        Cyber X Is Just Awesome Opensource. Best Of Cybersecurity Tips Hint Source...
      </p>
      <Button class="w-fit">
        <a class="flex" href="https://cyberx.vercel.app" target="_blank" rel="noreferrer">
          Go To <p class="mx-2 underline font-bold">CyberX</p> Web App
        </a>
        
      </Button>
    </Card>
    
  </div>


  <div class="grid md:col-span-1 text-center justify-center items-center mx-auto">
    <Card class="justify-center items-center mx-auto h-44">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bitcoin Street</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
        BTC LIVE $ | Crypto, Bitcoin News | Crypto Converter | Top Free Faucet | Trusted Earnings Website | Mining - Trading - Investing.
      </p>
      <Button class="w-fit">
        <a class="flex" href="https://bitcoin-street.vercel.app" target="_blank" rel="noreferrer">
          Go To <p class="mx-2 underline font-bold">BTC-STREET</p> Web App
        </a>
        
      </Button>
    </Card>
    
  </div>

  <div class="grid md:col-span-1 text-center justify-center items-center mx-auto">
    <Card class="justify-center items-center mx-auto h-44">
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

