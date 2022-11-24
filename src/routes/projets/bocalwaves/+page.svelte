<script lang="ts">
    import VideoPlayer from 'svelte-video-player';
    let timeDisplay = true;
    let loop = true;
  </script>
  
 
<div class="column" id="showcase">
    <div id="showcase_picture_wrapper" style="max-width: 80vh; margin: 0 auto;">
        <VideoPlayer poster="../img/bocalwaves_thumb.jpg" source="../vid/acid_25.mp4" width="10" height="10" color="tomato"  controlsHeight="3em" {timeDisplay} {loop}/>
        <VideoPlayer poster="../img/bocalwaves_thumb.jpg" source="../vid/acid_2_25.mp4" width="10" height="10" color="tomato"  controlsHeight="3em" {timeDisplay} {loop}/>
        <VideoPlayer poster="../img/bocalwaves_thumb.jpg" source="../vid/bocalwaves_3.mp4" width="10" height="10" color="tomato"  controlsHeight="3em" {timeDisplay} {loop}/>

</div>

    <div class="showcase" id="showcase_text">
        <h2 id="showcase_title">Bocalwaves (2020--)</h2>
       <div id="showcase_desc_wrapper">
        <p id="showcase_desc"> <i>BocalWaves</i> est un script python, ou plûtot un processus créatif visant à faciliter la création de <i> glitch art </i> sans pour autant dénaturer cette forme d'art nuémrique en supprimant la part d'erreurs et d'imprévisibilité qui fait son interêt.<br> Mêlant Audacity, FFMPEG, SoX et nomacs, le script permet d'appliquer des effets audio à des images ou des vidéos selon des valeurs définies par l'utilisateur, générant ainsi des animations.<br> Le script et son mode d'emploi seront un jour disponible sur GitHub.
        </p>
         </div>
    </div>
</div>

<style>

  </style>

