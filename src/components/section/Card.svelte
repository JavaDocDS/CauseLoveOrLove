<script>
    import { onMount } from 'svelte';

    let visible = $state(false);

    onMount(() => {
        visible = true;
    });
</script>

<div class="card" class:visible={visible}>
    <div class="angle top"></div>
    <div class="title">
        <div>Дмитрий</div>
        <div>и</div>
        <div>Арина</div>
    </div>
    <div class="angle bottom"></div>
    <div class="date">12.10.2025</div>
    <div class="text">листайте вниз</div>
</div>

<style lang="sass">
    @use "../../common/sass/assets.sass" as *
    @use "../../common/sass/mixins.sass" as *

    .card
        position: relative
        margin: 0 auto
        @include font-beautiful()
        margin-bottom: 40px
        transform: translateY(40px)
        transition: transform 1.4s ease

        &.visible
            transform: translateY(0)

    .title
        display: flex
        flex-direction: column
        padding: 70px
        @include width-limit()

        & > div:nth-child(1)
            text-align: right

        & > div:nth-child(2)
            text-align: center

    .date
        position: relative
        top: -48px
        text-align: center
        @include font-date()

    .text
        @include font-bold()
        position: absolute
        bottom: 0px
        width: 100%
        font-size: 14px
        text-align: center
    
    .angle
        position: absolute
        height: 80px
        width: 80px
        background-image: $angle
        background-size: 100%

        @media (min-width: 767px)
            width: 100px
            height: 100px
    
        &.top
            top: 15px
            left: 15px
            transform: rotate(270deg)

            @media (min-width: 767px)
                left: 70px
    
        &.bottom
            bottom: 90px
            right: 15px
            transform: rotate(90deg)

            @media (min-width: 767px)
                right: 70px
</style>