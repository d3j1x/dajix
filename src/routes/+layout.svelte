<script>


	import { t, locale, locales } from "./i18n";
	

	import "../app.css";

	import logo from '$lib/img/logo.png';

	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
	import { DarkMode } from 'flowbite-svelte';

	import { CloseButton } from 'flowbite-svelte'

  	let btnClass = 'fixed top-20 ml-5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2 z-40';
	

</script>

<head>
	<!-- Other meta tags, styles, etc. -->
  
	<!-- Google AdSense code -->
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8680606694948950"
	   crossorigin="anonymous"></script>
</head>

<div>

	<div class="md:hidden">

	<Navbar let:hidden let:toggle class="fixed z-50">
		<NavBrand href="/">
		  <img
			src={logo}
			class="mr-3 h-11 sm:h-11 md:h-11 rounded-full"
			alt="Logo"
		  />
		  <span class="self-center whitespace-nowrap text-xl font-bold sm:font-bold dark:text-white">
			D a j i x
		  </span>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden} class="font-bold" >
		  <NavLi href="/" active={true} on:click={toggle}>{$t("homepage.home")}</NavLi>
		  <NavLi href="/projects" on:click={toggle}>{$t("homepage.projects")}</NavLi>
		  <NavLi href="/services" on:click={toggle}>{$t("homepage.services")}</NavLi>
		  <NavLi href="/about" on:click={toggle}>{$t("homepage.about")}</NavLi>
		  <CloseButton class="md:hidden" on:click={toggle} />
		</NavUl>
	</Navbar>
	</div>

	<div class="hidden md:block">

		<Navbar let:hidden let:toggle class="fixed z-50 md:h-16">
			<NavBrand href="/" class="md:pb-4">
			  <img
				src={logo}
				class="mr-3 h-11 sm:h-11 md:h-11 rounded-full"
				alt="Logo"
			  />
			  <span class="self-center whitespace-nowrap text-xl md:text-2xl lg:text-3xl font-bold sm:font-bold dark:text-white">
				D a j i x
			  </span>
			</NavBrand>
			<NavHamburger on:click={toggle} />
			<NavUl {hidden} class="font-semibold" >
			  <NavLi href="/" active={true} class="md:text-lg">{$t("homepage.home")}</NavLi>
			  <NavLi href="/projects" class="md:text-lg">{$t('homepage.projects')}</NavLi>
			  <NavLi href="/services" class="md:text-lg">{$t('homepage.services')}</NavLi>
			  <NavLi href="/about" class="md:text-lg">{$t('homepage.about')}</NavLi>
			  <CloseButton class="md:hidden" on:click={toggle} />
			</NavUl>
		</Navbar>
	
	</div>

	<!-- <div class="fixed right-0 top-20 z-50">
		<select class="bg-black" bind:value="{$locale}" on:change={handleChange}>
			{#each $locales as value}
			  <option value="{value}">{$t(`lang.${value}`)}</option>
			{/each}
		</select>
	</div> -->

	<!-- <div class="fixed top-0 z-50">
		<select class="bg-black" bind:value="{$locale}" on:change={handleChange}>
			<option value="en">English</option>
			<option value="cs">Česky</option>
		</select>
	</div> -->

	<!-- <div class="font-semibold fixed top-20 right-5 flex items-center justify-center bg-black z-40">
		<select class="border  dark:bg-black text-black dark:text-white m-0 p-0 pl-2" bind:value="{$locale}" on:change={handleChange}>
		  <option value="en">English</option>
		  <option value="ar">عربي</option>
		  <option value="ru">Русский</option>
		</select>
	</div> -->


	
	<DarkMode {btnClass} />



	<main class="justify-center items-center text-center m-auto">
		<slot />
	</main>



	<footer>
		<p class="text-sm font-extrabold opacity-100">© 2023 d3j1x. All rights reserved.</p>
	</footer>

	
</div>

<style> 



</style>
