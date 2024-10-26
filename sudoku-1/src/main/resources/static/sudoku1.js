// let numSelected = null;
// let errors = 0;
// let write_answers = 0;
// let counter = 0;
// let timerInterval = null;

// window.onload = function(){
//    setGame();
   
//    //Play Again
//    document.getElementById('reloadButton').addEventListener('click', function() {
//     // Reload the page
//         window.location.reload(); 
//     });

//     //New Game
//     document.getElementById('new-game').addEventListener('click', function() {
//         // Reload the page
//             window.location.href = "http://localhost:8080";
//         });

//     //solution
//     document.getElementById('solution').addEventListener('click', function(){
//        solve();
//        stopTimerInterval();
//     });

    
//     //top bar
//     console.log("Come on the level: " + game_level);
//     document.getElementById(`${game_level}`).classList.add('bar-btn-clicked');

//     const buttons = document.querySelectorAll('.bar-btn');

//     buttons.forEach(button => {
//         button.addEventListener('click', function() {
//             counter = 0;
//             game_level = this.id;        
//             selectLevel(game_level);
        
//             this.classList.add('bar-btn-clicked');
            

//             buttons.forEach(btn => {
//                 if(btn != this && btn.classList.contains('bar-btn-clicked')){
//                     btn.classList.remove('bar-btn-clicked');
//                 }
//             })
//         })
//     })

// }

// function setGame(){

//     //  for(let i=1; i<=9; i++){
//     //      let number = document.createElement("div");
//     //      number.id = i;
//     //      number.innerText = i;
//     //      number.addEventListener("click", selectNumber);
//     //      number.classList.add("number");
//     //      document.getElementById("digits").appendChild(number);
//     //  }

//     for(let r =0; r < 9; r++){
//         for(let c = 0; c < 9; c++){
//             let tile = document.createElement("div");
//             tile.id = r.toString() + "-" + c.toString(); //["0-0"]

//             if(board[r][c] != 0){
//                 tile.innerText = board[r][c];
//                 tile.classList.add("tile-start");
//             } 
//             if(r==2 || r==5) {
//                 tile.classList.add("horizontal-line");
//             } 
//             if(c == 2 || c==5) {
//                 tile.classList.add("vertical-line");
//             }
//             tile.addEventListener("click", selectTile);
//             tile.classList.add("tile");
//             document.getElementById("board").append(tile);
//         }
//     }
//         // Call updateCounter() every 1000 milliseconds (1 second)
//        timerInterval = setInterval(updateCounter, 1000);
// }

// function selectNumber(){
//     if(numSelected != null){
//         numSelected.classList.remove("number-selected");
//     }
//     numSelected = this; // 'this' refers to the clicked element
//     numSelected.classList.add("number-selected");
// }

// // function selectTile(){
// //     if(numSelected){
// //         if(this.innerText != "" && !this.classList.contains("wrong-answer")){
// //             return;
// //         } 

// //         //get the coordinate from the id
// //         let coords = this.id.split("-"); // ["0", "0"]
// //         let r = parseInt(coords[0]);
// //         let c = parseInt(coords[1]);

// //         if(solution[r][c] == numSelected.id){
// //             this.innerText = numSelected.id;
// //             this.classList.remove("wrong-answer");
// //             write_answers++;
            
// //             if(write_answers == empty_tiles){
// //                 document.getElementById("modal-message").innerText = "Yow Win!!!"; 
// //                 showGameOverModal();  
// //             }


// //         } else if(errors == 2){
// //             errors++;
// //             document.getElementById("errors").innerText = errors;
// //             document.getElementById("modal-message").innerText = "Game Over!!!";
// //             showGameOverModal();
// //         } else{
// //             this.innerText = numSelected.id;
// //             this.classList.add("wrong-answer");
// //             errors++;
// //             document.getElementById("errors").innerText = errors;
// //         }
// //     }
// // }
// function selectTile() {
//     if (document.getElementById(tilecolor)) {
//         document.getElementById(tilecolor).classList.remove("number-selected");
//         document.getElementById(tilecolor).removeEventListener("keyup", (e) => { alert(e.code) })
//     }
//     this.classList.add("number-selected");
//     tilecolor = this.id;
//     addEventListener("keyup", (e) => {
//         if ("Digit1" <= e.code && e.code <= "Digit9" || "Numpad1" <= e.code && e.code <= "Numpad9") {
//             let coords = this.id.split("-"); //["0", "0"]
//             let r = parseInt(coords[0]);
//             let c = parseInt(coords[1]);
//             let currTile = document.getElementById(this.id);
//             if ("Numpad1" <= e.code && e.code <= "Numpad9") { numSelected = parseInt(e.code[6]); }
//             else {
//                 numSelected = parseInt(e.code[5]);
//             }
//             if ((currTile.innerText == "" || currTile.classList.contains("wrong-ans")) && currTile.classList.contains("number-selected")) {

