<div class="dresscode">
    <h2>Dress code</h2>
    <h3>Cocktail</h3>
    <div>
        <p>Нам будет приятно, <br>если Вы поддержите стиль<br> торжества в своих нарядах.</p>
    </div>
    <div class="list">
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
    </div>
</div>

<style lang="sass">
    @use "../../common/sass/assets.sass" as *
    @use "../../common/sass/mixins.sass" as *
    
    .dresscode
        @include block()

        & h2
            @include font-title()

        & h3
            @include font-beautiful()
            font-size: 32px
            text-align: center

        & p
            @include font-text()

        & .list
            display: flex
            justify-content: center
            padding: 48px 0 20px

        & .color
            position: relative
            width: 70px
            height: 70px
            margin-left: -12px
            background-image: $canvas
            background-size: 100%
            background-position: center center
            background-repeat: no-repeat
            border: 2px solid #3f1b1d
            border-radius: 50%
            @include font-bold()

            &::before
                content: ""
                position: absolute
                left: 0
                text-align: center

            &:nth-child(1)::before
                content: "Шампань"
                top: -24px

            &:nth-child(2)::before
                content: "Слоновая кость"
                top: 70px

            &:nth-child(3)::before
                content: "Изумруд"
                top: -24px

            &:nth-child(4)::before
                content: "Кармин"
                top: 70px
                left: 6px

            &:nth-child(5)::before
                content: "Марсала"
                top: -24px

            &::after
                content: ""
                position: absolute
                left: 0
                width: 66px
                height: 66px
                border-radius: 50%

            &:nth-child(1)::after
                background-color: #f5dd794d

            &:nth-child(2)

                &::after
                    background-color: #af7b1b4d

            &:nth-child(3)
                
                &::after
                    background-color: #053527b3

            &:nth-child(4)

                &::after
                    background-color: #790013b3

            &:nth-child(5)::after
                background-color: #650018b3
</style>