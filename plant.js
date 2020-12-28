var curr_tomato_level = 0;
var curr_tomato_width = 20;

var increment = 10;
var min_left = 20;

function startGame(){
    grow_tomato();
}

function grow_tomato(){
    var tomato = document.getElementById("tomato");
    var tomato_holder = document.getElementById("tomato_holder");

    if (curr_tomato_level == 0){
        tomato.style.visibility = "visible";
    } else {
        if (curr_tomato_width >= 90){
            //reset
            curr_tomato_level = -1;
            curr_tomato_width= 20;
            tomato.src="green.png"
            tomato.style.visibility = "hidden";

            var new_top = (getRandomInt(6)*10).toString(10) + "%";
            var new_left = (getRandomInt(5)*10 + min_left).toString(10) + "%";
            tomato_holder.style.top = new_top;
            tomato_holder.style.left = new_left;
        }
        else if (curr_tomato_width >= 60){
            tomato.src="red.png";
        }

        curr_tomato_width = curr_tomato_width + increment;
        var new_width = curr_tomato_width.toString(10) + "%";
        tomato.style.width = new_width;
    }
    curr_tomato_level++;

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  

