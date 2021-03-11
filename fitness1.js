//Credit to Rebecca Estes - we started with her Yoga API and added  pose descriptions: https://github.com/rebeccaestes/yoga_api

// const newPoseBtn = document.getElementById("newPoseBtn");
const photoDIV = document.getElementById("photoDIV");

function getNewPose() {
  let exercise = exercises[Math.floor(Math.random() * exercises.length)];

  const exerciseItem = ` 
                        <div id="fitnessDisplay">
                        <h1>  ${exercise.english_name} Pose</h1>
                        <h2>  Sanskrit: ${exercise.sanskrit_name}</h2>
                        <img src="${exercise.img_url}" width="50%" height="25%" class="exerciseImage" /><br><br>
                        <button onclick=getNewPose() class="newPoseBtn">Get New Pose</button>
                        <h3><b>How to achieve pose:</b></h3>  <p><b>${exercise.description}<b></p>
                        
                        </div>
                        `;
  photoDIV.innerHTML = exerciseItem;
}


getNewPose();