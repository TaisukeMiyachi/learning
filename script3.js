// function

function insertText(id, text) {
  document.getElementById(id).textContent = text;
}


// playerのステータス
const playerData = {
  name: "受　験　生",
  hp: 0,
  nemuke: 0,
}

insertText("playerName", playerData["name"]);
insertText("playerhp", "学力" + playerData["hp"]);
insertText("playernemuke", "眠気" + playerData["nemuke"]);

let cCount = 0;
let clickCount = 0;
let tryCount = 0;

if (playerData["hp"] <= 0) {
  playerData["hp"] = 0;
  insertText("playerhp", "学力" + playerData["hp"]);
};

// 「勉強する」を押したとき////////////////////////////////////////////////
document.getElementById("study").addEventListener("click", function () {
  endGame = false;
  clickCount += 1;

  if (clickCount === 1) {
    insertText("comment", "少し賢くなった！");
  };
  if (clickCount === 2) {
    const max = 10;
    const min = 5;
    const randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;

    const study_hp = 10 + randomnumber;
    playerData["hp"] = playerData["hp"] + study_hp;

    insertText("comment", "学力が" + study_hp + "上がった！");
    insertText("playerhp", "学力" + playerData["hp"]);
  };
  if (clickCount === 3) {
    insertText("comment", "疲れて眠くなってきた。");
  };
  if (clickCount === 4) {
    const max = 10;
    const min = 5;
    const randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;

    const study_nemuke = 20 + randomnumber;
    playerData["nemuke"] = playerData["nemuke"] + study_nemuke;

    insertText("comment", "眠気が" + study_nemuke + "だけ増した！　次はどうしますか？");
    insertText("playernemuke", "眠気" + playerData["nemuke"]);

    tryCount += 1;
    clickCount = null;

    if (tryCount === 6) {
      document.getElementById("study").addEventListener("click", function () {
        cCount += 1;
        if (cCount === 1) {
          insertText("comment", "今日も一日頑張った！");
        } if (cCount === 2) {
          insertText("comment", "１日で" + playerData["hp"] + "の学力を得た！");
          endGame = true;
        };
        if (endGame) {
          document.getElementById("study").classList.add("deactive");
          document.getElementById("heal").classList.add("deactive");
          document.getElementById("sns").classList.add("deactive");
        }
      });
    };
  };
  if (playerData["nemuke"] >= 100) {
    alert("深い眠りに落ちた！");
    endGame = true;
    insertText("comment", "今日の学びは終了した、、、　" + playerData["hp"] + "の学力を得た！");
  }
  if (endGame) {
    document.getElementById("study").classList.add("deactive");
    document.getElementById("heal").classList.add("deactive");
    document.getElementById("sns").classList.add("deactive");
  }
});
///////////////////////////////////////////////////////////////////////////

// リフレッシュを押したとき///////////////////////////////////////////////////
document.getElementById("heal").addEventListener("click", function () {
  endGame = false;
  clickCount += 1;

  if (clickCount === 1) {
    insertText("comment", "休憩を入れて少しスッキリした！");
  }
  if (clickCount === 2) {
    const max = 8;
    const min = 2;
    const randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;

    const heal_nemuke = 10 + randomnumber;
    playerData["nemuke"] = playerData["nemuke"] - heal_nemuke;

    if (playerData["nemuke"] <= 0) {
      playerData["nemuke"] = 0;
      insertText("playernemuke", "眠気" + playerData["nemuke"]);
    }

    insertText("comment", "眠気が" + heal_nemuke + "減った。　次はどうしますか？");
    insertText("playernemuke", "眠気" + playerData["nemuke"]);

    tryCount += 1;
    clickCount = null;

    if (tryCount === 6) {
      document.getElementById("heal").addEventListener("click", function () {
        cCount += 1;
        if (cCount === 1) {
          insertText("comment", "今日も一日頑張った！");
        };
        if (cCount === 2) {
          insertText("comment", "１日で" + playerData["hp"] + "の学力を得た！");
          endGame = true;
        };
        if (endGame) {
          document.getElementById("study").classList.add("deactive");
          document.getElementById("heal").classList.add("deactive");
          document.getElementById("sns").classList.add("deactive");
        }
      });
    };
  }
});

// SNSを押したとき/////////////////////////////////////////////////////////
document.getElementById("sns").addEventListener("click", function () {
  endGame = false;
  const max = 5;
  const min = 1;

  const randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;

  if (randomnumber === 1) {
    playerData["nemuke"] = playerData["nemuke"] - 50;
    insertText("comment", "好きな子からポジティブな返信あり！　眠気　-50");
    insertText("playernemuke", "眠気" + playerData["nemuke"]);

    if (playerData["nemuke"] <= 0) {
      playerData["nemuke"] = 0;
      insertText("playernemuke", "眠気" + playerData["nemuke"]);
    }
  } else if (randomnumber === 5) {
    playerData["hp"] = playerData["hp"] - 30;
    if (playerData["hp"] <= 0) {
      playerData["hp"] = 0;
      insertText("playerhp", "学力" + playerData["hp"]);
    };
    insertText("comment", "ハマり過ぎてやる気を失ってしまった！！　学力　-30");
    insertText("playerhp", "学力" + playerData["hp"]);
  } else {
    insertText("comment", "ただ無駄に時間が過ぎていった、、、");
  }

  tryCount += 1;

  if (tryCount === 6) {
    document.getElementById("sns").addEventListener("click", function () {
      cCount += 1;
      if (cCount === 1) {
        insertText("comment", "今日も一日頑張った！");
      } if (cCount === 2) {
        insertText("comment", "１日で" + playerData["hp"] + "の学力を得た！");
        endGame = true;
      };
      if (endGame) {
        document.getElementById("study").classList.add("deactive");
        document.getElementById("heal").classList.add("deactive");
        document.getElementById("sns").classList.add("deactive");
      }
    });
  };
  // const i = 0;
  let i = tryCount;

  // console.log(tryCount);
  // document.getElementById("box[2]").style.backgroundColor = "red";

  if (i === 1) {
    console.log(i);
    document.getElementById("box[1]").style.backgroundColor = "red";
    // console.log(i);
  } else if (i === 2) {
    console.log(tryCount);
    document.getElementById("box[2]").style.backgroundColor = "red";
  }
});

////////////////////////////////////////