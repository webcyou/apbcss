# APB CSS - Atomic Parts Base CSS -

![screen_shot_ogp.png](http://apbcss.com/img/common/screen_shot_ogp.png)

## What is Atomic Parts Base CSS(APB CSS)

Atomic Design + OOCSS + SMACSS =
Atomic Parts Base CSS (APB CSS)

### Point

- Simple
- Predictable
- General versatility
- Reusable
- Maintainable
- Scalable
- Interactive

## Atoms Style Sheet
Atomic Design

[AtomicDesign](http://bradfrost.com/blog/post/atomic-web-design/)

### Atoms
|            |  Button     |
|:----------:|:-----------:|
|            |             |

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

|            |    Icon     |
|:----------:|:-----------:|
|            |             |

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



## Molecules Style Sheet
### Molecules

|            | Button + Icon |
|:----------:|:-----------:|
|            |             |

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


|            | Text + Icon |
|:----------:|:-----------:|
|            |             |

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


## Multi Class (object-oriented)
### OOCSS + SMACSS


Excerpts from the 「OOCSS」,「SMACSS 」

### CSS Class Type

- Atomic：Class name of atom
- Module：UI package name
- Skin：Class name of decoration
- Number：Numbering of the class name
- State：Class name that represents the state
- Other：Other class name


### CSS Class Type ~ Atomic ~
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
example Class Name
Other
- wrap
- Service name
- Page name
- Controller name
- Namespace

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

## Sample
It is this page.

### Document
[slideshare](http://www.slideshare.net/daisuketakayama75/apbcss-atomic-parts-base-css)

### Blog
[web帳](http://www.webcyou.com)



## Other
### Author

#### Name
Daisuke Takayama
#### Country
Japan
#### Job
FrontEnd Engineer

#### twitter
[@webcyou](https://twitter.com/webcyou)
[@panicdragon](https://twitter.com/panicdragon)
