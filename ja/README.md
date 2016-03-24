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

![Properties of the layout style is not included.](http://apbcss.com/img/github/no_layout.png)

*****

## Molecules Style Sheet
### Molecules

Atomic Parts とAtomic Partsが組み合わさった際に、そのパーツは「Molecules」分子として（変化）振る舞われます。

また、これらの、Atomic Parts やMolecules Partsは、「Module」によって包括されます。

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

原子パーツ「アイコン」には、「State」typeの classが付与されています。
この際も「テキスト」にはLayoutを定義するStyleは発生致しません。


![Layout property is generated when you became a molecule.](http://apbcss.com/img/github/ok_layout.png)

*****

## Multi Class (object-oriented)
### OOCSS + SMACSS

![OOCSS + SMACSS](http://apbcss.com/img/github/pic002.png)

**Excerpts from the 「OOCSS」,「SMACSS 」**

付与されるClassはマルチクラスを採用しております。

### CSS Class Type

![CSS Class Type](http://apbcss.com/img/github/css_class_type.png)

- Atomic：原子パーツ名となるクラス名
- Module：UI を包括するモジュール名となるクラス名
- Skin：装飾などのクラス名
- Number：ナンバリング用のクラス名
- State：状態を表すクラス名
- Other：その他のクラス名。パーツのセマンティックネームもここに含む。

主に、「Atomic」と「Module」のクラス名を基本とします。
つまり、単独クラスで存在するのは「Atomic」と「Module」で、「Skin」「Number」「State」「Other」は、それらパーツの付与クラスとして扱われます。

**Based on the atom name or module name,
and grant the six types of class name.**


### CSS Class Type ~ Atomic ~

原子パーツ名となります。

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

テキストパーツの場合「text」「〇〇Text」「text〇〇」「〇〇-text」「text-〇〇」...
アイコンパーツの場合「icon」「〇〇Icon」「icon〇〇」「〇〇-icon」「icon-〇〇」...
ボタンパーツの場合「btn」「〇〇Btn」「btn〇〇」「〇〇-btn」「btn-〇〇」...
等のクラス名を用いて原子パーツを作成します。

### CSS Class Type ~ Module ~

モジュール名となります。

![Module](http://apbcss.com/img/github/css_class_type_002.png)
example Class Name
- header
- footer
- contents
- mainLogo
- title
- column
- thumbnailList
- textList
- detailBox
- modalWindow

...

ヘッダーモジュールの場合「header」「〇〇Header」「header〇〇」「〇〇-header」「header-〇〇」...
タイトルモジュールの場合「title」「〇〇Title」「title〇〇」「〇〇-title」「title-〇〇」...
リストモジュールの場合「list」「〇〇List」「list〇〇」「〇〇-list」「list-〇〇」...
等のクラス名を用いてモジュールを作成します。


### CSS Class Type ~ Skin ~

ここから、原子パーツやモジュールの付与クラスとして扱います。

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



### CSS Class Type ~ Number ~

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

### CSS Class Type ~ State ~

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


### CSS Class Type ~ Other ~

![Other](http://apbcss.com/img/github/css_class_type_006.png)
example Class Name
Other
- Semantic name
- wrap
- Service name
- Page name
- Controller name
- Namespace

etc..

*****

## Directory structure
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

### parts Directory

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

Defines page-specific layout style.

### name space
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

