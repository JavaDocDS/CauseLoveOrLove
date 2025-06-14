<div class="pattern"></div>

<style lang="sass">
    @use "../../common/sass/assets.sass" as *

    .pattern
        background-image: $pattern
        background-size: 70%
        background-position: center
        background-repeat: no-repeat
        padding: 60px 0

        @media (min-width: 767px)
            background-size: 50%
</style>