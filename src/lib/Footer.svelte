<script>

  /**
	 * @type {any}
	 */
   export let scrollTo;
  // @ts-ignore
  function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }
</script>

<footer class="bg-black">
  <div class="mx-auto max-w-7xl overflow-hidden py-12 px-6 lg:px-8">
    <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
      <div class="px-5 py-2">
        <a href="/" class="text-base text-gray-500 hover:text-cyan-400">About</a>
      </div>

      <div class="px-5 py-2">
        <a href="#projects" on:click|preventDefault={scrollTo} class="text-base text-gray-500 hover:text-cyan-400">Projects</a>
      </div>

      <div class="px-5 py-2">
        <a href="#languages" on:click|preventDefault={scrollTo} class="text-base text-gray-500 hover:text-cyan-400">Languages</a>
      </div>
    </nav>
    <div class="mt-8 flex justify-center space-x-6">

      <a href="https://www.linkedin.com/in/jake-schlosser-87ba7819b/" class="text-cyan-400 hover:text-gray-500 hover:opacity-50">
        <span class="sr-only">LinkedIn</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-cyan-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>

      </a>

      <a href="https://github.com/jschlosser11" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">GitHub</span>
        <svg class="h-6 w-6 text-cyan-400 hover:opacity-50" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
        </svg>
      </a>

      <a href="images/resume.pdf" download="Jake's Resume" class="text-gray-400 hover:text-gray-500 hover:opacity-50">
        <span class="sr-only">Resume</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-cyan-400 hover:opacity-50">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>

      </a>
    </div>
    <p class="mt-8 text-center text-base text-gray-400">&copy; 2022 Jacob Schlosser, All rights reserved.</p>
  </div>
</footer>
