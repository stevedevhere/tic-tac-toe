let elements = document.getElementById('game-container').getElementsByTagName('td'),
    table = new Array(9),
    players = {
      O: "O",
      X: "X",
    },
    start = false,
    end = false,
    prevPlayer = players.O;

function whoPlay() {
  let currentPlayer;

  if(prevPlayer == players.O) {
    currentPlayer = players.X;
    prevPlayer = currentPlayer;

  } else {
    currentPlayer = players.O;
    prevPlayer = currentPlayer;

  }

  return currentPlayer;
}

function winChecker() {

  if (table[0]==players.O && table[1]==players.O && table[2]==players.O
    || table[0]==players.X && table[1]==players.X && table[2]==players.X)  return {win_type: 0};

  if (table[3]==players.O && table[4]==players.O && table[5]==players.O
    || table[3]==players.X && table[4]==players.X && table[5]==players.X)  return {win_type: 0};

  if (table[6]==players.O && table[7]==players.O && table[8]==players.O
    || table[6]==players.X && table[7]==players.X && table[8]==players.X)  return {win_type: 0};

  if (table[0]==players.O && table[3]==players.O && table[6]==players.O
    || table[0]==players.X && table[3]==players.X && table[6]==players.X)  return {win_type: 0};

  if (table[1]==players.O && table[4]==players.O && table[7]==players.O
    || table[1]==players.X && table[4]==players.X && table[7]==players.X)  return {win_type: 0};

  if (table[2]==players.O && table[5]==players.O && table[8]==players.O
    || table[2]==players.X && table[5]==players.X && table[8]==players.X)  return {win_type: 0};

  if (table[0]==players.O && table[4]==players.O && table[8]==players.O
    || table[0]==players.X && table[4]==players.X && table[8]==players.X)  return {win_type: 0};

  if (table[2]==players.O && table[4]==players.O && table[6]==players.O
    || table[2]==players.X && table[4]==players.X && table[6]==players.X)  return {win_type: 0};

  if(table[0] && table[1] && table[2] && table[3] && table[4] && table[5]
    && table[6] && table[7] && table[8])  return {win_type: 1};

}

function move(id) {
  if(end) return;
  if(!start) start = true;
  if(table[id]) return;
  let role = whoPlay();

  table[id] = role;
  document.getElementById(id).className = 'cell ' + role;

  !winChecker() ? (role == players.X) ? players.O : null : reset(role, winChecker().win_type)

}
document.getElementById('game-container').addEventListener('click', event => move(event.target.id));

function reset(role, win_type) {
  let notify = document.getElementById("notify");
  end = true;

  if(win_type == 0) {
    notify.innerHTML = `${role} win`;
  } else {
    notify.innerHTML = `Draw`;
  }
  notify.classList.add('fadeout');
  setTimeout(() => notify.classList.toggle('fadeout'), 7000);
}

function clearBoard() {
  if(!start) return;
  start = false;
  end = false;
  table = new Array(9);

  for(let i = 0; i < table.length; i++) {
    elements[i].classList.value = "";
  }
}
document.getElementById('reset').addEventListener('click', clearBoard);
