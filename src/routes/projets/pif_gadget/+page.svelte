<script lang="ts">
    import VideoPlayer from 'svelte-video-player';
    let timeDisplay = true;
    let loop = true;
  </script>
  
 
<div class="column" id="showcase">
    <div id="showcase_picture_wrapper" style="max-width: 80vh; margin: 0 auto;">
        <div class="showcase_picture">
        <VideoPlayer poster="../vid/pif_loup-thumb.jpg" source="../vid/pif_loup_crf25.mp4" width="9" height="16" color="tomato"  controlsHeight="3em" {timeDisplay} {loop}/>
        </div>
        <div class="showcase_picture">
        <VideoPlayer poster="../vid/pif_tours-thumb.jpg" source="../vid/pif_tours_crf25.mp4" width="9" height="16" color="tomato" playerBgColor="white"  controlsHeight="3em" {timeDisplay} {loop}/>
    </div>

</div>

    <div class="showcase" id="showcase_text">
        <h2 id="showcase_title">Vidéos en réalité augmentée pour Pif Planet (2018)</h2>
       <div id="showcase_desc_wrapper">
        <p id="showcase_desc">  Pour le lancement de la toute nouvelle formule du magazine jeunesse Pif Gadget, renommé Pif Planet, j'ai réalisé des vidéos en réalité augmentée qui semblent sortir des pages du magazine. <br> Vidéos du numéro 0, distribué à la fête de l'Humanité
        </p>
         </div>
    </div>
</div>

<style>
    #showcase_picture_wrapper{display:flex; width:100%;}
    .showcase_picture{width: 19vw; padding:3px;
    border:1px indianred solid; border-radius:10px;}

  </style>