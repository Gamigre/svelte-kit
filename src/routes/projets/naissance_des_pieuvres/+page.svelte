<script lang="ts">
  import VideoPlayer from 'svelte-video-player';
  let timeDisplay = true;
  let loop = true;
</script>


<div class="column" id="showcase">
  <div id="showcase_picture_wrapper" style=" width:100%; margin: 0 auto;">
      <VideoPlayer poster="../vid/generique-thumb.jpg" source="../vid/generique_crf28.mp4" color="tomato" controlsHeight="3em" {timeDisplay}/>
</div>

    <div class="showcase" id="showcase_text">
        <h2 id="showcase_title">Naissance des pieuvres (2020)</h2>
       <div id="showcase_desc_wrapper">
        <p id="showcase_desc"> Avec <a href="https://www.behance.net/zz_lpb">Zelly Parent</a>, nous avons imaginé notre version du générique du film <br> <i>Naissance des pieuvres</i> de Celine Sciamma. <br> Réalisé lors d'un workshop d'une semaine aux Gobelins.
        </p>
         </div>
    </div>
</div>

<style>
a{color:indianred}
  </style>