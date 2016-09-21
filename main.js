// created by Lewis Bracey
// get all sqaures
var squares = document.getElementsByClassName("game-square");
var user_moves = [
    "", "", "",

    "", "", "",

    "", "", ""
]
var player_one = true;
var game_over = false;
var winner = "";
var winning_screen = document.createElement("DIV");
var win_screen_reset_btn = document.createElement("BUTTON");
var reset_txt = document.createTextNode("Play Again?");
win_screen_reset_btn.appendChild(reset_txt);
win_screen_reset_btn.className = "reset-btn";



var switch_squares = function(){
        switch (this){
            case squares[0]:
            if (!user_moves[0]){
                user_moves[0] = changeTurns(0);
            }
            check_for_winner()
            break;
            case squares[1]:
            if (!user_moves[1]){
                user_moves[1] = changeTurns(1);
            }
            check_for_winner()
            break;
            case squares[2]:
            if (!user_moves[2]){
                user_moves[2] = changeTurns(2);
            }
            check_for_winner();
            break;
            case squares[3]:
            if (!user_moves[3]){
                user_moves[3] = changeTurns(3);
            }
            check_for_winner()
            break;
            case squares[4]:
            if (!user_moves[4]){
                user_moves[4] = changeTurns(4);
            }
            check_for_winner()
            break;
            case squares[5]:
            if (!user_moves[5]){
                user_moves[5] = changeTurns(5);
            }
            check_for_winner()
            break;
            case squares[6]:
            if (!user_moves[6]){
                user_moves[6] = changeTurns(6);
            }
            check_for_winner()
            break;
            case squares[7]:
            if (!user_moves[7]){
                user_moves[7] = changeTurns(7);
            }
            check_for_winner()
            break;
            default:
            if (!user_moves[8]){ 
                user_moves[8] = changeTurns(8);
            }
            check_for_winner()           
        }
         // console.log(user_moves)
    }

function check_for_winner(){
    if (
        (user_moves[0] === "X" && user_moves[1] === "X" && user_moves[2] === "X") ||
        (user_moves[3] === "X" && user_moves[4] === "X" && user_moves[5] === "X") ||
        (user_moves[6] === "X" && user_moves[7] === "X" && user_moves[8] === "X") ||
        (user_moves[0] === "X" && user_moves[3] === "X" && user_moves[6] === "X") ||
        (user_moves[1] === "X" && user_moves[4] === "X" && user_moves[7] === "X") ||
        (user_moves[2] === "X" && user_moves[5] === "X" && user_moves[8] === "X") ||
        (user_moves[0] === "X" && user_moves[4] === "X" && user_moves[8] === "X") ||
        (user_moves[2] === "X" && user_moves[4] === "X" && user_moves[6] === "X")
        ) {
        for (var l = 0; l < squares.length; l++){
            squares[l].removeEventListener("click", switch_squares);
        }
        game_over = true;
        console.log("X is the winner. Player One wins. Game Over.");
        winner = "X"
        var x_wins = document.createTextNode("Player One (X) Wins. Game Over...");
        winning_screen.appendChild(x_wins);
        winning_screen.className = "x-win-screen";
        winning_screen.appendChild(win_screen_reset_btn);
        document.body.appendChild(winning_screen);
        win_screen_reset_btn.addEventListener("click", function(){
            location.reload()
        })
        $(winning_screen).slideDown(1000);
        return winner;
    } else if (
        (user_moves[0] === "O" && user_moves[1] === "O" && user_moves[2] === "O") ||
        (user_moves[3] === "O" && user_moves[4] === "O" && user_moves[5] === "O") ||
        (user_moves[6] === "O" && user_moves[7] === "O" && user_moves[8] === "O") ||
        (user_moves[0] === "O" && user_moves[3] === "O" && user_moves[6] === "O") ||
        (user_moves[1] === "O" && user_moves[4] === "O" && user_moves[7] === "O") ||
        (user_moves[2] === "O" && user_moves[5] === "O" && user_moves[8] === "O") ||
        (user_moves[0] === "O" && user_moves[4] === "O" && user_moves[8] === "O") ||
        (user_moves[2] === "O" && user_moves[4] === "O" && user_moves[6] === "O")
        ) {
            for (var l = 0; l < squares.length; l++){
                squares[l].removeEventListener("click", switch_squares);
            }
            game_over = true;
            winner = "O";
            var o_wins = document.createTextNode("Player Two (O) Wins. Game Over...");
            winning_screen.appendChild(o_wins);
            winning_screen.className = "o-win-screen";
            winning_screen.appendChild(win_screen_reset_btn);
            win_screen_reset_btn.addEventListener("click", function(){
                location.reload()
            })
            document.body.appendChild(winning_screen);
            $(winning_screen).slideDown(1000);
            return winner;
        } else {
            for (var i = 0; i < user_moves.length; i++){
                if (user_moves[i] === ""){
                    return;
                }
            }
            var tie_txt = document.createTextNode("Tie Game...");
            winning_screen.appendChild(tie_txt);
            winning_screen.className = "tie-screen";
            winning_screen.appendChild(win_screen_reset_btn);
            win_screen_reset_btn.addEventListener("click", function(){
                location.reload()
            })
            document.body.appendChild(winning_screen);
            $(winning_screen).slideDown(1000);
            game_over = true;
            console.log("Tie Game");
            winner = "Tie";
        }
   
}

function changeTurns (index){
    if (player_one && !game_over){
        player_one = false;
        var x = document.createElement("P");
        var x_text = document.createTextNode("X");
        x.appendChild(x_text);
        x.className = "x-text";
        squares[index].appendChild(x);
        $(".turn-label-right").fadeIn(600);
        $(".turn-label-left").css("display", "none");
        return "X";
    } else if (!game_over){
        player_one = true;
        var o = document.createElement("P");
        var o_text = document.createTextNode("O");
        o.appendChild(o_text);
        o.className = "o-text";
        squares[index].appendChild(o);
        $(".turn-label-left").fadeIn(600);
        $(".turn-label-right").css("display", "none");
        return "O";
    } else {
        console.log("game over")
    }
}
for (var l = 0; l < squares.length; l++){
    squares[l].addEventListener("click", switch_squares)
}

var reset_btn = document.querySelector(".reset-btn");

reset_btn.addEventListener("click", function(){
    
    var game_squares = document.querySelectorAll(".game-square");
    for (key in game_squares){
        game_squares[key].innerHTML = "";
    }
    user_moves = [
    "", "", "",

    "", "", "",

    "", "", ""
    ]
    player_one = true;
    game_over = false;
})

