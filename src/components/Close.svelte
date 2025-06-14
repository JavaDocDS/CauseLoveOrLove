<script>
    import Photo from './elements/Photo.svelte';
    import letter from '../../assets/images/letter.jpg'

	let { value = $bindable()} = $props();
    let visible = $state(true);

    function toggleMusic() {
        setTimeout(() => {
            value = true;
        }, 500)
        visible = false;
    }
</script>

<div class="close">
    <Photo id="photo1" />
    <div class="paper">
        <div>
            <button class="letter" class:visible={visible} onclick={toggleMusic} >
                <img src={letter} alt="Приглашение" />
                <div class="beautiful">Приглашение</div>
                <div class="text">Нажмите на конверт</div>
            </button>
        </div>
    </div>
</div>

<style lang="sass">
    @use "../common/sass/assets.sass" as *
    @use "../common/sass/mixins.sass" as *

    .close
        height: 100%

        & .paper
            position: sticky
            background-image: $texture
            background-size: 100%
            box-shadow: 0 -8px 16px 4px #14175326
            height: calc(100vh - 310px)

            @media (min-width: 767px)
                height: calc(100vh - 580px)

            & > div
                display: flex
                justify-content: center
                background: radial-gradient(#eae3c74d, #c9b288e6 160%)
                color: #3f1b1d
                box-shadow: inset 0 8px 16px 4px rgb(218 218 218)
                height: 100%

        & .letter
            position: absolute
            top: -20px
            width: 80%
            height: 214px
            max-width: 400px
            cursor: pointer
            z-index: 2
            box-shadow: 12px 8px 16px 4px rgb(18 18 18 / 30%)
            opacity: 0
            transition: opacity .5s ease

            & img
                width: 100%
                height: 100%

            @media (min-width: 767px)
                height: 287px

            &.visible
                opacity: 1

        & .text
            @include font-bold()
            position: absolute
            bottom: -36px
            width: 100%
            text-align: center

        & .beautiful
            @include font-beautiful()
            position: absolute
            top: 36px
            width: 100%
            font-size: 18px
            text-align: center
            color: darkgoldenrod
            text-shadow: 1px 1px #181818

            @media (min-width: 767px)
                top: 52px
                font-size: 20px
</style>