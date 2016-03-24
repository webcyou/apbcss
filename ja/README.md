# APB CSS - Atomic Parts Base CSS -

![screen_shot_ogp.png](http://apbcss.com/img/common/screen_shot_ogp.png)

APB CSS - Atomic Parts Base CSS -

[http://apbcss.com/](http://apbcss.com/)

*****

## Atomic Parts Base CSS(APB CSS)って何？？

Atomic Design + OOCSS + SMACSS =

**Atomic Parts Base CSS (APB CSS)**

APBCSS は Atomic Parts Base CSSのそれぞれ頭文字を取っていて、「エーピービーシーエスエス」と呼びます。。

APBCSS は Atomic Designをベースに設計された「CSSアーキテクチャ」の一つとなります。


![Atomic Parts Base CSS](http://apbcss.com/img/github/pic001.png)


### ポイント

- シンプル
- 予測可能
- 汎用性
- 再利用可能
- メンテナンス性
- 拡張性
- インタラクティブ


APBCSSの 特徴と致しまして、多くのCSSアーキテクチャでも用いられている、Layoutといった概念はなく、
構成の考え方もその逆で、細部化出来ないUIパーツから、定義していくアーキテクチャとなっております。

「細部化出来ないUIパーツ」をAtomic Partsとして振る舞い、Atomic PartsとAtomic Partsが組み合わさった際に、そのパーツは「Molecules」（分子）として（変化）振る舞われます。

また、それらの、Atomic Parts やMolecules Partsは、「Module」によって包括されます。

Atomic Parts やMolecules Partsが包括された「Module」 を更に「Module」 によって包括していきページは作成されると言った考えです。


*****

## Atoms Style Sheet

**Atomic Design**

![Atomic Design](http://apbcss.com/img/github/atomic-design.png)

[AtomicDesign](http://bradfrost.com/blog/post/atomic-web-design/)

### Atoms （原子）

原子パーツとして振る舞う「ボタン」パーツの例です。

**Button**

![Atoms](http://apbcss.com/img/github/atomic-design_atom.png)

![button](http://apbcss.com/img/github/btn.png)

原子classである「btn」と「Number」typeのclassを付与した例となります。


HTML
````
<p class="btn primary"><a href="#">Button</a></p>
````

CSS

````
.btn {
  position: relative;
  width: 200px;
  height: 40px;
  border-radius: 6px;
  a {
    display: block;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
  }
  &.primary {
    background: #404040;
    @include background(linear-gradient(top, #404040, #282828));
    &:hover { background: #303030; }
  }
}
````
**Icon**

原子パーツとして振る舞う「アイコン」パーツの例です。

![Atoms](http://apbcss.com/img/github/atomic-design_atom.png) 

![Icon](http://apbcss.com/img/github/github.png) 

原子classである「icon」と、その「Semantic name」となるClassを付与した例となります。


HTML
````
<p class="icon social github"></p>
````

CSS
````
.icon {
  display: inline-block;
  &.social {
    width: 34px;
    height: 34px;
    background: url(SpriteImagePath) no-repeat;
    @include background-size(205px auto);
    &.github { background-position: -171px top; }
  }
}
````

これら「原子パーツ」には、Layoutを定義するStyleは発生致しません。

![Properties of the layout style is not included.](http://apbcss.com/img/github/no_layout.png)

*****

## Molecules Style Sheet

Atomic Parts とAtomic Partsが組み合わさった際に、そのパーツは「Molecules」分子として（変化）振る舞われます。

また、これらの、Atomic Parts やMolecules Partsは、「Module」によって包括されます。

### Molecules （分子）

![Molecules](http://apbcss.com/img/github/atomic-design_molecules.png)

**Button + Icon**

![Button + Icon](http://apbcss.com/img/github/btn_icon.png)

HTML

````
<p class="btn primary"><a href="#"><span class="icon social github"></span>Button</a></p>
````

CSS

````
.btn {
    .icon {
        &.social {
            margin: 0px 6px -11px -34px;
        }
    }
}
````

原子パーツとして振る舞っている「ボタン」には、Layoutを定義するStyleは発生致しません。

その子要素である原子パーツ「アイコン」にStyleは発生致します。


![Molecules](http://apbcss.com/img/github/atomic-design_molecules.png)

**Text + Icon**

原子パーツとして振る舞う「テキスト」パーツと原子パーツ「アイコン」の例です。

![Text + Icon](http://apbcss.com/img/github/icon_text.png)

HTML
````
<p class="text"><span class="icon ban"></span>text</p>
````

CSS
````
.text {
  .icon.ban {
    margin: 0 4px -10px 0;
  }
}
````

![Layout property is generated when you became a molecule.](http://apbcss.com/img/github/ok_layout.png)

原子パーツ「アイコン」には、「State」typeの classが付与されています。

原子パーツと原子パーツが合わさり、分子パーツとなった場合は

「テキスト」にはLayoutを定義するStyleは発生致しないのですが、その子要素にはLayoutを定義するStyleが発生致します。

*****

## Multi Class (object-oriented)
### OOCSS + SMACSS

![OOCSS + SMACSS](http://apbcss.com/img/github/pic002.png)

**Excerpts from the 「OOCSS」,「SMACSS 」**

付与されるClassは OOCSS + SMACSS をベースとした、マルチクラスを採用しております。

### CSS Class Type

![CSS Class Type](http://apbcss.com/img/github/css_class_type.png)

- Atomic：原子パーツ名となるクラス名
- Module：UI を包括するモジュール名となるクラス名
- Skin：装飾などのクラス名
- Number：ナンバリング用のクラス名
- State：状態を表すクラス名
- Other：その他のクラス名。パーツのセマンティックネームもここに含む。

**Based on the atom name or module name,
and grant the six types of class name.**

主に、「Atomic」と「Module」のクラス名を基本とします。

つまり、単独クラスで存在するのは基本「Atomic」と「Module」で、

「Skin」「Number」「State」「Other」は、それらパーツの付与クラスとして扱われます。

しかし、ul等をモジュールとして扱う場合の子要素に限っては例外とする。


### CSS Class Type ~ Atomic ~

原子パーツのクラス名となります。

![Atomic](http://apbcss.com/img/github/css_class_type_001.png)
example Class Name
- text
- icon
- btn
- thumbnail
- label
- input
- code
- separate

...

- テキストパーツの場合「text」「〇〇Text」「text〇〇」「〇〇-text」「text-〇〇」...
- アイコンパーツの場合「icon」「〇〇Icon」「icon〇〇」「〇〇-icon」「icon-〇〇」...
- ボタンパーツの場合「btn」「〇〇Btn」「btn〇〇」「〇〇-btn」「btn-〇〇」...
等のクラス名を用いて原子パーツを作成します。

### CSS Class Type ~ Module ~

モジュールのクラス名となります。

![Module](http://apbcss.com/img/github/css_class_type_002.png)
example Class Name
- header
- footer
- contents
- ◯◯View
- mainLogo
- title
- column
- thumbnailList
- textList
- detailBox
- modalWindow

...

- ヘッダーモジュールの場合「header」「〇〇Header」「header〇〇」「〇〇-header」「header-〇〇」...
- タイトルモジュールの場合「title」「〇〇Title」「title〇〇」「〇〇-title」「title-〇〇」...
- リストモジュールの場合「list」「〇〇List」「list〇〇」「〇〇-list」「list-〇〇」...
等のクラス名を用いてモジュールを作成します。


### CSS Class Type ~ Skin ~

ここからのクラスは、原子パーツやモジュールの付与クラスとして扱います。

![Skin](http://apbcss.com/img/github/css_class_type_003.png)
example Class Name
Skin
- red
- blue
- wide
- high
- low
- stripe
- subdued
- small
- middle

...

- ボタンパーツを赤くしたい場合「btn red」「〇〇Btn red」...
- ボタンパーツを広くしたい場合「btn wide」「〇〇Btn wide」...
- ボタンパーツを赤く広くしたい場合「btn red wide」「〇〇Btn red wide」...
- ヘッダーモジュールを高くしたい場合「header high」「〇〇Header high」...
- ◯◯View をストライプ模様にしたい場合「◯◯View stripe」...
- ヘッダーモジュールを広く高くストライプ模様にしたい場合「header wide high stripe」「〇〇Header wide high stripe」...


### CSS Class Type ~ Number ~

ナンバリングのクラス名となります。

![Number](http://apbcss.com/img/github/css_class_type_004.png)
example Class Name
Number
- one
- two
- no[nth]
- type[nth]
- first
- last
- odd
- even

- リストモジュールの3番目「list > no3」「listItem no3」...
- カラムモジュールの2カラム「column two」「◯◯Column two」...

### CSS Class Type ~ State ~

状態を表すクラス名となります。

![State](http://apbcss.com/img/github/css_class_type_005.png)
example Class Name
State
- active
- disable
- tapped
- success
- error
- highlight
- checked
- note
- center
- right

- ボタンパーツがタップされた場合「btn tapped」「〇〇Btn tapped」「btn〇〇 tapped」「〇〇-btn tapped」「btn-〇〇 tapped」...
- 成功メッセージテキスト「text success」「〇〇Text success」「text〇〇 success」「〇〇-text success」「text-〇〇 success」...
- チェックボックスパーツがチェックされた状態「checkBox checked」「〇〇CheckBox checked」「checkBox〇〇 checked」...
- ボタンを右寄せにしたい場合「btn right」「〇〇Btn right」「btn〇〇 right」「〇〇-btn right」「btn-〇〇 right」...
- 注意文言「text note」「〇〇Text note」「text〇〇 note」「〇〇-text note」「text-〇〇 note」...


### CSS Class Type ~ Other ~

その他のクラス名となります。

![Other](http://apbcss.com/img/github/css_class_type_006.png)
example Class Name
Other
- Semantic name
- wrap
- Service name
- Page name
- Controller name
- Namespace

- プライマリーボタン「btn primary」「〇〇Btn primary」「btn〇〇 primary」「〇〇-btn primary」「btn-〇〇 primary」...
- ヘッダーモジュールのラップ要素「header」「〇〇Header」「header〇〇」「〇〇-header」「header-〇〇」...
- サービス名が付与されたヘッダーモジュール「header ServiceName」「〇〇Header ServiceName」「header〇〇 ServiceName」「〇〇-header ServiceName」「header-〇〇 ServiceName」...
- サービス名が付与されたボタン「btn gitHub」「〇〇Btn gitHub」「btn〇〇 gitHub」「〇〇-btn gitHub」「btn-〇〇 gitHub」...
- コントローラー名が付与されたビューモジュール「◯◯View top」...
- ネームスペースが付与されたビューモジュール「◯◯View Namespace」...

etc..

APB CSSでは、クラス名がローワーキャメルケース、ハイフン繋ぎ等と言った、所謂クラス名のレギュレーションは定めておりません。

大事なのは、「原子パーツ」であるか、「モジュール」であるかと

それら「原子パーツ」「モジュール」以外のその他のクラスは付与クラスとして扱うことに重点を置いております。


*****

## Directory structure

APBCSSでは以下のディレクトリ構造及びSCSSファイルの管理方法を推奨しております。

### SCSS Directory

SCSS
````
scss
  |- base
  |- pages
  |- parts
  _common_inc.scss
  _parts.scss
  style.scss
````

- _common_inc.scss: import base and pages
- _parts.scss: import parts files

- _common_inc.scss:プロジェクト全体の共通style
- _parts.scss:原子パーツのstyle

### base Directory

base
````
scss
  |- base
    |- _base.scss
    |- _mixin.scss
    |- _reset.scss
    |- _setting.scss
````
- _base.scss: Define -based style of application
- _mixin.scss: Define mixin style
- _reset.scss: Initialize the style
- _setting.scss: Define such as variables and prefix

- _common_inc.scss:プロジェクト全体の共通のベースとなるstyle
- _mixin.scss: mixin style
- _reset.scss: 初期化 style
- _setting.scss: 変数及びプリフィックスなどを定義したstyle

### parts Directory

パーツディレクトリにパーツ単位でファイル分けを行います。

parts
````
scss
  |- parts
    |- _button.scss
    |- _icon.scss
    |- _list.scss
    |- _paragraph.scss
    ....
````
File group that defines the atom and modules.

### pages Directory

ページ固有のstyleはこちらに格納致します。

pages
````
scss
  |- pages
    |- _top.scss
    |- _info.scss
    |- _profile.scss
    |- _main_contents.scss
    ....
````

主にmargin、position、floatなどのLayout Styleを定義する事になります。

原子パーツにまでするほどでもないページ固有のパーツもこちらに定義すると良いでしょう。

Defines page-specific layout style.

### name space

ネームスペースを設けることによってページ固有のstyleを定義することができます。

HTML
````
<section id="top" class="top">
````
ID is the controller name(pages Directory name)
The class name is the action name, provide a name space.

*****

## Sample
It is this page.

### OfficalPage
[http://apbcss.com/](http://apbcss.com/)

### Document
[slideshare](http://www.slideshare.net/daisuketakayama75/apbcss-atomic-parts-base-css)

### Blog
[web帳](http://www.webcyou.com)

*****

## Other
### Author

**Name** :
Daisuke Takayama

**Country** :
Japan

**Job** :
FrontEnd Engineer

**twitter**

[@webcyou](https://twitter.com/webcyou)
[@panicdragon](https://twitter.com/panicdragon)

