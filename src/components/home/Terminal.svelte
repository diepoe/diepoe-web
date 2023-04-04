<script>
    import Typewriter from "svelte-typewriter";
</script>

<div class="w-full mx-2 my-4">
    <div
        class="px-5 pt-4 pb-6 overflow-hidden font-mono text-xs subpixel-antialiased leading-normal text-gray-100 bg-black  inverse-toggle md:text-base lg:text-lg ring-black ring-2 ring-offset-2 border-2 border-white"
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
                <p class="pl-2">echo <span class="text-[fuchsia]">$GITHUB</span></p>
            </Typewriter>
        </div>
        <Typewriter cursor={false} interval={15} delay={5000}>
            <div class="flex justify-center mt-4">
                <div
                    class="flex flex-wrap justify-center max-w-full pl-2 space-x-4 text-justify align-middle md:justify-start"
                >
                    <div class="flex flex-row space-y-1 md:space-x-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="hidden stroke-white"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                            />
                        </svg>
                        <a
                            href="https://github.com/diepoe"
                            target="_blank"
                            rel="noopener"
                            class="underline"
                        >
                            diepoe</a
                        >
                    </div>
                    <br />
                </div>
            </div>
        </Typewriter>
    </div>
</div>