//                 if (solution[r][c] == numSelected) {
//                     currTile.innerText = numSelected;
//                     currTile.classList.remove("wrong-ans");
//                     currTile.classList.remove("error");
//                 }
//                 else if(errors == 2){
//                     errors++;
//                     document.getElementById("errors").innerText = errors;
//                     alert("Game Over!!");
//                     // document.getElementById("modal-message").innerText = "Game Over!!!";
//                     // showGameOverModal();
//                 }
//                 else {
//                     errors += 1;
//                     currTile.innerText = numSelected;
//                     currTile.classList.add("error")
//                     currTile.classList.add("wrong-ans");
//                     document.getElementById("errors").innerText = errors;
//                 }
//             }
//         }
//     });
// }

// function solve(){
//     var tiles = document.querySelectorAll('.tile');

//     tiles.forEach(tile => {
//         if(tile.innerText == "" || tile.classList.contains("wrong-answer")){
//             //get the coordinate from the id
//             let coords = tile.id.split("-"); // ["0", "0"]
//             let r = parseInt(coords[0]);
//             let c = parseInt(coords[1]);
            
//             tile.innerText = solution[r][c];
//         } 
//     })

    
// }

// function showGameOverModal(){
//     document.getElementById('gameOverModal').style.display = 'flex';
// }

// function stopTimerInterval(){
//     clearInterval(timerInterval);
// }

// // Function to convert seconds into HH:MM:SS format
// function toHHMMSS(seconds) {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds - (hours * 3600)) / 60);
//     const secs = seconds % 60;

//     // Padding each value with leading zeros to ensure two digits
//     const paddedHours = String(hours).padStart(2, '0');
//     const paddedMinutes = String(minutes).padStart(2, '0');
//     const paddedSeconds = String(secs).padStart(2, '0');

//     return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
// }

// // Function to update the counter
// function updateCounter() {
//     // Increment the counter
//     counter++;

//     // Convert the counter value to HH:MM:SS
//     const timeString = toHHMMSS(counter);

//     // Display the time string in the <span> with id 'time-counter'
//     document.getElementById('time-counter').textContent = timeString;
// }

// //Function to Select level
// function selectLevel(game_level){ 
//     window.location.href = `http://localhost:8080/level/${game_level}`;
// }

var tilecolor = null;
let numSelected = null;
let errors = 0;
let write_answers = 0;
let counter = 0;
let timerInterval = null;

window.onload = function(){
   setGame();
   
   //Play Again
   document.getElementById('reloadButton').addEventListener('click', function() {
    // Reload the page
        window.location.reload(); 
    });

    //New Game
    document.getElementById('new-game').addEventListener('click', function() {
        // Reload the page
            window.location.href = "http://localhost:8080";
        });

    //solution
    document.getElementById('solution').addEventListener('click', function(){
       solve();
       stopTimerInterval();
    });

    
    //top bar
    console.log("Come on the level: " + game_level);
    document.getElementById(`${game_level}`).classList.add('bar-btn-clicked');

    const buttons = document.querySelectorAll('.bar-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            counter = 0;
            game_level = this.id;        
            selectLevel(game_level);
        
            this.classList.add('bar-btn-clicked');
            

            buttons.forEach(btn => {
                if(btn != this && btn.classList.contains('bar-btn-clicked')){
                    btn.classList.remove('bar-btn-clicked');
                }
            })
        })
    })

}

