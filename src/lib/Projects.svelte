<script>
	import Divider from "./Divider.svelte";

    const projects = [
        {
            id: '1',
            image: "images/allstar.png",
            url: 'https://www.allstarexteriorwash.com/'
        },
        {
            id: '2',
            image: 'images/disco.png',
            url: 'https://www.timetodisco.com/'
        },
        {
            id: '3',
            image: 'images/mandolas.png',
            url: 'https://mandolas.com/'
        },
        {
            id: '4',
            image: 'images/calc.png',
            url: 'https://mitcalculator.vercel.app/'
        },
        {
            id: '5',
            image: 'images/amp.png',
            url: 'https://american-made-products.info/'
        },
        {
            id: '6',
            image: 'images/flohana.png',
            url: '#'
        }
    ]

</script>

<section class="overflow-hidden text-gray-700">
    <div class="container px-5 mx-auto lg:pt-24 lg:px-32 ">
      <Divider title="Projects"/>
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="md:flex md:flex-wrap md:w-1/2">
        
          <div class="md:w-1/2 w-full p-2">
            <a href="https://mandolas.com/" target="_blank" rel="noreferrer">
              <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg transition ease-in-out delay-150 hover:-translate-y-4 hover:shadow-cyan-400 hover:shadow-lg"
                src="images/mandolas.png">
            </a>
          </div>
        <div class="md:w-1/2 w-full p-2">
          <a href="https://mitcalculator.vercel.app/" target="_blank" rel="noreferrer">
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg transition ease-in-out delay-150 hover:-translate-y-4 hover:shadow-cyan-400 hover:shadow-lg"
              src="images/calc.png">
          </a>
        </div>
        <div class="w-full p-2">
          <a href="https://american-made-products.info/" target="_blank" rel="noreferrer">
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg transition ease-in-out delay-150 hover:-translate-y-2 hover:shadow-cyan-400 hover:shadow-lg"
              src="images/amp.png">
          </a>
        </div>
      </div>
      <div class="md:flex md:flex-wrap md:w-1/2">
        <div class="w-full p-2">
          <a href="https://www.timetodisco.com/" target="_blank" rel="noreferrer">
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg transition ease-in-out delay-150 hover:-translate-y-4 hover:shadow-cyan-400 hover:shadow-lg"
              src="images/disco.png">
          </a>
        </div>
        <div class="md:w-1/2 w-full p-2">
          <a href="https://www.chinovalleyranchers.com/">
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg transition ease-in-out delay-150 hover:-translate-y-2 hover:shadow-cyan-400 hover:shadow-lg"
              src="images/chino.png">
          </a>
        </div>
        <div class="md:w-1/2 w-full p-2">
          <a href="https://www.allstarexteriorwash.com/" target="_blank" rel="noreferrer">
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg transition ease-in-out delay-150 hover:-translate-y-2 hover:shadow-cyan-400 hover:shadow-lg"
              src="images/allstar.png">
          </a>
        </div>
      </div>
    </div>
  </div>
</section>