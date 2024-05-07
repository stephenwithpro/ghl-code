<script>
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.releasesapp-button');
    button.addEventListener('click', () => {
        releasesapp.updates();
    });
});
</script>
