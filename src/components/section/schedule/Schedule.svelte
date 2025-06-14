<script>
    import Item from './Item.svelte';
</script>

<div class="schedule">
    <h2>Расписание</h2>
    <div class="list">
        <Item isReverse="false" image="i1">
            <h3>16:15 фуршет</h3>
            <p>Встречаемся, знакомимся и<br>настраиваемся на душевную свадьбу</p>
        </Item>
        <Item isReverse="true" image="i2">
            <h3>17:00 церемония</h3>
            <p>Вы станете свидетелями того, <br>как мы скажем друг другу "да"</p>
        </Item>
        <Item isReverse="false" image="i3">
            <h3>17:30 банкет</h3>
            <p>От души посмеёмся, повеселимся<br> и сделаем этот вечер незабываемым</p>
        </Item>
        <Item isReverse="true" image="i4">
            <h3>21:00 торт</h3>
            <p>Сладкая традиция, которую <br>мы не можем пройти стороной</p>
        </Item>
        <Item isReverse="false" image="i5">
            <h3>23:00 окончание мероприятия</h3>
            <p>Даже такой прекрасный<br> вечер может закончиться</p>
        </Item>
    </div>
</div>

<style lang="sass">
    @use "../../../common/sass/mixins.sass" as *

    .schedule
        @include block()
        padding-bottom: 30px
        
        & > h2
            @include font-title()
            margin-bottom: 24px  

        & h3
            margin: 12px 0 4px 0px
            @include font-title()
            font-size: 28px

        & p
            margin: 0
            @include font-text()

    .list
        position: relative
        @include width-limit()
        max-width: 500px
</style>