<script>
    import Paper from './elements/Paper.svelte';
    import Pattern from './elements/Pattern.svelte';
    import Photo from './elements/Photo.svelte';

    import Card from './section/Card.svelte';
    import Music from './section/Music.svelte';
    import Invitation from './section/Invitation.svelte';
    import Calendar from './section/Calendar.svelte';
    import Location from './section/Location.svelte';
    import Schedule from './section/schedule/Schedule.svelte';
    import Dresscode from './section/Dresscode.svelte';
    import Gifts from './section/Gifts.svelte';
    import Telegram from './section/Telegram.svelte';
    import Footer from './section/Footer.svelte';
</script>

<div>
    <Photo id="photo1" />
    <Paper>
        <Card />
        <Music />
        <Pattern />
        <Invitation />
    </Paper>
    <Photo id="photo2" />
    <Paper>
        <Pattern />
        <Calendar />
    </Paper>
    <Photo id="photo3" />
    <Paper>
        <Pattern />
        <Location />
    </Paper>
    <Photo id="photo4" />
    <Paper>
        <Pattern />
        <Schedule />
    </Paper>
    <Photo id="photo5" />
    <Paper>
        <Pattern />
        <Dresscode />
    </Paper>
    <Photo id="photo6" />
    <Paper>
        <Pattern />
        <Gifts />
    </Paper>
    <Photo id="photo8" />
    <Paper>
        <Pattern />
        <Footer />
    </Paper>
</div>