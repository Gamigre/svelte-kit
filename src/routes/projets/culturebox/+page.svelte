<script lang="ts">
    import VideoPlayer from 'svelte-video-player';
    let timeDisplay = true;
    let loop = true;
  </script>
  
 
<div class="column" id="showcase" >
    <div id="showcase_picture_wrapper">
        <VideoPlayer poster="../vid/culturebox1-thumb.jpg" source="../vid/culturebox1.mp4" color="tomato" controlsHeight="3em" {timeDisplay} {loop}/>
        <VideoPlayer poster="../vid/culturebox2-thumb.jpg" source="../vid/culturebox2.mp4"  color="tomato"  controlsHeight="3em" {timeDisplay} {loop}/>
        <img class="showcase showcase_picture"  src="../img/culturebox_1.jpg" alt="Fausse jaquette de vhs style années 90 avec le logo culturebox">
        <img class="showcase showcase_picture" src="../img/culturebox_2.jpg" alt="Fausse jaquette de vhs style années 90 avec le logo culturebox">
        <img class="showcase showcase_picture" src="../img/culturebox_3.jpg" alt="Fausse jaquette de vhs style années 90 avec le logo culturebox">
        <img class="showcase showcase_picture" src="../img/culturebox_4.jpg" alt="Fausse jaquette de vhs style années 90 avec le logo culturebox">
        <img class="showcase showcase_picture" src="../img/culturebox_5.jpg" alt="Fausse jaquette de vhs style années 90 avec le logo culturebox">
        <img class="showcase showcase_picture" src="../img/culturebox_6.jpg" alt="Fausse jaquette de vhs style années 90 avec le logo culturebox">
        <img class="showcase showcase_picture" src="../img/culturebox_7.jpg" alt="Fausse jaquette de vhs style années 90 avec le logo culturebox">
        <img class="showcase showcase_picture" src="../img/culturebox_8.jpg" alt="Fausse jaquette de vhs style années 90 avec le logo culturebox">

     

</div>

    <div class="showcase" id="showcase_text">
        <h2 id="showcase_title">Culturebox (2021)</h2>
       <div id="showcase_desc_wrapper">
        <p id="showcase_desc">J'ai réalisé plusieurs titrages pour l'émission Culture box lors de mon stage de master à l'agence Gédéon. Je me suis beaucoup amusé à reproduire le style des jacquettes de cassettes vhs des années 90 et les animer avec le logo du programme. <br> <br> Ces inserts ont été diffusés à la télévision durant l'été 2021
        </p>
         </div>
    </div>
</div>

<style>
  .showcase_picture{max-width:49%; border-radius:1em;}
  </style>