<script>
    import Close from './components/Close.svelte';
    import Open from './components/Open.svelte';

    let isStart = $state(false);
</script>

<main>
    {#if isStart}
        <Open />
    {:else}
        <Close bind:value={isStart} />
    {/if}
</main>

<style lang="sass">
    main
        max-width: 700px
        height: 100%
        margin: 0 auto
        box-shadow: 12px 8px 16px 4px rgb(18 18 18 / 30%)
</style>