<script>
	import Divider from "./Divider.svelte";

 const languages = [
    {
        'image': 'images/html.png',
        'link': 'https://www.w3schools.com/html/'
    },
    {
        'image': 'images/css.png',
        'link': 'https://www.w3schools.com/css/'
    },
    {
        'image': 'images/javascript.png',
        'link': 'https://www.javascript.com/'
    },
    {
        'image': 'images/tailwind.png',
        'link': 'https://tailwindcss.com/'
    },
    {
        'image': 'images/svelte.png',
        'link': 'https://kit.svelte.dev/'
    },
    {
        'image': 'images/react.png',
        'link': 'https://reactjs.org/'
    },
    {
        'image': 'images/docker.webp',
        'link': 'https://www.docker.com/'
    },
    {
        'image': 'images/tableplus.png',
        'link': 'https://tableplus.com/'
    },
    {
        'image': 'images/supabase.png',
        'link': 'https://supabase.com/'
    }, 
    {
        'image': 'images/git.png',
        'link': 'https://git-scm.com/'
    },
    {
        'image': 'images/gitlab.png',
        'link': 'https://about.gitlab.com/why-gitlab/?utm_medium=cpc&utm_source=google&utm_campaign=brand_amer_rtg_rsa_br_phrase&utm_content=why-gitlab_digital_x-rtg_english_&utm_term=gitlab&_bt=626418323987&_bk=gitlab&_bm=e&_bn=g&_bg=141356749679&gclid=CjwKCAiAqt-dBhBcEiwATw-ggMdwrOnvABKeRH--UBSzy_q_DjDOjKykssRrJrdTVISOSoFLM-MGaRoCmoQQAvD_BwE'
    },
    {
        'image': 'images/figma.png',
        'link': 'https://www.figma.com/'
    }
]
</script>



  <div class="mx-auto max-w-5xl py-12 px-6 lg:py-16 lg:px-8">
    <Divider title="Languages & Platforms" />
    <div class="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 lg:mt-8">
        {#each languages as language}
            <!-- svelte-ignore security-anchor-rel-noreferrer -->
            <a href={language.link} target="_blank">
                <div class="col-span-1 flex justify-center bg-black py-8 px-8 hover:border-b-cyan-400 hover:border-b hover:cursor-pointer">
                    <img src={language.image} alt="platforms-icon" class="max-h-20">
                </div>
            </a>
        {/each}
    </div>
  </div>