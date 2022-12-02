<script lang="ts">
   import VideoPlayer from 'svelte-video-player';
   let timeDisplay = true;
   let loop = true;
</script>

<div class="column" id="showcase">
  <div class="showcase_picture_wrapper" style=" width:100%; margin: 0 auto;">
      <VideoPlayer poster="../vid/ianation-thumb.jpg" source="../vid/ianation_crf28.mp4" color="tomato" controlsHeight="3em" {timeDisplay} {loop}/>
</div>

  <div class="showcase" id="showcase_text">
      <h2 id="showcase_title">I.A. Nation (2018)</h2>
     <div id="showcase_desc_wrapper">
      <p id="showcase_desc">  AAlors que les intelligences artificielles sont de plus en plus présentes autour de nous, ce projet tente de répondre à une interrogation souvent soulevée, comment ces machines apprennent-elles ?          
        <br> Pendant quelques dizaines de secondes, on suit une camera, l’œil de l’IA, qui observe, analyse, détecte pour croiser toutes les données récoltées et comprendre ce qui l’entoure.
        <br>La vidéo a pour but d’illustrer le processus du <i>machine learning.</i> <br>
      </p>
       </div>
  </div>
</div>

<style>
</style>