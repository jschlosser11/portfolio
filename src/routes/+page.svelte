<script>
	import Projects from "../lib/Projects.svelte";
    import About from "../lib/About.svelte";
    import HeroNav from "../lib/HeroNav.svelte";
	import Languages from "../lib/Languages.svelte";
	import Footer from "../lib/Footer.svelte";

    

    // @ts-ignore
    function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
        el.scrollIntoView({
        behavior: 'smooth'
    });
  }


</script>

    <div class="bg-black">
        <div class="pb-12" id="about">
            <HeroNav scrollTo={scrollIntoView} />
        </div>
        <div id="projects" class="md:mb-36 mb-12">
            <Projects />
        </div>
        <div id="languages">
            <Languages />
        </div>
        <Footer scrollTo={scrollIntoView} />
    </div>

