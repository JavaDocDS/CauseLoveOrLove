<div class="telegram">
    <h2>Подтверждение</h2>
    <div>
        <p>Дорогие гости!<br>Мы создали группу в Telegram,<br>для актуальной информации или возможных изменений,<br>где также можно будет добавлять фото и видео со свадьбы.</p>
        <p>Подтвердите, пожалуйста,<br> своё присутствие, вступив в группу для гостей.</p>
        <a href="https://t.me/+1fzNH7IC1SozMzZi" target="_blank"><button>Вступить</button></a>
    </div>
</div>

<style lang="sass">
    @use "../../common/sass/mixins.sass" as *

    .telegram
        @include block()
        
        & > h2
            @include font-title()

        & > div
            display: flex
            flex-wrap: wrap
            justify-content: center
            flex-direction: column
            align-items: center
            gap: 20px
            padding: 12px

            & > p
                margin: 0
                @include font-text()

            & > a > button
                @include font-bold()
                @include button()

                &:hover
                    @include button-hover()
</style>