function setGame(){

    //  for(let i=1; i<=9; i++){
    //      let number = document.createElement("div");
    //      number.id = i;
    //      number.innerText = i;
    //      number.addEventListener("click", selectNumber);
    //      number.classList.add("number");
    //      document.getElementById("digits").appendChild(number);
    //  }

    for(let r =0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString(); //["0-0"]

            if(board[r][c] != 0){
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            } 
            if(r==2 || r==5) {
                tile.classList.add("horizontal-line");
            } 
            if(c == 2 || c==5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
        // Call updateCounter() every 1000 milliseconds (1 second)
       timerInterval = setInterval(updateCounter, 1000);
}

function selectNumber(){
    if(numSelected != null){
        numSelected.classList.remove("number-selected");
    }
    numSelected = this; // 'this' refers to the clicked element
    numSelected.classList.add("number-selected");
}

// function selectTile(){
//     if(numSelected){
//         if(this.innerText != "" && !this.classList.contains("wrong-answer")){
//             return;
//         } 

//         //get the coordinate from the id
//         let coords = this.id.split("-"); // ["0", "0"]
//         let r = parseInt(coords[0]);
//         let c = parseInt(coords[1]);

//         if(solution[r][c] == numSelected.id){
//             this.innerText = numSelected.id;
//             this.classList.remove("wrong-answer");
//             write_answers++;
            
//             if(write_answers == empty_tiles){
//                 document.getElementById("modal-message").innerText = "Yow Win!!!"; 
//                 showGameOverModal();  
//             }


//         } else if(errors == 2){
//             errors++;
//             document.getElementById("errors").innerText = errors;
//             document.getElementById("modal-message").innerText = "Game Over!!!";
//             showGameOverModal();
//         } else{
//             this.innerText = numSelected.id;
//             this.classList.add("wrong-answer");
//             errors++;
//             document.getElementById("errors").innerText = errors;
//         }
//     }
// }
function selectTile() {
    if (document.getElementById(tilecolor)) {
        document.getElementById(tilecolor).classList.remove("number-selected");
        document.getElementById(tilecolor).removeEventListener("keyup", (e) => { alert(e.code) })
    }
    this.classList.add("number-selected");
    tilecolor = this.id;
    addEventListener("keyup", (e) => {
        if ("Digit1" <= e.code && e.code <= "Digit9" || "Numpad1" <= e.code && e.code <= "Numpad9") {
            let coords = this.id.split("-"); //["0", "0"]
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);
            let currTile = document.getElementById(this.id);
            if ("Numpad1" <= e.code && e.code <= "Numpad9") { numSelected = parseInt(e.code[6]); }
            else {
                numSelected = parseInt(e.code[5]);
            }
            if ((currTile.innerText == "" || currTile.classList.contains("wrong-ans")) && currTile.classList.contains("number-selected")) {

                if (solution[r][c] == numSelected) {
                    currTile.innerText = numSelected;
                    currTile.classList.remove("wrong-ans");
                    if(currTile.classList.contains("wrong-answer")){
                    currTile.classList.remove("wrong-answer");}
                    currTile.classList.remove("error");
                }
                // else if(errors == 2){
                //     errors++;
                //     document.getElementById("errors").innerText = errors;
                //     alert("Game Over!!");
                //     // document.getElementById("modal-message").innerText = "Game Over!!!";
                //     // showGameOverModal();
                // }
                else {
                    errors += 1;
                    currTile.innerText = numSelected;
                    currTile.classList.add("wrong-answer");
                    currTile.classList.remove("wrong-ans");
                    currTile.classList.add("wrong-ans");
                    currTile.classList.add("error")
                    document.getElementById("errors").innerText = errors;
                }
            }
        }
    });
}

function solve(){
    var tiles = document.querySelectorAll('.tile');

    tiles.forEach(tile => {
        if(tile.innerText == "" || tile.classList.contains("wrong-answer")){
            //get the coordinate from the id
            let coords = tile.id.split("-"); // ["0", "0"]
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);
            
            tile.innerText = solution[r][c];
        } 
    })

    
}

function showGameOverModal(){
    document.getElementById('gameOverModal').style.display = 'flex';
}

function stopTimerInterval(){
    clearInterval(timerInterval);
}

// Function to convert seconds into HH:MM:SS format
function toHHMMSS(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - (hours * 3600)) / 60);
    const secs = seconds % 60;

    // Padding each value with leading zeros to ensure two digits
    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(secs).padStart(2, '0');

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}

// Function to update the counter
function updateCounter() {
    // Increment the counter
    counter++;

    // Convert the counter value to HH:MM:SS
    const timeString = toHHMMSS(counter);

    // Display the time string in the <span> with id 'time-counter'
    document.getElementById('time-counter').textContent = timeString;
}

//Function to Select level
function selectLevel(game_level){ 
    window.location.href = `http://localhost:8080/level/${game_level}`;
}