<div class="calendar">
    <h2>12 октября 2025</h2>
    <div class="table">
        <div class="row">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell">1</div>
            <div class="cell">2</div>
            <div class="cell">3</div>
            <div class="cell">4</div>
            <div class="cell">5</div>
        </div>
        <div class="row">
            <div class="cell">6</div>
            <div class="cell">7</div>
            <div class="cell">8</div>
            <div class="cell">9</div>
            <div class="cell">10</div>
            <div class="cell">11</div>
            <div class="cell marker">12</div>
        </div>
        <div class="row">
            <div class="cell">13</div>
            <div class="cell">14</div>
            <div class="cell">15</div>
            <div class="cell">16</div>
            <div class="cell">17</div>
            <div class="cell">18</div>
            <div class="cell">19</div>
        </div>
        <div class="row">
            <div class="cell">20</div>
            <div class="cell">21</div>
            <div class="cell">22</div>
            <div class="cell">23</div>
            <div class="cell">24</div>
            <div class="cell">25</div>
            <div class="cell">26</div>
        </div>
        <div class="row">
            <div class="cell">27</div>
            <div class="cell">28</div>
            <div class="cell">29</div>
            <div class="cell">30</div>
            <div class="cell">31</div>
            <div class="cell"></div>
            <div class="cell"></div>
        </div>
    </div>
</div>

<style lang="sass">
    @use "../../common/sass/assets.sass" as *
    @use "../../common/sass/mixins.sass" as *

    .calendar
        @include block()
        @include width-limit()

        & > h2
            @include font-title()

        & .table
            margin: 0px auto
            padding: 0 24px
            @include font-bold()
        
        & .row
            display: grid
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr

        & .cell
            padding: 12px

        & .marker
            margin: -4px
            padding: 16px
            background-image: $marker
            background-position: center center
            background-size: 98%
            background-repeat: no-repeat

            @media (min-width: 767px)
                background-size: 93%
</style>