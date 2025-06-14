<div class="gifts">
    <h2>Подарки</h2>
    <div>
        <p>В качестве подарка будем рады <br>вкладу в бюджет нашей семьи. <br>Он точно поможет воплотить <br>нашу мечту в реальность.</p>
    </div>
</div>

<style lang="sass">
    @use "../../common/sass/mixins.sass" as *

    .gifts
        @include block()

        & h2
            @include font-title()

        & p
            @include font-text()
</style>