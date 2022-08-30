---
layout: page
name: index
title: Personal Website
description: >
hide_description: true
menu: true
# permalink: /about
sitemap: false
---
<!-- <script type="text/javascript">
	document.getElementsByClassName("page-title")[0].classList.add("sr-only");
</script> -->

<!-- BACK TO TOP -->

<script type="text/javascript" src="./assets/jquery.min.js"></script>

<div style="display:none;" class="back-to" id="toolBackTop">

        <a title="Back to Top" onclick="window.scrollTo(0,0);return false;" href="#top" class="back-top"></a>

    </div>

<!-- ---------- -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS_HTML" async></script>

<script type="text/x-mathjax-config">
    MathJax.Hub.Config({
        tex2jax: {inlineMath: [['$', '$']]},
        messageStyle: "none"
    });
</script>

<style type="text/css">
	.page-title {
		position: absolute;
		width: 1px;
  		height: 1px;
  		margin: -1px;
  		border: 0;
  		padding: 0;
  		clip: rect(0 0 0 0);
  		overflow: hidden;
	}
  p.main {text-align:justify;  text-justify:inter-ideograph}
  .back-to {

            bottom: 55px;

            overflow: hidden;

            position: fixed;

            right: 10px;

            width: 110px;

            z-index: 999;

        }

        .back-to .back-top {

            background: url("./assets/img/top.png") no-repeat scroll 0 0 transparent;

            display: block;

            float: right;

            height: 50px;

            margin-left: 10px;

            outline: 0 none;

            text-indent: -9999em;

            width: 50px;

        }

        .back-to .back-top:hover {

            background-position: -50px 0


        .el-backtop:hover {
    background-color: rgb(240, 240, 240);
}
.el-backtop {
    position: fixed;
    background-color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    // color: #409eff;
    color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    cursor: pointer;
    z-index: 5;
}
.btn {
    width: 0;
    height: 0;
    position: fixed;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 7px solid #999;
}

        }
</style>


<div class="el-backtop">
   <div class="btn"></div>
</div>
 
 <div id="container" style="height: 100px;">
      <!-- 返回按钮 -->
      <div @click="onBack" @touchstart="han_down($event)" @touchmove="han_move($event)" @touchend="han_up($event)" ref="actionMgr" class="Click_back" style="width: 50px;height: 50px;cursor:pointer;border-radius: 50%;position:fixed;bottom: 2rem;right: 10px;">
        <!-- <div style="text-align: center;font-size:10px;padding-top: 5px;"> -->
          <!-- 返回图标 -->
          <!-- <div style="text-align: center;font-size:10px;">
          <svg class="icon svg-icon" aria-hidden="true">
            <use xlink:href="#iconsvg_fanhui"></use>
          </svg>
        </div> -->
        <p style="color:#fff;font-size:13px;text-align: center;padding-top: 16px;">返回</p>
      </div>
    </div>


