# 目指せ！学力向上！

## DEMO

  - https://taisukemiyachi.github.io/learning/

## 紹介と使い方

  - 学生の自宅学習の効果・学力の可視化を行うゲーム。

  - 30分おきに自分の行動を決め、トータル3時間でできるだけ学力を上げることを目指す。

## 工夫した点

  - 「学力」「眠気」という２つのパラメータを利用し、学習と休憩のバランスが大切であるという視点を入れる。
  - 休憩の必要性を「眠気が100以上になったらゲームオーバー」という設定を入れ実現した。
  -　一発逆転要素として「SNS」を入れ、ゲーム、ランダム要素入れた。

  ー効果が視覚的に捉えられるよう「学力」「眠気」の２つの数値をパラメータバーで表示した。その増減もtransitionを用いて動きをつけた。

  ー練習として、女の子の画像をクリックすると下からルール説明が出てくるように設定した。

  ー１つの動作につき、actionを「クリックごと」⇨「自動で」に変更。
  setTimeout使用

## 苦戦した点

  - 複数のif文、onclickの親・子要素を理解して、動かしたい動作を動かしたい順に実現すること。
  　⇨　countを入れることにより、count数で実現できた。

　ー依然として親要素、子要素の理解は不十分。条件分岐でゲーム終了となるフェーズに入っても、クリックするボタンが同じだと、親要素のon clickも効いてしまっているようで今１つうまくいかない。

## 今後のブラッシュアップ

　１．clickに対応して、divタグに色を順番に入れていくコードを考える。（済）

　２．「学力」「眠気」パラメータを視覚的に確認できるようにする。
  （済）
　3．settimeoutの導入
  （済）

  
　
  - 