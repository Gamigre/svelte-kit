<script lang="ts">
  import VideoPlayer from 'svelte-video-player';
  let timeDisplay = true;
  let loop = true;
</script>


<div class="column" id="showcase">
  <div id="showcase_picture_wrapper" style=" width:100%; margin: 0 auto;">
      <VideoPlayer poster="../vid/boeuf-thumb.jpg" source="../vid/boeuf_crf25.mp4" color="tomato" controlsHeight="3em" {timeDisplay} {loop}/>
</div>

    <div class="showcase" id="showcase_text">
        <h2 id="showcase_title">Peer Captation (2018) </h2>
       <div id="showcase_desc_wrapper">
        <p id="showcase_desc">  Comme un bœuf visuel et sonore, Peer Captation rend compte de la rencontre entre trois univers de trois amis. Fête intimiste dans un couloir souterrain, la performance mêle micros, musiques analogiques et numériques, projection live et manipulation
          d'images. <br> <br> Avec <a style="color:tomato" href="https://adrientinchi.com/">Adrien Tinchi</a> et <a style="color:tomato" href="https://www.instagram.com/louismontserrat/">Louis Montserrat</a>.
        </p>
         </div>
    </div>
</div>

<style>

  </style>