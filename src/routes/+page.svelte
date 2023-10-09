<script>
// @ts-nocheck


  import { t, locale, locales } from "./i18n";

  import { Card, Button, Rating, Badge } from "flowbite-svelte";
  
	
  import logo from '$lib/img/logo.jpeg';
  import ghlogo from '$lib/img/github.svg';
  import vclogo from '$lib/img/vercel.svg';
  import svlogo from '$lib/img/svelte_logo.png';
  import fblogo from '$lib/img/f128.png';
  import inlogo from '$lib/img/l128.png';
  import heartlg from '$lib/img/heart.svg';
  import kabaalg from '$lib/img/kaaba.svg';

  import btcstreetico from '$lib/img/btcstreetico.jpg'

  export let data
  function refreshPage() {
    location.reload()
  }


  
</script>

<svelte:head>
	<title>Shihab Al-Din</title>
	<meta name="description" content="DajiX portfolio opensource SVELTEKIT TAILWIND FLOWBITE" />
</svelte:head>


	<div class="font-semibold fixed top-20 right-5 flex items-center justify-center bg-black z-40">
		<select class="border  dark:bg-black text-black dark:text-white m-0 p-0 pl-2" bind:value="{$locale}">
		  <option value="en">English</option>
		  <option value="ar">عربي</option>
		  <option value="ru">Русский</option>
		</select>
	</div>


<main
  class="relative flex flex-col items-center justify-center min-h-screen py-10"
> 

  
  <!-- <h1
    class="mt-12 md:mt-20 pt-4 pb-8 bg-gradient-to-br dark:from-white from-black via-[#707070] to-[#ffffff] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    >
    I'm Shihab Din
  </h1> -->

  <h1
  class="mt-14 md:mt-20 pt-10 pb-10 bg-gradient-to-br dark:from-white from-black via-[#707070] to-[#ffffff] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
  >
  {$t('homepage.name')}
  </h1>



  <div class="flex items-center flex-col grow">

    <div class="rounded-full overflow-hidden mb-2">
      <img
          src={logo}
          alt="d3j1x logo"
          class="text-white dark:text-white w-60 sm:w-64 md:w-80  transform hover:scale-125  transition ease-in-out duration-300"
          
        />
    </div>

    <a
    href="https://github.com/d3j1x"
    class="mt-5 px-4 py-1 sm:text-lg font-bold text-gray-600 transition-all rounded-full shadow-sm bg-white/30 dark:bg-white/80 ring-1 ring-gray-900/5 dark:text-black hover:shadow-lg active:shadow-sm"
  >
    @d3j1x
  </a>
    

    <div
      class="mt-6 flex flex-col items-center w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
    >
      <div class="mb-6 text-lg text-center font-bold sm:text-xl">
        {$t('homepage.job')}
      </div>
      <button
      class=" sm:text-lg text-lime-500 mb-6 font-bold opacity-100 hover:underline"
      >
        {$t('homepage.jobDef')}
      </button>
      <div class="text-5xl font-bold">
      {data?.pageVisits} <span class="text-sm">{$t('homepage.views')}</span>
      </div>
    </div>

    <div class="text-5xl font-bold">
      
    </div>
  </div>

  <div class="my-10">
      <div class="my-5">
        <h1 class="text-center text-7xl font-semibold text-gray-900 dark:text-white">TO<a href="/projects" class="text-lime-500 underline"><span class="px-2 text-7xl font-extrabold">P</span><span class="text-4xl font-semibold">r o j e c t s</span></a></h1>
      </div>
    <Card padding="none">

    <a href="https://bitcoin-street.vercel.app" target="_blank" rel="noreferrer">
      <img class="p-8 rounded-t-lg" src={btcstreetico} alt="product 1" />
    </a>
    <div class="px-5 pb-5">
      <a href="/">
        <h5 class='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
          BTC LIVE PRICE $ | Crypto - Bitcoin News | Crypto Converter | Top Free Faucet | Trusted Earnings Website | Mining - Trading - Investing | Convert Btc Satoshi To USD"
        </h5>
      </a>
      <Rating rating="4" size="18" class="mt-2.5 mb-5">
        <Badge slot="text" class="ml-3">4</Badge>
      </Rating>
      <div class="flex justify-between items-center">
        <span class="text-3xl font-bold text-gray-900 dark:text-white">OpenSource</span>
        <Button href="https://bitcoin-street.vercel.app" target="_blank" rel="noreferrer">Go now</Button>
      </div>
    </div>
  </Card>
  </div>

  

  <div
    class="w-full max-w-lg mt-6 font-light text-center text-gray-600 dark:text-gray-300"
    >
    <div class="flex items-center justify-center my-2">
      <span class="font-bold">CONTACT</span>
      <a
        href="https://www.linkedin.com/in/shihab-din-719b3b285/"
        class="flex items-center font-extrabold underline transition-colors underline-offset-4 dark:hover:text-white hover:text-black hover:no-underline"
      >
      <img src={inlogo} alt="in logo" class="h-6 mx-2" />
      <p>ME</p>
    </a>
    </div>

    <div class="flex items-center justify-center my-2">
      <span class="font-bold">Built with</span>
      <a
        href="https://kit.svelte.dev/"
        class="flex items-center font-extrabold underline transition-colors underline-offset-4 dark:hover:text-white hover:text-black hover:no-underline"
      >
        <img src={svlogo} alt="svelte logo" class="h-6 mx-2" />
        <p>SvelteKit</p>
      </a>
      .
    </div>
  </div>
  <div class="flex flex-col grow ">
    <a href="https://vercel.com">
      <img
        src={vclogo}
        alt="Vercel Logo"
        class="my-2 text-white dark:text-white dark:invert"
        width={100}
        height={24}
      />
    </a>
    
    <a
      href="https://github.com/d3j1x/dajix"
      class="flex items-center h-8 mt-auto space-x-2 bottom-20 right-20"
    >
      <img id="imggth" src={ghlogo} alt="GitHub Logo" class="h-6 dark:invert" />
      <p class="font-light">Source</p>
    </a>
    
    <!-- <a
      href="https://quran.com/"
      class="flex items-center h-8 mt-auto space-x-2 bottom-20 right-20"
      >
      
      <img id="imghrt" src={heartlg} alt="Heart Logo" class="h-6 dark:invert" />
      <p class="font-semibold">Proud of</p>
      <img id="imgkb" src={kabaalg} alt="Kabaa Logo" class="h-6 dark:invert" />
      <p class="font-bold">ISLAM</p>

    </a> -->
  </div>

  <a
      href="https://quran.com/"
      class="flex items-center h-8 py-10 mt-auto space-x-2 bottom-20 right-20"
      >
      
      <img id="imghrt" src={heartlg} alt="Heart Logo" class="h-6 dark:invert" />
      <p class="font-semibold">Proud of</p>
      <img id="imgkb" src={kabaalg} alt="Kabaa Logo" class="h-6 dark:invert" />
      <p class="font-bold">ISLAM</p>

    </a>
</main>



<section>
  <button
      on:click={refreshPage}
      class="mb-1 font-bold opacity-70 hover:opacity-100 hover:underline"
    >
      Refresh Page
  </button>
</section>

<style>

</style>