<script>
name:'app',
data(){
  data(){
    return{
      iX: 0,//鼠标坐标 与 拖拽按钮 间距 x
      iY: 0,//鼠标坐标 与 拖拽按钮 间距 y
      mousedownState: false, //鼠标默认抬起
    }
  },
  methods:{
    //点击事件
    onBack(){
        this.$router.back(-1)
    },
    //手指按下事件
    han_down(event){
      /* 此处判断  pc 或 移动端 得到 event 事件 */
      var touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
       // 鼠标点击 面向页面 的 x坐标 y坐标
       let { clientX, clientY } = touch;
      // 鼠标x坐标 - 拖拽按钮x坐标  得到鼠标 距离 拖拽按钮 的间距
      this.iX = clientX - this.$refs.actionMgr.offsetLeft;
      // 鼠标y坐标 - 拖拽按钮y坐标  得到鼠标 距离 拖拽按钮 的间距
      this.iY = clientY - this.$refs.actionMgr.offsetTop;
      // 设置当前 状态为 鼠标按下
      this.mousedownState = true;
      let {
          style: actionMgrStyle
        } = this.$refs.actionMgr;
      actionMgrStyle.opacity="1"

    },
    //手指移动事件
    han_move(event){
      //鼠标按下 切移动中
      if (this.mousedownState) {
        /* 此处判断  pc 或 移动端 得到 event 事件 */
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        // 鼠标移动时 面向页面 的 x坐标 y坐标
        let { clientX, clientY } = touch;
        //当前页面全局容器 dom 元素  获取容器 宽高
        let {
          clientHeight: pageDivY,
          clientWidth: pageDivX
        } = this.$refs.pageDiv;

        // pageDivY=461;
        /* 鼠标坐标 - 鼠标与拖拽按钮的 间距坐标  得到 拖拽按钮的 左上角 x轴y轴坐标 */
        let [x, y] = [clientX - this.iX, clientY - this.iY];

        //拖拽按钮 dom 元素  获取 宽高 style 对象
        let {
          clientHeight: actionMgrY,
          clientWidth: actionMgrX,
          style: actionMgrStyle
        } = this.$refs.actionMgr;
        /* 此处判断 拖拽按钮 如果超出 屏幕宽高 或者 小于
           设置 屏幕最大 x=全局容器x y=全局容器y 否则 设置 为 x=0 y=0
        */
        if (x > pageDivX - actionMgrX) {
          x = pageDivX - actionMgrX;
        }
        else if (x < 0) x = 0;
        if (y > document.documentElement.clientHeight - actionMgrY-60){
         //document.documentElement.clientHeight 可视化窗口
         //这里的减去60 是减去的底部固定tab的高度
          y = document.documentElement.clientHeight - actionMgrY-60;
        }
        else if (y < 0){ y = 0;}

        // 计算后坐标  设置 按钮位置
        actionMgrStyle.left = `${x}px`;
        actionMgrStyle.top = `${y}px`;
        actionMgrStyle.bottom = "auto";
        actionMgrStyle.right = "auto";
        //当按下键滑动时， 阻止屏幕滑动事件
        event.preventDefault();


      }
    },
    //手指抬起事件
    han_up(event){
      let {
          style: actionMgrStyle
        } = this.$refs.actionMgr;
        actionMgrStyle.opacity="0.8"
      // 设置当前状态为鼠标抬起
      this.mousedownState = false;
    },
  },
}
</script>


<h2 class="h1" style="color: rgb(1,92,171)" id="about">About Me </h2>

<div style="text-align:justify; text-justify:inter-ideograph;">
<p>Hi! I'm Junjie Yin <a href="https://namedrop.io/junjieyin" title="Pronunciation of My Name" target="_blank"> <span class="icon-volume-medium"></span></a>, pursuing my Master degree in <a href="./#seu"> Southeast University (SEU)</a>, China. Meanwhile, I have a strong desire to pursue a Ph.D and am finding a suitable position. </p>

<p>My research interest includes Stability of power system, Grid-connected converters, Integrated energy system, Lyapunov optimization. </p>

<p>Thanks you for taking time to visit my website! If interested, please  <a href="./#contact-me">contact me </a>. </p> 

<!-- 
Since my sophomore year in <a href="./#ncepu"> North China Electrical Power University (NCEPU)</a>, I joined <a href="https://ieeexplore.ieee.org/author/37404367100" title="Prof. Zhou in IEEEXplore" target="_blank">Prof. Zhenyu Zhou</a>'s Lab and actively participated in scientific research. After that, my undergraduate thesis, titled "Research on Multi-energy Flow Interactive Coupling Characteristics and Optimal Scheduling of Integrated Energy System", was completed under the guidance of <a href="https://ieeexplore.ieee.org/author/37589545400" title="Prof. Zeng in IEEEXplore" target="_blank">Prof. Bo Zeng</a>. In 2020, through the exam-free postgraduate recommendation, I entered Southeast University, supervised by <a href="https://ieeexplore.ieee.org/author/37085418471" title="Prof. Wang in IEEEXplore" target="_blank">Prof. Jianhua Wang</a>.  -->


</div>

