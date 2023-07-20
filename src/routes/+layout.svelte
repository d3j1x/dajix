<script>
	import "../app.css";

	import logo from '$lib/img/logo.jpeg';

	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
	import { DarkMode } from 'flowbite-svelte';

  	let btnClass = 'fixed top-20 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2 z-40';

</script>

<div>

	<Navbar let:hidden let:toggle class="fixed z-50">
		<NavBrand href="/">
		  <img
			src={logo}
			class="mr-3 h-11 sm:h-14 rounded-full"
			alt="Logo"
		  />
		  <span class="self-center whitespace-nowrap text-xl font-semibold sm:font-bold dark:text-white">
			D a j i x
		  </span>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
		  <NavLi href="/" active={true}>Home</NavLi>
		  <NavLi href="/projects">Projects</NavLi>
		  <NavLi href="/services">Services</NavLi>
		  <NavLi href="/pricing">Pricing</NavLi>
		  <NavLi href="/contact">Contact</NavLi>
		  <NavLi href="/about">About</NavLi>
		</NavUl>
	  </Navbar>

	<DarkMode {btnClass} />


	<main>
		<slot />
	</main>

	
</div>

<style>
	
</style>
