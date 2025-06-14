<script>
    import { onMount } from 'svelte';

    let visible = $state(false);
    let content;

    const handleScroll = () => {
        if (content.offsetTop - 200 < window.scrollY) {
            visible = true;
            window.removeEventListener('scroll', handleScroll);
        }
    };

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
    });
</script>

<div class="invitation" class:visible={visible} bind:this={content}>
    <h2>Дорогие родные<br> и близкие!</h2>
    <div>
        <p>Приглашаем Вас разделить <br>с нами радость особенного <br>для нас события и стать частью <br>нашей семейной истории!</p>
        <p>Совсем скоро состоится наша<br>СВАДЬБА!<br>И мы не представляем этот <br>праздник без Вас, близких и <br>дорогих нам людей.</p>
    </div>
</div>

<style lang="sass">
    @use "../../common/sass/mixins.sass" as *

    .invitation
        @include block()
        opacity: 0
        transition: opacity 1.5s ease

        &.visible
            opacity: 1

        & > h2
            @include font-title()

        & > div
            @include font-text()
</style>