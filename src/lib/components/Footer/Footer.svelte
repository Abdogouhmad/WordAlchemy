<script>
    let year = new Date().getFullYear();
</script>

<style lang="postcss">
    body {
        @apply min-h-screen flex flex-col;
    }
    .contain {
        @apply flex justify-center items-center max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8;
    }
    .foot {
        @apply mt-auto bg-white dark:bg-black;
    }
</style>


<footer class="foot">
    <div class="contain ">
        <p>&copy; {year} WordAlchemy. All rights reserved.</p>
    </div>
</footer>
