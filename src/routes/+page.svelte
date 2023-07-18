<script>
// @ts-nocheck


  export let data
  function refreshPage() {
    location.reload()
  }
	
  import logo from '$lib/img/logo.jpeg';
  import ghlogo from '$lib/img/github.svg';
  import vclogo from '$lib/img/vercel.svg';
  import svlogo from '$lib/img/svelte_logo.png';
  import fblogo from '$lib/img/f128.png';

  
</script>

<svelte:head>
	<title>Shiheb Din</title>
	<meta name="description" content="DajiX" />
</svelte:head>


<main
  class="relative flex flex-col items-center justify-center min-h-screen py-10"
> 

  <a
    href="https://github.com/d3j1x"
    class="px-6 py-2 sm:text-lg font-bold text-gray-600 transition-all rounded-full shadow-sm bg-white/30 dark:bg-white/80 ring-1 ring-gray-900/5 dark:text-black hover:shadow-lg active:shadow-sm"
  >
    @d3j1x
  </a>
  <h1
    class="pt-4 pb-8 bg-gradient-to-br dark:from-white from-black via-[#707070] to-[#ffffff] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
  >
    I'm Shiheb Din
  </h1>

  <div class="flex flex-col grow">
    <div class="rounded-full overflow-hidden mb-5">
    <a href="https://github.com/d3j1x" class="">
      <img
        src={logo}
        alt="d3j1x logo"
        class="text-white dark:text-white w-80 sm:w-96   transform hover:scale-125  transition ease-in-out duration-300"
        
      />
    </a>
    </div>
  
    <!-- hover:bg-opacity-100 hover:bg-opacity-100 -->
    

  <div
    class="flex flex-col items-center w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
  >
    <div class="mb-6 text-lg text-center font-bold sm:text-xl">
      Cybersecurity Specialist !
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
  >
    <div class="flex items-center justify-center my-2">
      <span class="font-bold">CONTACT</span>
      <a
        href="https://facebook.com/profile.php?id=100073939376761"
        class="flex items-center font-extrabold underline transition-colors underline-offset-4 dark:hover:text-white hover:text-black"
      >
      <img src={fblogo} alt="fb logo" class="h-6 mx-2" />
      <p>ME</p>
    </a>
    </div>

    <div class="flex items-center justify-center my-2">
      <span class="font-bold">Built with</span>
      <a
        href="https://kit.svelte.dev/"
        class="flex items-center font-extrabold underline transition-colors underline-offset-4 dark:hover:text-white hover:text-black"
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
      <img src={ghlogo} alt="GitHub Logo" class="h-6 dark:invert" />
      <p class="font-light">Source</p>
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
