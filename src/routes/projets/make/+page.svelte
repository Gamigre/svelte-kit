<script lang="ts">
    import VideoPlayer from 'svelte-video-player';
    let timeDisplay = true;
    let loop = true;
  </script>
  
  
  <div class="column" id="showcase">
    <div class="showcase_picture_wrapper" style=" width:100%; margin: 0 auto;">
        <VideoPlayer poster="../vid/makeorg-thumb.jpg" source="../vid/kezako_makeorg_crf17.mp4" color="tomato" controlsHeight="3em" {timeDisplay} {loop}/>
  </div>

    <div class="showcase" id="showcase_text">
        <h2 id="showcase_title">Kézako pour Make.org (2018)</h2>
       <div id="showcase_desc_wrapper">
        <p id="showcase_desc">  Make.org est une start-up qui encourage l'action citoyenne au moyen d'une plateforme en ligne. <br>Cette vidéo réalisée avec Maxime Genier sous la Tutelle de Nicolas Chan explique le fonctionnement et le processus des actions.<br>
        </p>
         </div>
    </div>
</div>

<style>

  </style>