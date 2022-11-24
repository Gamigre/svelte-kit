<script lang="ts">
  import VideoPlayer from 'svelte-video-player';
  let timeDisplay = true;
    let loop = true;
</script>

<div class="column" id="showcase">

  <div class="column" id="showcase">
    <div id="showcase_picture_wrapper" style="max-width:40vh; margin: 0 auto;">
        <VideoPlayer poster="../img/dali_thumb.jpg" source="static\vid\persistance_dali.mp4" width="1080" height="1920" color="tomato"  controlsHeight="3em" {timeDisplay} {loop}/>
        </div>

</div>


    <div class="showcase" id="showcase_text">
        <h2 id="showcase_title">Persistance de la mémoire (2020)</h2>
       <div id="showcase_desc_wrapper">
        <p id="showcase_desc"> En partenariat avec le musée Dalí Paris, j'ai créé ma propre vision de la Persistance de la Mémoire, puisant dans les souvenirs de la campagne de mon enfance, où le passage du temps est très marqué par l’évolution de la flore durant toute l’année. 
          <br> La montre est aussi molle que le temps qu’elle décompte. Ici, tout pousse, fleurit et fane à la fois.
          <br>
          <br>L'œuvre est présentée aux visiteurs grâce à l'application développée par SkyBoy et leur technologie d'Overlap Reality. L'utilisateur déclenche l'apparition de la vidéo en prenant en photo l'œuvre physique avec son smartphone.
        </p>
         </div>
    </div>
</div>

<style>
#showcase_picture_wrapper{
  width:100vw;
  max-width:100%;
}
  </style>