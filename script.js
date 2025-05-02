function main(){
    let winner = ""
    let playerTurn = prompt ("(r)ock, (p)aper, or (s)cissors?")
    let computer = Math.floor(Math.random()*2)
    const moves = ["r","p","s"]
    let computerTurn = moves[computer]
    let combo = playerTurn+computerTurn
    switch (combo){
        case "rp": 
        winner = "C"
        break
        case "pr": 
        winner = " you "
        break
        case "sr": 
        winner = " C "
        break
        case "rs": 
        winner = " you "
        break
        case "rr": 
        winner = " no one "
        break
        case "pp": 
        winner = "no one"
        break
        case "ss": 
        winner = "no one"
        break
    }
    alert ("you picked " + playerTurn + " I picked " + computerTurn + " and " + winner  + " won")
}
main();