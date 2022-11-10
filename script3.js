// function

function insertText(id, text) {
  document.getElementById(id).textContent = text;
}

// 説明書きへのアクセス
$(".juken").click(function () {
  $(this).toggleClass("active");
  $("#g-nav").toggleClass("panelactive");
});

$(".clsbtn").click(function () {
  $(".juken").removeClass("active");
  $("#g-nav").removeClass("panelactive");
})

// playerのステータス
const playerData = {
  name: "受　験　生",
  hp: 0,
  nemuke: 0,
}

insertText("playerName", playerData["name"]);
insertText("playerhp", "学力");
insertText("playerhpValue", playerData["hp"]);
insertText("playernemuke", "眠気");
insertText("playernemukeValue", playerData["nemuke"]);


let cCount = 0;
let clickCount = 0;
let tryCount = 0;

if (playerData["hp"] <= 0) {
  playerData["hp"] = 0;
  insertText("playerhp", "学力");
  insertText("playerhpValue", playerData["hp"]);
};

document.getElementById("currentStudyHp").style.width = playerData["hp"];
document.getElementById("currentNemuke").style.width = playerData["nemuke"];
document.getElementById("comment").textContent = "今日も学習頑張ろう！";

let nextdo = function () {
  document.getElementById("comment").textContent = "次はどうしますか？"
}

// 勉強するを押した時
document.getElementById("study").addEventListener("click", function () {
  endgame = false;
  tryCount += 1;

  // 学力UPの計算
  if (tryCount <= 6) {
    const max = 20;
    const min = 10;
    const randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;

    const study_hp = 10 + randomnumber;
    playerData["hp"] = playerData["hp"] + study_hp;

    // 眠気UPの計算
    const maxnemuke = 10;
    const minnemuke = 5;
    const randomnumbernemuke = Math.floor(Math.random() * (max - min + 1)) + min;

    const study_nemuke = 20 + randomnumbernemuke;

    // コメント
    let start = function () {
      document.getElementById("comment").textContent = "少し賢くなった！"
    };
    let studyup = function () {
      document.getElementById("comment").textContent = "学力が" + study_hp + "上がった！"
    };
    let studyupnew = function () {
      document.getElementById("playerhp").textContent = "学力";
      document.getElementById("playerhpValue").textContent = playerData["hp"];
      document.getElementById("currentStudyHp").style.width = (playerData["hp"]) + '%';
    };
    let nemukecomment = function () {
      document.getElementById("comment").textContent = "疲れて眠くなってきた。"
    };
    let nemukeup = function () {
      document.getElementById("comment").textContent = "眠気が" + study_nemuke + "だけ増した！"
    }
    let nemukeupnew = function () {
      playerData["nemuke"] = playerData["nemuke"] + study_nemuke;
      document.getElementById("playernemuke").textContent = "眠気";
      document.getElementById("playernemukeValue").textContent = playerData["nemuke"];

      if (playerData["nemuke"] >= 100) {
        playerData["nemuke"] = 100;
        insertText("playernemuke", "眠気");
        insertText("playernemukeValue", 100);
      };
      document.getElementById("currentNemuke").style.width = (playerData["nemuke"]) + '%';
    }

    setTimeout(start, 0);
    setTimeout(studyup, 500);
    setTimeout(studyupnew, 1000);
    setTimeout(nemukecomment, 1500);
    setTimeout(nemukeup, 2000);
    setTimeout(nemukeupnew, 2500);
    setTimeout(nextdo, 3000);

    if (playerData["nemuke"] >= 100) {
      alert("深い眠りに落ちた。");
      cCount += 1;

      let owari = function () {
        document.getElementById("comment").textContent = "今日の学びは終了した。";
      };
      let final = function () {
        document.getElementById("comment").textContent = "１日で" + playerData["hp"] + "の学力を得た！"
      };
      if (cCount === 1) {
        setTimeout(owari, 500);
        setTimeout(final, 1000);
        endgame = true
      }
    }
  } else if (tryCount === 7) {
    insertText("comment", "今日も一日頑張った！");
    document.getElementById("study").addEventListener("click", function () {
      insertText("comment", "１日で" + playerData["hp"] + "の学力を得た！");
      endGame = true;

      if (endGame) {
        document.getElementById("study").classList.add("deactive");
        document.getElementById("heal").classList.add("deactive");
        document.getElementById("sns").classList.add("deactive");
      }
    });
  };

  // ボックスに色を付ける
  let i = tryCount;

  if (i === 1) {
    console.log(i);
    document.getElementById("box[1]").style.backgroundColor = "red";
    // console.log(i);
  } else if (i === 2) {
    console.log(tryCount);
    document.getElementById("box[2]").style.backgroundColor = "red";
  } else if (i === 3) {
    console.log(tryCount);
    document.getElementById("box[3]").style.backgroundColor = "red";
  } else if (i === 4) {
    console.log(tryCount);
    document.getElementById("box[4]").style.backgroundColor = "red";
  } else if (i === 5) {
    console.log(tryCount);
    document.getElementById("box[5]").style.backgroundColor = "red";
  } else if (i === 6) {
    console.log(tryCount);
    document.getElementById("box[6]").style.backgroundColor = "red";
  }
});

