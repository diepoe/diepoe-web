<script>
    import Typewriter from "svelte-typewriter";
</script>

<div class="w-full mx-2 my-4">
    <div
        class="px-5 pt-4 pb-6 overflow-hidden font-mono text-xs subpixel-antialiased leading-normal text-gray-100 bg-black inverse-toggle md:text-base lg:text-lg ring-black ring-2 ring-offset-2 border-2 border-white"
    >
        <div class="flex mb-2 top invisible">
            <div class="w-3 h-3 bg-red-500 rounded-full" />
            <div class="w-3 h-3 ml-2 bg-yellow-400 rounded-full" />
            <div class="w-3 h-3 ml-2 bg-green-500 rounded-full" />
        </div>
        <div class="flex justify-start mt-4">
            <span class="text-green-400">computer:~$</span>
            <Typewriter cursor={true} interval={50}>
                <p class="pl-2">
                    echo <span class="text-yellow-300 dark:text-yellow-300"
                        >"Herzlich Willkommen 👋🏻"</span
                    >
                    <br />
                </p>
            </Typewriter>
        </div>
        <div class="flex justify-start mt-4">
            <Typewriter cursor={false} interval={15} delay={2000}>
                <p class="pl-2">
                    <span class="text-yellow-300 dark:text-yellow-300"
                        >"Herzlich Willkommen 👋🏻"</span
                    >
                    <br />
                </p>
            </Typewriter>
        </div>
        <div class="flex justify-start mt-4">
            <Typewriter cursor={false} interval={15} delay={3000}>
                <span class="text-green-400">computer:~$</span>
            </Typewriter>
            <Typewriter cursor={false} interval={50} delay={4000}>
                <p class="pl-2">
                    find <span class="text-yellow-700">Cookies</span>
                </p>
            </Typewriter>
        </div>
        <div class="flex justify-start mt-4">
            <Typewriter cursor={false} interval={30} delay={5000}>
                <p class="pl-2">
                    <span class="text-red-500">Error:</span> Diese Website nutzt
                    keine Cookies 🍪 🚫
                    <br />
                </p>
            </Typewriter>
        </div>
        <div class="flex justify-start mt-4">
            <Typewriter cursor={false} interval={15} delay={6500}>
                <span class="text-green-400">computer:~$</span>
            </Typewriter>
            <Typewriter cursor={false} interval={50} delay={7500}>
                <p class="pl-2">
                    echo <span class="text-[fuchsia]">$GITHUB</span>
                </p>
            </Typewriter>
        </div>
        <Typewriter cursor={false} interval={15} delay={8500}>
            <div class="flex justify-start mt-4">
                <a
                    href="https://github.com/diepoe"
                    target="_blank"
                    rel="noopener"
                    class="underline"
                >
                    diepoe
                </a>
                <br />
            </div>
        </Typewriter>
    </div>
</div>
