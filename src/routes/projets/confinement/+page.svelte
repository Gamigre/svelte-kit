<script lang="ts">
    import VideoPlayer from 'svelte-video-player';
    let timeDisplay = true;
  </script>
  
 
<div class="column" id="showcase">
    <div id="showcase_picture_wrapper" style=" width:100%; margin: 0 auto;">
        <VideoPlayer poster="../vid/Projet_final_gobelins_corrigé_6s_crf25-thumb.jpg" source="../vid/Projet_final_gobelins_corrigé_6s_crf25.mp4" color="tomato" controlsHeight="3em" {timeDisplay}/>
</div>

    <div class="showcase" id="showcase_text">
        <h2 id="showcase_title">À travers le confinement (2020) </h2>
       <div id="showcase_desc_wrapper">
        <p id="showcase_desc">Le sujet de mon examen final de licence en motion design était "à travers le confinement", que nous venions justement de traverser. Réalisé à peine rentré dans ma campagne natale après trois mois sans sortir de mon petit appartement parisien, ce film de fin d'étude m'a permis de mettre en image mon ressenti durant cette période.<br> Conçu en deux semaines dans un endroit sans internet, il est aussi un témoignage de mes compétences variées concentrées sur un projet.
        </p>
         </div>
    </div>
</div>

<style>
  </style>