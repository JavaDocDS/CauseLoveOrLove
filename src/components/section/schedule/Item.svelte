<script>
    import { onMount } from 'svelte';
    let {isReverse, image, children} = $props();
    let visible = $state(false);
    let content;

    const handleScroll = () => {
        if (content.offsetParent.offsetParent.offsetTop + content.offsetTop - 300 < window.scrollY) {
            visible = true;
            window.removeEventListener('scroll', handleScroll);
        }
    };

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
    });
</script>

<div class="item" class:visible={visible} bind:this={content}>
    {#if isReverse == "true"}
        <div class="arrow"></div>
        <div>
            <div class="image {image}"></div>
            {@render children()}
        </div>
    {:else}
        <div>
            <div class="image {image}"></div>
            {@render children()}
        </div>
        <div class="arrow"></div>
    {/if}
</div>

<style lang="sass">
    @use "../../../common/sass/assets.sass" as *
    @use "../../../common/sass/mixins.sass" as *

    .item
        position: relative
        width: 100%
        padding: 12px
        margin-bottom: 20px
        opacity: 0
        transition: opacity 2s ease

        &.visible
            opacity: 1
        
        & .image
            width: 270px
            height: 120px
            margin: 0 auto
            background-position: center center
            background-size: cover
            background-repeat: no-repeat
            border: 2px solid #3f1b1d
            border-radius: 30px
            &.i1
                background-image: $schedule1
                background-position: 0 -60px

            &.i2
                background-image: $schedule2

            &.i3
                background-image: $schedule3

            &.i4
                background-image: $schedule4

            &.i5
                background-image: $schedule5

        & .arrow
            background-image: $arrow
            background-size: 60%
            background-repeat: no-repeat
            background-position: bottom

            @media (min-width: 767px)
                background-size: 20%

        &:nth-child(odd)
            display: grid
            grid-template-columns: 300px 1fr

        &:nth-child(even)
            display: grid
            grid-template-columns: 1fr 300px

            & .arrow
                transform: scale(-1, 1)

        &:last-child

            & .arrow
                display: none


</style>