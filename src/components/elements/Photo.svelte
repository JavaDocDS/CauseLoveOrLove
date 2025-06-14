<script>
	let { id } = $props();
</script>

<div class="photo {id}"></div>

<style lang="sass">
    .photo
        position: sticky
        top: 0
        height: 310px
        background: #383838
        z-index: 0

        @media (min-width: 767px)
            height: 580px
    
</style>