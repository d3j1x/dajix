<script>
  import { Badge } from 'flowbite-svelte';
</script>



<main
  class="mainClass"
>




<!-- <div class="text-center text-4xl  font-extrabold sm:text-5xl">P R O J E C T S</div> -->




<div class="titleClass">C O N T A C T</div>

<div class="flex text-center justify-start mx-10 md:mx-20 lg:mx-32 text-xl mb-5 font-bold">
  <a  href="/about/pricing"><Badge rounded color="green" class="px-5 text-lg font-bold">Pricing</Badge></a>
</div>

<div class="py-10 justify-center items-center">

  

<form
class="dark:bg-black"
action="https://formspree.io/f/mqkveanz"
method="POST"
>
<label>
  Your email:
  <input class="text-black font-semibold" type="email" name="email">
</label>
<label>
  Your message:
  <textarea class="text-black text-xl" name="message"></textarea>
</label>
<!-- your other form fields go here -->
<button type="submit">Send</button>
</form>

</div>

</main>





<style>

    /* Style the form container */
    form {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
    }

    /* Style the form labels */
    label {
      display: block;
      margin-bottom: 10px;
    }

    /* Style the form inputs */
    input,
    textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
      
    }

    /* Style the form textarea */
    textarea {
      resize: vertical;
      height: 150px;
    }

    /* Style the submit button */
    button[type="submit"] {
      background-color: #4CAF50;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }

    button[type="submit"]:hover {
      background-color: #45a049;
    }

</style>