// リフレッシュを押したとき///////////////////////////////////////////////////
document.getElementById("heal").addEventListener("click", function () {
  endGame = false;
  tryCount += 1;

  if (tryCount <= 6) {
    const max = 8;
    const min = 2;
    const randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;

    const heal_nemuke = 10 + randomnumber;
    playerData["nemuke"] = playerData["nemuke"] - heal_nemuke;

    document.getElementById("comment").textContent = "休憩を入れて少しスッキリした！";

    let nemukedown = function () {
      document.getElementById("playernemuke").textContent = "眠気";
      document.getElementById("playernemukeValue").textContent = playerData["nemuke"];
      document.getElementById("currentNemuke").style.width = (playerData["nemuke"]) + '%';
    }
    let nemukedowncomment = function () {
      document.getElementById("comment").textContent = "眠気が" + heal_nemuke + "減った。";
    }

    setTimeout(nemukedowncomment, 1000);
    setTimeout(nemukedown, 2000);
    setTimeout(nextdo, 3000);

    if (playerData["nemuke"] <= 0) {
      playerData["nemuke"] = 0;
      insertText("playernemuke", "眠気");
      insertText("playernemukeValue", playerData["nemuke"]);
    };

    // ボックスに色を付ける
    let i = tryCount;
    if (i === 1) {
      document.getElementById("box[1]").style.backgroundColor = "greenyellow";
    } else if (i === 2) {
      console.log(tryCount);
      document.getElementById("box[2]").style.backgroundColor = "greenyellow";
    } else if (i === 3) {
      console.log(tryCount);
      document.getElementById("box[3]").style.backgroundColor = "greenyellow";
    } else if (i === 4) {
      console.log(tryCount);
      document.getElementById("box[4]").style.backgroundColor = "greenyellow";
    } else if (i === 5) {
      console.log(tryCount);
      document.getElementById("box[5]").style.backgroundColor = "greenyellow";
    } else if (i === 6) {
      console.log(tryCount);
      document.getElementById("box[6]").style.backgroundColor = "greenyellow";
    }
  } else if (tryCount === 7) {
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
});
// SNSを押したとき/////////////////////////////////////////////////////////
document.getElementById("sns").addEventListener("click", function () {
  endGame = false;
  tryCount += 1;

  const max = 5;
  const min = 1;

  const randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;

  if (randomnumber === 1) {
    playerData["nemuke"] = playerData["nemuke"] - 50;

    insertText("comment", "好きな子からポジティブな返信あり！　眠気　-50");
    insertText("playernemuke", "眠気");
    insertText("playernemukeValue", playerData["nemuke"]);

    document.getElementById("currentNemuke").style.width = (playerData["nemuke"]) + '%';

    if (playerData["nemuke"] <= 0) {
      playerData["nemuke"] = 0;
      insertText("playernemuke", "眠気");
      insertText("playernemukeValue", playerData["nemuke"]);
    }
  } else if (randomnumber === 5) {
    playerData["hp"] = playerData["hp"] - 30;

    if (playerData["hp"] <= 0) {
      playerData["hp"] = 0;
      insertText("playerhp", "学力");
      insertText("playerhpValue", playerData["hp"]);
      document.getElementById("currentStudyHp").style.width = (playerData["hp"]) + '%';
    };

    insertText("comment", "ハマり過ぎてやる気を失ってしまった！！　学力　-30");
    insertText("playerhp", "学力");
    insertText("playerhpValue", playerData["hp"]);
    document.getElementById("currentStudyHp").style.width = (playerData["hp"]) + '%';
  } else {
    insertText("comment", "ただ無駄に時間が過ぎていった、、、");
  }

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

  // ボックスに色を付ける
  let i = tryCount;
  if (i === 1) {
    console.log(i);
    document.getElementById("box[1]").style.backgroundColor = "yellow";
    // console.log(i);
  } else if (i === 2) {
    console.log(tryCount);
    document.getElementById("box[2]").style.backgroundColor = "yellow";
  } else if (i === 3) {
    console.log(tryCount);
    document.getElementById("box[3]").style.backgroundColor = "yellow";
  } else if (i === 4) {
    console.log(tryCount);
    document.getElementById("box[4]").style.backgroundColor = "yellow";
  } else if (i === 5) {
    console.log(tryCount);
    document.getElementById("box[5]").style.backgroundColor = "yellow";
  } else if (i === 6) {
    console.log(tryCount);
    document.getElementById("box[6]").style.backgroundColor = "yellow";
  }
});
