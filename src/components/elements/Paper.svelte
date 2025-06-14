<script>
    import { onMount } from 'svelte';

	let { children } = $props();
    let visible = $state(false);
    let paper;

    const handleScroll = () => {
        if (paper.offsetTop - window.innerHeight < window.scrollY) {
            visible = true;
            window.removeEventListener('scroll', handleScroll);
        }
    };

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    });
</script>

<div class="paper" bind:this={paper}>
    <div>
        <div class="content" class:visible={visible}>
            {@render children()}
        </div>
    </div>
</div>

<style lang="sass">
    @use "../../common/sass/assets.sass" as *

    .paper
        position: sticky
        background-image: $texture
        background-size: 100%
        box-shadow: 0 -8px 16px 4px #14175326
        min-height: calc(100% - 310px)

        @media (min-width: 767px)
            min-height: calc(100% - 580px)

        & > div
            background: radial-gradient(#eae3c74d, #c9b288e6 160%)
            color: #3f1b1d
            box-shadow: inset 0 8px 16px 4px rgb(218 218 218)
            height: 100%

    .content
        height: 100%
        opacity: 0
        transition: opacity 1.4s ease

        &.visible
            opacity: 1

</style>