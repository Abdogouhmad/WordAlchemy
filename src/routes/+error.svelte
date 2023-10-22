<script>
	import { page } from '$app/stores';
</script>

<div class="flex items-center justify-center h-screen">
	<div class="">
	  <div class="flex flex-col items-center">
		<h1 class="font-bold text-6xl text-blue-500 lg:text-8xl">{$page.status}</h1>
  
		<h6 class="mb-2 text-2xl font-bold text-center text-black md:text-4xl lg:text-6xl">
		  <span class="text-red-500">Oops!</span> Page {$page.error.message}
		</h6>
  
		<p class="mb-8 text-center text-black md:text-lg lg:text-3xl">
		  The page you’re looking for doesn’t exist.
		</p>
  
		<a
		  href="/"
		  class="px-6 py-2 text-base font-semibold text-black bg-blue-500 rounded-full hover:bg-blue-600"
		  >Go home</a
		>
	  </div>
	</div>
  </div>
