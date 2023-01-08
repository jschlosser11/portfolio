<script>
     let navLinks = [
        {
            'name': 'About',
            'link': '/'
        },
        {
            'name': 'Projects',
            'link': '#projects'
        },
        {
            'name': 'Languages',
            'link': '#languages'
        }
    ]

    let opened = false
    // @ts-ignore
    /**
	 * @type {any}
	 */
     export let scrollTo;

    const openNav = () => {
        opened = true
    }
     const closeNav = () => {
        opened = false
    }


</script> 


<div class="relative overflow-hidden bg-black">
  <div class="mx-auto max-w-7xl">
    <div class="relative z-10 bg-black pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
      <svg class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-black lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <div>
        <div class="relative px-6 pt-6 lg:px-8">
          <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div class="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div class="flex w-full items-center justify-between md:w-auto">
                <div class="-mr-2 flex items-center md:hidden">
                  <button on:click={() => openNav()} type="button" class={`inline-flex items-center justify-center rounded-md bg-black mt-4 p-2 text-white hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 border border-cyan-400 ${!opened ? 'inline-flex' : 'hidden'}`} aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <!-- Heroicon name: outline/bars-3 -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden md:block md:space-x-8 md:pr-4">
               {#each navLinks as links}
                  <a href={links.link} on:click|preventDefault={scrollTo} class="text-white font-bebas tracking-widest hover:border-b-cyan-400 hover:border-b px-3 py-2 text-lg" aria-current="page">{links.name}</a>
                {/each}
            </div>
          </nav>
        </div>
        <div class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
          <div class="overflow-hidden bg-black shadow-md ring-1 ring-black ring-opacity-5">
            <div class="flex items-center justify-between px-5 pt-4">
              <div class="-mr-2">
                <button on:click={() => closeNav()} type="button" class={`items-center justify-center rounded-md bg-black p-2 text-white hover:bg-cyan-400  focus:outline-none focus:ring-2 focus:ring-inset border border-cyan-400 focus:ring-cyan-500 ${opened ? 'inline-flex' : 'hidden'}`}>
                  <span class="sr-only">Close main menu</span>
                  <!-- Heroicon name: outline/x-mark -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            {#if opened}
                <div class="space-y-1 px-2 pt-2 pb-3 border-b border-r border-l border-cyan-400">
                    {#each navLinks as links}
                        <a href={links.link} on:click|preventDefault={scrollTo} class="font-bebas text-white hover:bg-cyan-400 block rounded-md px-3 py-2 text-lg tracking-wider" aria-current="page">{links.name}</a>
                    {/each}
            </div>
            {/if}
          </div>
        </div>
      </div>

      <main class="mx-auto mt-10 max-w-7xl px-6 sm:mt-12 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="flex justify-center">
            <img src="images/portrait.png" alt="portrait" class="h-56 shadow-cyan-400 shadow-lg mb-8 rounded-full block lg:hidden">
        </div>
        <div class="sm:text-center lg:text-left">
          <h1 class=" font-bold tracking-tight text-cyan-400  sm:text-5xl md:text-6xl">
            <span class="block xl:inline text-2xl tracking-wider opacity-50 font-bebas">My name is</span>
            <span class="block text-cyan-400 text-6xl xl:inline font-bebas tracking-wider">Jacob Schlosser.</span>
          </h1>
          <p class="mt-3 text-base text-white sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">I'm a passionate self taught front-end web developer with 3+ years of experience using JavaScript, HTML5, CSS3, and Tailwind to build all aspects of the user experience and user interface. On top of that, my development skills allowed me to build sites using Svelte, React, and SvelteKit. I've gained experience and used other platforms including Docker, TablePlus, Supabase, and Github/lab. I have also used Photoshop/Figma mockups to build entire websites and apps.</p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href="https://github.com/jschlosser11" target="_blank" rel="noreferrer" class="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-400 px-8 py-3 text-base font-medium text-white hover:bg-black hover:border hover:border-cyan-400 md:py-4 md:px-10 md:text-lg">Github</a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="images/resume.pdf" download="Jake's Resume" class="flex w-full items-center justify-center rounded-md border border bg-black border-cyan-400 border px-8 py-3 text-base font-medium text-white hover:bg-cyan-400 md:py-4 md:px-10 md:text-lg">Resume</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:block hidden">
    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src="images/portrait.png" alt="jake-portrait">
  </div>
</div>

