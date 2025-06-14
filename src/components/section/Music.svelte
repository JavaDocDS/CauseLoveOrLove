<script>
    import music from '../../../assets/audio/AllThatIWant.mp3';
    let button;
    let audio;

    function toggleMusic() {
        button.classList.toggle("active");
        if(button.classList.contains("active")) {
            audio.play();
        } else {
            audio.pause();
        }
    }
</script>

<div class="music">
    <div>
        <p>Если музыка Вас отвлекает, ее можно <br>отключить, нажав на кнопку</p>
    </div>
    <button class="active" bind:this={button}  on:click={toggleMusic} aria-label="music"></button>
    <audio autoplay bind:this={audio}>
        <source src="{music}">
    </audio>
</div>

<style lang="sass">
    @use "../../common/sass/assets.sass" as *
    @use "../../common/sass/mixins.sass" as *
    
    .music
        position: relative
        display: flex
        justify-content: center
        align-items: center
        gap: 24px
        @include block()
        padding: 60px 0

        &:before
            content: ""
            position: absolute
            top: 20px
            width: 2px
            height: 32px
            background: #3f1b1d

        &:after
            content: ""
            position: absolute
            bottom: 20px
            width: 2px
            height: 32px
            background: #3f1b1d

        & > div
            @include font-text()
            font-size: 16px

        & > button
            width: 48px
            height: 48px
            border-radius: 50%
            border: 2px solid #3f1b1d
            background-image: $musicOff
            background-size: 100%

            &.active
                background-image: $musicOn

</style>