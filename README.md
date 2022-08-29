# junjie-yin.github.io

## Table of Contents

- [junjie-yin.github.io](#junjie-yingithubio)
	- [Table of Contents](#table-of-contents)
	- [Installation](#installation)
	- [结构](#结构)

## Installation   

Follow the following instructions to install the Dumbarton theme: 

1. Clone the repo.
    ```bash
    git clone https://github.com/tcbutler320/Jekyll-Theme-Dumbarton.git
    cd Jekyll-Theme-Dumbarton
    ```
2. Use Bundler to install dependancies
    ```bash
    bundle install
    ```
3. Start the Jekyll development server
    ```bash
    bundle exec jekyll serve
    ```
## 结构  
	.
	├── _config.yml # 配置文件
	├── _includes # 页面组件方便重用
	|   ├── footer.html # 页脚
	|   └── head.html # html文档的头部内容
	|   └── header.html # 顶部菜单栏
	|   └── pageNav.html # 文章列表分页组件
	├── _layouts # 布局模板
	|   ├── default.html # 默认模板
	|   └── post.html # 文章页面模板
	├── _posts # 这里放文章
	|   ├── 2017-05-03-elements-of-javascript-style.md # 命名格式：年-月-日-文章标题.md
	|   └── 2007-02-21-life-on-mars.md
	├── _site # Jekyll将源码处理后生成的站点文件，里面的内容可直接发布
	├── assets # 存放用于线上环境的静态资源，如需修改css和js文件请到dev文件夹
	|   ├── css # dev文件夹中sass编译后的样式文件
	|   └── fonts # 字体文件
	|   └── icons # 图标文件
	|   └── img #  图片文件
	|   └── js # dev文件夹中处理后的脚本文件
	├── dev # 开发文件
	|   ├── js # 存放脚本源码
	|   └── sass # 样式源码
	|       └── app.scss # 整合下面的所有样式文件
	|       └── base.scss # 引入字体、Reset部分样式
	|       └── common.scss # 模板的主要样式
	|       └── helper.scss # 工具样式
	|       └── layouts.scss # 响应式布局
	└── gulpfile.js # 自动化任务脚本
	└── index.html # 模板首页
	└── tags.html # 标签页面
	└── 404.html # 404页面
	└── package.json # 管理项目的依赖项
<h2 class="h1" style="color: rgb(1,92,171)" id="other">tutorial </h2>


<p>I occasionally contribute to some open source projects, including:</p>

<ul>
  <li>Maintaining abandoned or near-abandoned Android apps, like fixing bugs and bringing them to F-Droid standards. Barinsta was no exception. <a href="https://github.com/austinhuang0131/CanadaWeather">Canada Weather &amp; Radar</a>, <a href="https://github.com/jguerinet/MyMartlet">MyMartlet</a>, and <a href="https://github.com/ultranity/Pix-EzViewer">Pix-EzViewer</a> fall into this category as well.</li>
  <li>Adding features to selfhostable software, including <a href="https://github.com/PrivateBin/PrivateBin/">PrivateBin</a> and <a href="https://github.com/RSS-Bridge/rss-bridge">RSS-Bridge</a>.</li>
</ul>


<p><img src="./assets/img/sidebar-bg4.jpg" alt="Business models" style="float: left; margin-right: 1.25rem; margin-bottom: 0.5rem; " width="200" loading="lazy"></p>
<p>Innovation starts here. We’ll design—or transform—your business, revenue, and pricing models for product/market fit, competitive strength, and durability against the future. We’ll uncover and address hidden assumptions, blind spots, and risks, and then put your models into play.</p>

<p><img src="./assets/img/OIP.jpg"  class="avatar" style="float: right;" ></p>
<blockquote><p>“Shawn is by far one of the smartest and savviest people I know. He is equally adept in conventional and unconventional business environments. Shawn is a master magician at getting things moving in the right direction with focus and clarity. He is a leader.” <br> —<strong>Charles Alexander, Founder, Systemic</strong></p></blockquote>

<p><img src="./assets/img/OIP.jpg"  class="avatar" style="float: right;" ></p>

> “Shawn is by far one of the smartest and savviest people I know. He is equally adept in conventional and unconventional business environments. Shawn is a master magician at getting things moving in the right direction with focus and clarity. He is a leader.” <br>
> —**Charles Alexander, Founder, Systemic**


1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item


I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).


```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.




| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
