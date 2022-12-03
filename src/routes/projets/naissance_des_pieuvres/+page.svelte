<script lang="ts">
  import VideoPlayer from 'svelte-video-player';
  let timeDisplay = true;
  let loop = true;
</script>

<div class="column" id="showcase">
  <div class="showcase_picture_wrapper" >
      <VideoPlayer poster="../vid/generique-thumb.jpg" source="../vid/generique_crf28.mp4" color="tomato" controlsHeight="3em" {timeDisplay}/>
</div>

  <div class="showcase" id="showcase_text">
      <h2 id="showcase_title">Naissance des pieuvres (2020)</h2>
     <div id="showcase_desc_wrapper">
      <p id="showcase_desc">  Avec <a href="https://www.behance.net/zz_lpb">Zelly Parent</a>, nous avons imaginé notre version du générique du film <br> <i>Naissance des pieuvres</i> de Celine Sciamma. Les silhouettes des mains viennent se rencontrer sous l'eau, troublant les reflets du texte<br> Réalisé lors d'un workshop d'une semaine aux Gobelins.<br>
      </p>
       </div>
  </div>
</div>

<style>

a{color:indianred}
</style>