<template>
  <div class="home-page">
    <!-- TODO 插入一个header的组件 -->
    <header>
      <div class="home-page-logo">
        <a href>
          <!-- TODO 最好用Svg -->
          <img alt="hyk logo" src="@assets/img/logo/homePageLogo.png" />
          <span class="logoText">快宇Blog</span>
        </a>
      </div>
      <div class="home-page-play-item" style="display: none">
        <span>
          想
          <span>玩吗？</span>
        </span>
        <span>按下去，来玩</span>
        <svg style="display: none">
          <!-- TODO 一个圆圈 -->
          <circle />
        </svg>
      </div>
    </header>
    <section>
      <div class="home-page-show-me-text" ref="showMeText">
        <p>干得好呀，在茫茫Blog里找到了快宇Blog。</p>
        <p align="left">
          一个小小的Web开发者的博客，所以我决定向<br />你分享在成为一个程序员的路上，<br />
          我所有的知识和收藏。
        </p>
      </div>
    </section>
    <section>
      <two-big-word :showInstant="false"></two-big-word>
    </section>
    <section>
      <div class="home-page-left-side-pic">
        <img src="@assets/img/homepage/codes.jpeg" />
      </div>
    </section>
    <section class="home-page-chase-text">
      <div class="notShow home-page-chase-text-title" ref="showMeChaseTitle">
        <span>追逐的事情</span>
      </div>
      <div class="notShow home-page-chase-text-content" ref="showMeChase">
        <h3>
          在小的时候，我时常会想这个互联网是怎么样运作的
          ？长大后的我逐渐明白，每个点击背后的都有不计其数的
          代码在为我们的点击事件的目的而运行。通过编程每个人都可以实现自己的价值，思想和想象力。传播出自己的声音，
          让大家可以通过足不出户的交流成为一个大家庭。
          <strong>stay hungry stay foolish</strong>
        </h3>
      </div>
    </section>
    <section>
      <div class="home-page-three-pic">
        <div class="home-page-three-pic-left">
          <img src="@assets/img/homepage/hackathon.png" />
        </div>
        <div class="home-page-three-pic-right">
          <div><img src="@assets/img/homepage/hackathon-1.png" /></div>
          <div>
            <img src="@assets/img/homepage/beyond_boundaries_main.png" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="home-page-choose">
        <div class="home-page-choose-title">
          <span>那我们就开始吧！</span>
        </div>
        <div class="home-page-choose-left">
          <span>从</span>
        </div>
        <div class="home-page-choose-middle">
          <ul>
            <li>
              <a href>
                <span>博客</span>
              </a>
            </li>
            <li>
              <a href>
                <span>个人</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/shaonhuang">
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="home-page-choose-right">
          <span>开始</span>
        </div>
      </div>
    </section>
    <section class="home-page-bottom-nav">
      <div class="home-page-bottom-nav-social">
        <div class="home-page-bottom-nav-social-title">
          <span>社交号</span>
        </div>
        <div class="home-page-bottom-nav-social-options" ref="socialOptions">
          <ul>
            <li class="notShow">
              <a href="https://space.bilibili.com/275587121">
                <!-- <svg href > -->
                <img src="@assets/img/logo/bilibili.svg" />
                <span>BiliBili</span>
              </a>
            </li>
            <li class="notShow">
              <a href="https://github.com/shaonhuang">
                <img src="@assets/img/logo/github.svg" />
                <span>GitHub</span>
              </a>
            </li>
            <li class="notShow">
              <a @click="alertWeChatId()">
                <img src="@assets/img/logo/wechat.svg" />
                <span>WeChat</span>
              </a>
            </li>
            <li class="notShow">
              <a href="https://www.linkedin.com/in/yukuaihuang">
                <img src="@assets/img/logo/linkedin.svg" />
                <span>Linkedin</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="home-page-bottom-nav-links">
          <span>友情链接</span>
        </div>
        <div class="home-page-bottom-nav-links-options"></div>
      </div>
    </section>
    <div class="home-page-bottom-copyright">
      <span>
        Copyright © 2020 黄宇快 Built with Myself. 京ICP备20030851号
      </span>
    </div>
  </div>
</template>

<script defer>
// @ is an alias to /src
import SlideWord from "@/components/common/slide-word/index.vue";

export default {
  name: "Home",
  components: {
    "two-big-word": SlideWord,
  },
  data() {
    return {
      opacityYello: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.showMeChase);
    window.addEventListener("scroll", this.slowShowSecondContentTitle);
    window.addEventListener("scroll", this.slowShowSocialIconTitle);
  },
  mounted() {
    (() => {
      const element = this.$refs.showMeText;
      let start = -1000;

      function step(timestamp) {
        if (start === undefined) start = timestamp;
        const elapsed = start + timestamp;

        element.style.transform =
          "translateY(" + 0.001 * elapsed * elapsed + "px)";

        if (elapsed < 0) {
          window.requestAnimationFrame(step);
        }
      }
      window.requestAnimationFrame(step);
    })();
  },
  methods: {
    alertWeChatId() {
      alert("WeChatID:  wxid_dl12roffmg0q22");
    },
    showMeChase() {
      let scrollTop = Math.floor(
        document.body.scrollTop ||
          document.documentElement.scrollTop ||
          window.pageYOffset
      );
      const element = this.$refs.showMeChase;
      const elementTitle = this.$refs.showMeChaseTitle;
      if (scrollTop > element.offsetTop - 1000) {
        element.classList.add("slowShowUp50Percent");
        element.classList.remove("notShow");
        setTimeout(() => {
          elementTitle.classList.add("slowShowUp50PercentLeft");
          elementTitle.classList.remove("notShow");
        }, 500);
      }
    },
    slowShowSocialIconTitle() {
      let scrollTop = Math.floor(
        document.body.scrollTop ||
          document.documentElement.scrollTop ||
          window.pageYOffset
      );
      const element = this.$refs.socialOptions;
      if (scrollTop > element.offsetTop - 1000) {
        element.getElementsByTagName("li").forEach((item, i) => {
          setTimeout(() => {
            item.classList.add("slowShowUp150px");
            item.classList.remove("notShow");
          }, (i + 1) * 200);
        });
      }
    },
    showUpAnimation(obj, time, minPosition) {
      const element = obj;
      let start = -time;

      function step(timestamp) {
        if (start === undefined) start = timestamp;
        const elapsed = start + timestamp;

        //这里使用`Math.min()`确保元素刚好停在minPositionpx的位置。
        element.style.transform =
          "translateY(" +
          Math.min(0.001 * elapsed * elapsed, minPosition) +
          "px)";

        if (elapsed < 0) {
          // start + timestamp = elapsed < 0后停止动画
          window.requestAnimationFrame(step);
        }
      }
      window.requestAnimationFrame(step);
    },
  },
};
</script>
<style lang="less" scoped>
@import "./home.less";
</style>
