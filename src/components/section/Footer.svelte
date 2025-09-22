<script>
    const deadline = new Date("2025-10-12T16:00:00").getTime();

	let d = $state(0);
	let h = $state(0);
	let m = $state(0);
	let s = $state(0);

    const timer = setInterval(function () {
        const now = new Date().getTime();
        const diff = deadline - now;

        if (diff <= 0) {
            clearInterval(timer);
            return;
        }

        d = Math.floor(diff / (1000 * 60 * 60 * 24));
        h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        m = Math.floor((diff / (1000 * 60)) % 60);
        s = Math.floor((diff / 1000) % 60);
    }, 1000);
</script>

<div class="footer">
    <h2>До свадьбы</h2>
    <p>осталось</p>
    <div>
        <span>{d}</span>|<span>{h}</span>|<span>{m}</span>|<span>{s}</span>
    </div>
    <h3>Ждём Вас!</h3>
</div>

<style lang="sass">
    @use "../../common/sass/mixins.sass" as *

    .footer
        @include block()
        
        & > h2
            @include font-title()
        
        & > h3
            @include font-beautiful()
            font-size: 52px
            font-weight: 400
            text-align: center
            margin-top: 80px

        & > p
            margin: 0
            @include font-text()
            font-size: 24px

        & > div
            display: flex
            justify-content: center
            gap: 12px
            padding: 32px
            @include font-date()
            font-size: 32px

            & > span
                position: relative
                width: 60px
                
                &:after
                    content: ""
                    @include font-text()
                    font-size: 16px
                    width: 100%
                    position: absolute
                    left: 0
                    bottom: 0

                &:nth-child(1)::after
                    content: "дней"
                    left: 0
                    bottom: -20px

                &:nth-child(2)::after
                    content: "часов"
                    left: 0
                    bottom: -20px

                &:nth-child(3)::after
                    content: "минут"
                    left: 0
                    bottom: -20px

                &:nth-child(4)::after
                    content: "секунд"
                    left: 0
                    bottom: -20px

    </style>