<!-- You can find me on [Instagram](http://instagram.com/abirsaha_){:target="_blank"}. -->

<div class="body-social sidebar-social">
  <ul>
    <li> <a href="https://www.linkedin.com/in/abirsaha-" title="LinkedIn" class="no-mark-external" target="_blank"> <span class="icon-linkedin2"></span> <span aria-hidden="true">LinkedIn </span></a></li>
    <li> <a href="https://scholar.google.co.uk/citations?hl=en&amp;user=40lh_7kAAAAJ&amp;view_op=list_works&amp;sortby=pubdate" title="Google Scholar" class="no-mark-external" target="_blank"> <span class="icon-googlescholar"></span> <span aria-hidden="true">Google Scholar </span><span class="sr-only">Abir Saha's Google Scholar page</span></a></li>
    <li> <a href="https://twitter.com/abirsaha_" title="Twitter" class="no-mark-external" target="_blank"> <span class="icon-twitter"></span> <span aria-hidden="true">Twitter </span><span class="sr-only">Abir Saha's Twitter profile</span></a></li>
    <li> <a href="https://instagram.com/abiroutdoors" title="Instagram" class="no-mark-external" target="_blank"> <span class="icon-clarivate-logo"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span> <span aria-hidden="true">Instagram </span><span class="sr-only">Abir Saha's Instagram profile</span></a></li> 
  </ul>
</div>

---

<h3 class="h2" style="color: rgb(1,92,171)" id="toc">Table of Contents</h3>

- [Education](#education)
- [Research](#research)
- [Publications](#publications)
- [Contact Me](#contact-me)

---

<h2 class="h1" style="color: rgb(1,92,171)" id="education">Education </h2>



<table>
<tr>
<td aligen="center"> <img src="./assets/img/logo-seu.svg" class="rounded-circle" style="float: center; vertical-align:middle; margin-right: 1.25rem;  width: 80px;"></td>
<td><h4 id="seu"><a href="https://www.seu.edu.cn/english/" target="_blank">Southeast University (SEU)</a></h4>
  <h6>      <span class="icon-location" style="font-size:10px"></span> Nanjing <span class="icon-clock" style="font-size:10px"> </span>Sep. 2020 - Jun. 2023<br>
      <strong>MS</strong> in Electrical Engineering<br>
      Supervisor: <a href="https://ee.seu.edu.cn/2021/0308/c25248a362833/page.htm" title="Prof. Wang's Web in SEU" target="_blank">Prof. Jianhua Wang</a>  
      <a href="https://www.researchgate.net/profile/Jianhua-Wang-5" title="Prof. Wang's Researchgate" target="_blank"> <span class="icon-researchgate" style="font-size:10px"></span></a> 
  </h6>
</td>
</tr>
<tr>
<td aligen="center"> <img src="./assets/img/logo-ncepu.svg" class="rounded-circle" style="float: center; vertical-align:middle; margin-right: 1.25rem;  width: 80px;"></td>
<td><h4 id="ncepu"><a href="https://english.ncepu.edu.cn/" target="_blank">North China Electrical Power University (NCEPU)</a></h4>
  <h6>      <span class="icon-location" style="font-size:10px"></span> Beijing <span class="icon-clock" style="font-size:10px"> </span> Sep. 2016 - Jun. 2020<br>
  <strong>BS</strong> in Smart Grid Information Engineering<br>
      "<i>Excellent Graduate</i>" Honor
  </h6>
</td>
</tr>
</table>

---
<h2 class="h1" style="color: rgb(1,92,171)" id="research">Research </h2>

<h3 class="h2">Current Projects</h3>
**ACCESSIBILITY IN AUDIO PRODUCTION FOR PEOPLE WITH VISION IMPAIRMENTS**  
*Advisors: [Anne Marie Piper](https://www.ics.uci.edu/~ampiper/){:target="_blank"} and [Darren Gergle](https://dgergle.soc.northwestern.edu/){:target="_blank"}*

In this project, I use interviews, observations, and content analysis to understand how people with vision impairments use mainstream and custom-made software and hardware tools to produce audio content. Taking their current work practices into account, I design accessible tools to support accessible learning in audio production tools for blind audio producers.


<h3 class="h2">Past Projects</h3>
**DESIGN OF SMART TECHNOLOGIES FOR CHILDREN WITH AUTISM SPECTRUM DISORDER**    
*Advisors: [Shameem Ahmed](https://facultyweb.cs.wwu.edu/~ahmeds/){:target="_blank"}  and  [Moushumi Sharmin](https://facultyweb.cs.wwu.edu/~sharmim/){:target="_blank"}*

In this project, we did a systematic literature review and qualitative coding of scholarly articles regarding smart technologies (wearables, smartphones, VR devices etc.) designed to support autistic children. We devised a set of design implications to guide the development of autism support smart technologies.  
<br/>
**DEVELOPMENT OF TESTING METHODS FOR VEHICLE ROAD DEPARTURE MITIGATION SYSTEMS**  
*Advisor: [Stanley Chien](https://et.iupui.edu/people/schien){:target="_blank"}*

In this project sponsored by [Toyota Collaborative Safety Research Center](https://www.toyota.com/csrc/){:target="_blank"}, I worked on the development of standard testing equipment and methods to evaluate the performance of Road Departure Mitigation systems of self-driving vehicles.  
Press release: [[IUPUI](https://news.iu.edu/stories/2017/06/iupui/releases/20-tasi-toyota-autonomous-vehicles.html){:target="_blank"}]

---
<h2 class="h1" style="color: rgb(1,92,171)" id="publications">Publications </h2>

<h3 class="h2">Peer-reviewed Conference Papers</h3>

* **Abir Saha** and Anne Marie Piper. [Understanding Audio Production Practices of People with Vision Impairments](https://abirsh.github.io/publications/BVI-audio-ASSETS2020-preprint.pdf){:target="_blank"}. In *Proceedings of the 22nd International ACM SIGACCESS Conference on Computers and Accessibility (ASSETS 2020)*, Virtual Event, Greece, October 2020.   
<span class="icon-award" aria-hidden="true"></span> **Best Paper Nominee**   
  

* Lin Li, **Abir Saha**, Seeta Ram Pandey, Yaobin Chen, Stanley Chien, and Rini Sherony. Infrared Reflectance Requirements of Metal Guardrail Surrogates for the Evaluation of Vehicle Road Departure Mitigation Systems. In *2019 IEEE Intelligent Transportation Systems Conference (ITSC)*, Auckland, New Zealand, October 2019. [[IEEE Xplore](https://ieeexplore.ieee.org/abstract/document/8917344){:target="_blank"}]   
  

* Moushumi Sharmin, Monsur Hossain, **Abir Saha**, Maitraye Das, Margot Maxwell, and Shameem Ahmed. [From Research to Practice: Informing the Design of Autism Support Smart Technology](https://abirsh.github.io/publications/Autism_CHI18.pdf){:target="_blank"}. In *Proceedings of the ACM Conference on Human Factors in Computing Systems (CHI 2018)*, Montreal, Canada, April 2018. [[ACM DL](https://dl.acm.org/doi/abs/10.1145/3173574.3173676){:target="_blank"}]   
  

* **Abir Saha** and Maitraye Das. Impact of Social Networking on Post-Partum Depression in Women: An Analysis in the Context of Bangladesh. In *Proceedings of the 20th IEEE International Conference on Computer and Information Technology (ICCIT)*, Dhaka, Bangladesh, December 2017. [[IEEE Xplore](https://doi.org/10.1109/ICCITECHN.2017.8281831){:target="_blank"}]   
  
  
<h3 class="h2", id="Journal-Article">Journal Article</h3>

<!-- * Tahsin Reasat, **Abir Saha**, and Md. Forkan Uddin. Cognitive Radio Network with Coordinated Multipoint Joint Transmission. In *International Journal of Communication Systems (IJCS)*, March 2017. [[Wiley](http://onlinelibrary.wiley.com/doi/10.1002/dac.3310/abstract){:target="_blank"}]   -->  
<ul><li><p>Tahsin Reasat, <strong>Abir Saha</strong>, and Md. Forkan Uddin. Cognitive Radio Network with Coordinated Multipoint Joint Transmission. In <em>International Journal of Communication Systems (IJCS)</em>, March 2017. [<a href="http://onlinelibrary.wiley.com/doi/10.1002/dac.3310/abstract" target="_blank">Wiley</a>]</p></li></ul>


<h3 class="h2">Short Papers</h3>

<ul><li><p><strong>Abir Saha</strong>. 2022. <a href="https://abirsh.github.io/publications/BVI-audio-CHI2022-DC.pdf" target="_blank">Understanding and Designing for Accessibility in Audio Production among People with Vision Impairments</a>. In <em>Extended Abstracts of the 2022 CHI Conference on Human Factors in Computing Systems (CHI 2022)</em>, April 25 – May 05, 2022, New Orleans, LA, USA. [Doctoral Consortium]</p></li></ul>


<ul><li><p>Thomas B. McHugh, <strong>Abir Saha</strong>, David Bar-El, Marcelo Worsley, and Anne Marie Piper. 2020. <a href="https://abirsh.github.io/publications/DHOH-audio-CHI2021-preprint.pdf" target="_blank">Towards Inclusive Streaming: Building Multimodal Music Experiences for the Deaf and Hard of Hearing</a>. In <em>Extended Abstracts of the 2021 CHI Conference on Human Factors in Computing Systems (CHI 2021)</em>, May 08–13, 2021, Online Virtual Conference. [Late-Breaking Work]</p></li></ul>
  
  
<h3 class="h2", id="patents">Patents</h3>

* Rini Sherony, Stanley Yung-Ping Chien, Qiang Yi, Jun Lin, **Abir Saha**, Yaobin Chen, and Chi-Chih Chen. Surrogate for concrete divider. *US Patent 10597835*, March 2020. [[USPTO](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&p=1&u=/netahtml/PTO/srchnum.html&r=1&f=G&l=50&d=PALL&s1=10597835.PN.){:target="_blank"}]   
  
  
* Rini Sherony, Stanley Yung-Ping Chien, Qiang Yi, Jun Lin, **Abir Saha**, Yaobin Chen, and Chi-Chih Chen. Surrogate for metal guardrail. *US Patent 10689818*, June 2020. [[USPTO](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&p=1&u=/netahtml/PTO/srchnum.html&r=1&f=G&l=50&d=PALL&s1=10689818.PN.){:target="_blank"}]  
  

---
<h2 class="h1" style="color: rgb(1,92,171)" id="contact-me">Contact Me </h2>

Northwestern University  
Frances Searle Building #2-430  
2240 Campus Drive  
Evanston, IL 60208, USA

<p class="home-element"><strong>abi<!-- ghuiknh -->r [a<!-- jngingbhir -->t] u [dot] nor<!-- hdfuhfbrhd -->thweste<!-- hfugu -->rn [dot] edu</strong></p>

<style type="text/css">
  .body-social > ul {
    display: inline-block;
    list-style-type: none;
    margin-bottom: 0;
    overflow: hidden;
    padding: 0;
  }

  .body-social > ul > li {
    float: left;
    
    /* padding-left: 5px; */
    padding-right: 10px;
    
    /* display: inline-block; */
  }


  .body-social > ul > li > a {
    display: inline;
    text-align: center;
    font-size: 0.95rem;
    font-weight: 600;
    /*width: 3rem;*/
    /*height: 4rem;*/
    padding: 4px;
    
    /* line-height: 3rem; */
    
    text-decoration: none;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    transition: background-color 250ms, color 250ms, text-decoration-color 250ms, border-color 250ms;
    
    /* border-bottom: none; */
  }

  .body-social > ul > li > a:not(.btn):not(.no-hover) {
    border-color: var(--accent-color);
  }

  .body-social > ul > li > a:hover {
    color: white;
    background-color: var(--accent-color);
    border-radius: 5px;
    padding: 4px;
    transition: background-color 250ms, color 250ms, text-decoration-color 250ms, border-color 250ms;
  }
</style>
