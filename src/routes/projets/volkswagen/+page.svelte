<script lang="ts">
    import VideoPlayer from 'svelte-video-player';
    let timeDisplay = true;
    let loop = true;
  </script>

<div class="column" id="showcase">

        <div id="showcase_picture_wrapper" style="max-width: 80vh; margin: 0 auto;">
            <VideoPlayer poster="../vid/vw_car_1-thumb.jpg" source="../vid/vw_car_1.mp4" width="10" height="10" color="tomato"  controlsHeight="3em" {timeDisplay} {loop}/>
            <VideoPlayer poster="../vid/vw_car_2-thumb.jpg" source="../vid/vw_car_2.mp4" width="10" height="10" color="tomato"  controlsHeight="3em" {timeDisplay} {loop}/>
            <VideoPlayer poster="../vid/vw_car_3-thumb.jpg" source="../vid/vw_car_3.mp4" width="10" height="10" color="tomato"  controlsHeight="3em" {timeDisplay} {loop}/>
    </div>

    <div class="showcase" id="showcase_text">
        <h2 id="showcase_title">Boucles pour Volkswagen (2020)</h2>
       <div id="showcase_desc_wrapper">
        <p id="showcase_desc"> Lors de mon passage chez DDB Paris, j'ai réalisé des vidéos hypnotisantes pour promouvoir les fonctionnalités de la nouvelle gamme de voitures du constructeur allemand. Ces <i> satisfying gifs </i>ont été postés sur les réseaux sociaux de la marque entre 2019 et 2020.
        </p>
         </div>
    </div>
</div>

<style>

  </style>