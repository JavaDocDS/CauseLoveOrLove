<script>
    import logo from '../../../assets/images/location/logo.png'
</script>

<div class="location">
    <h2>Локация</h2>
    <div>
        <p>Наш праздник пройдёт<br>в ресторане</p>
        <img src={logo} class="logo" alt="Птички и Ягоды" />
        <p class="address">по адресу:<br>Санкт-Петербург<br>(Зеленогорск), <br>Приморское ш. 572</p>
        <a href="https://yandex.ru/maps/org/ptichki_i_yagody/220232493304/?ll=29.665528%2C60.191581&mode=search&sctx=ZAAAAAgBEAAaKAoSCY9WtaSjUD5AEQgB%2BRIq%2BE1AEhIJj3IwmwDD7j8R36RpUDQP0j8iBgABAgMEBSgKOABAvKICSAFqAnJ1nQHNzMw9oAEAqAEAvQH0r7nOwgEG%2BNGEt7QGggIa0J%2FRgtC40YfQutC4INC4INGP0LPQvtC00YuKAgCSAgCaAgxkZXNrdG9wLW1hcHOqAk4yMjMwODI5OTQ5MSwyMTg1NTA5Mjg5LDU4MTMzMTM0Mzg3LDgzMDg5MTg4NSw3NTE0NzI5MTkzMiwyMzA5NTY3NjM3LDEwNzU0NzM2NjI%3D&sll=29.665528%2C60.191581&sspn=0.030041%2C0.008751&text=%D0%9F%D1%82%D0%B8%D1%87%D0%BA%D0%B8%20%D0%B8%20%D1%8F%D0%B3%D0%BE%D0%B4%D1%8B&z=16" target="_blank"><button>Посмотреть на карте</button></a>
    </div>
</div>

<style lang="sass">
    @use "../../common/sass/mixins.sass" as *

    .location
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

            & > p
                margin: 0
                @include font-text()
                font-size: 24px

                &.address
                    font-size: 20px
                    margin-bottom: 12px

            & > a > button
                @include font-bold()
                @include button()

                &:hover
                    @include button-hover()
                    
</style>