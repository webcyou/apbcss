# APB CSS - Atomic Parts Base CSS -

![screen_shot_ogp.png](http://apbcss.com/img/common/screen_shot_ogp.png)

APB CSS - Atomic Parts Base CSS -

[http://apbcss.com/](http://apbcss.com/)

*****

## What is Atomic Parts Base CSS(APB CSS)

Atomic Design + OOCSS + SMACSS =

**Atomic Parts Base CSS (APB CSS)**

![Atomic Parts Base CSS](http://apbcss.com/img/github/pic001.png)


### Point

- Simple
- Predictable
- General versatility
- Reusable
- Maintainable
- Scalable
- Interactive

*****

## Atoms Style Sheet

**Atomic Design**

![Atomic Design](http://apbcss.com/img/github/atomic-design.png)

[AtomicDesign](http://bradfrost.com/blog/post/atomic-web-design/)

### Atoms

**Button**

![Atoms](http://apbcss.com/img/github/atomic-design_atom.png)

![button](http://apbcss.com/img/github/btn.png)

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

![Atoms](http://apbcss.com/img/github/atomic-design_atom.png) 

![Icon](http://apbcss.com/img/github/github.png) 


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

![Molecules](http://apbcss.com/img/github/atomic-design_molecules.png)

**Text + Icon**

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

*****

## Multi Class (object-oriented)
### OOCSS + SMACSS

![OOCSS + SMACSS](http://apbcss.com/img/github/pic002.png)

**Excerpts from the 「OOCSS」,「SMACSS 」**

### CSS Class Type

![CSS Class Type](http://apbcss.com/img/github/css_class_type.png)

- Atomic：Class name of atom
- Module：UI package name
- Skin：Class name of decoration
- Number：Numbering of the class name
- State：Class name that represents the state
- Other：Other class name

**Based on the atom name or module name,
and grant the six types of class name.**


### CSS Class Type ~ Atomic ~

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

### CSS Class Type ~ Module ~

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

### CSS Class Type ~ Skin ~

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
- 
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

