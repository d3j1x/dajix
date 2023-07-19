<script>
// @ts-nocheck

  let isReadyMode = false;
  
	
  import logo from '$lib/img/logo.jpeg';
  import ghlogo from '$lib/img/github.svg';
  import vclogo from '$lib/img/vercel.svg';
  import svlogo from '$lib/img/svelte_logo.png';
  import fblogo from '$lib/img/f128.png';

  export let data
  function refreshPage() {
    location.reload()
  }


  import { onMount } from 'svelte';

  export let isDarkMode = false;


  // Function to toggle dark mode
function toggleDarkMode() {
    isDarkMode = !isDarkMode;

    // Update CSS variables based on the mode
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }

  // Check the user's preferred color scheme on page load
  onMount(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      // toggleDarkMode();
      isDarkMode = true;
      // console.log('mount : dark')
    }
    isReadyMode = true;
  });
</script>

<svelte:head>
	<title>Shiheb Din</title>
	<meta name="description" content="DajiX" />
</svelte:head>

<div class="fixed justify-between top-0 left-0 w-full z-50">

  {#if isReadyMode}
      
    <button
      class="flex items-center px-2 mt-2 text-sm font-bold text-white bg-gray-700 rounded-full hover:bg-gray-800"
      on:click={toggleDarkMode}
    >

      {#if isDarkMode}
        
        <p>Light </p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>

      {:else}

        <p>Dark </p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>

      {/if}

    </button>
    
    {/if}
</div>



<main
  class="relative flex flex-col items-center justify-center min-h-screen py-2"
> 

  <a
    href="https://github.com/d3j1x"
    class="mt-8 p-1 sm:text-lg font-bold text-black transition-all rounded-sm shadow-sm bg-white/50 dark:bg-white/80 ring-1 ring-gray-900/5  hover:shadow-lg active:shadow-sm"
    id="djx"
  >
    @d3j1x
  </a>
  <h1
    class="pt-4 pb-8 bg-gradient-to-br dark:from-white from-black via-[#707070] to-[#ffffff] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    id="shi"
    >
    I'm Shihab Din
  </h1>

  <div class="flex flex-col grow">

    <div class="flex justify-center rounded-full overflow-hidden mb-5">
      <img
          src={logo}
          alt="d3j1x logo"
          class="w-80   sm:w-96  transform  hover:scale-125  transition ease-in-out duration-300"
          
        />
    </div>

    <!-- <div class="rounded-full overflow-hidden mb-5">
    <a href="https://github.com/d3j1x" class="">
      <img
        src={logo}
        alt="d3j1x logo"
        class="text-white dark:text-white w-80 sm:w-96  transform  hover:scale-125  transition ease-in-out duration-300"
        
      />
    </a>
    </div> -->
  
    <!-- hover:bg-opacity-100 hover:bg-opacity-100 -->
    

    <div
      class="flex flex-col items-center w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
      id="card"
    >
      <div class="mb-6 text-lg text-center font-bold sm:text-xl">
      Cyber Security Specialist !
      </div>
      <button
      class=" sm:text-lg text-lime-500 mb-6 font-bold opacity-100 hover:underline"
      >
      Security, Privacy & Trust
      </button>
      <div class="text-5xl font-bold">
      {data?.pageVisits} <span class="text-sm">Views</span>
      </div>
    </div>

    <div class="text-5xl font-bold">
      
    </div>
  </div>

  <div
    class="w-full max-w-lg mt-6 font-light text-center text-gray-600 dark:text-gray-300"
    id="lst"
    >
    <div class="flex items-center justify-center my-2">
      <span class="font-bold">CONTACT</span>
      <a
        href="https://facebook.com/profile.php?id=100073939376761"
        class="flex items-center font-extrabold underline transition-colors underline-offset-4 dark:hover:text-white hover:text-black hover:no-underline"
      >
      <img src={fblogo} alt="fb logo" class="h-6 mx-2" />
      <p id="me">ME</p>
    </a>
    </div>

    <div class="flex items-center justify-center my-2">
      <span class="font-bold">Built with</span>
      <a
        href="https://kit.svelte.dev/"
        class="flex items-center font-extrabold underline transition-colors underline-offset-4 dark:hover:text-white hover:text-black hover:no-underline"
      >
        <img src={svlogo} alt="svelte logo" class="h-6 mx-2" />
        <p id="sve">SvelteKit</p>
      </a>
      .
    </div>
  </div>
  <div class="flex flex-col grow ">
    <a href="https://vercel.com">
      <img
        id="imgvcl"
        src={vclogo}
        alt="Vercel Logo"
        class="my-2 dark:invert"
        width={100}
        height={24}
      />
    </a>
    
    <a
      href="https://github.com/d3j1x/dajix"
      class="flex items-center h-8 mt-auto space-x-2 bottom-20 right-20"
    >
      <img id="imggth" src={ghlogo} alt="GitHub Logo" class="h-6 dark:invert" />
      <p>Source</p>
    </a>
  </div>
</main>

<section>
  <button
      on:click={refreshPage}
      class="mb-1 font-bold opacity-70 hover:opacity-100 hover:underline"
    >
      Refresh Page
  </button>
  <p class="text-sm font-extrabold opacity-100">© 2023 d3j1x. All rights reserved.</p>
</section>

<style>

</style>
