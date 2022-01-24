<template>
  <div class="slide-word">
    <h1 class="slide-word-container">
      <p class="slide-word-container-first" ref="first">
        {{ first }}
      </p>
      <p class="slide-word-container-second" ref="second">
        {{ second }}
      </p>
    </h1>
  </div>
</template>

<script>
export default {
  name: "SlideWord",
  data() {
    return {
      first: "超越",
      second: "极限",
      position: 0,
      elementOffsetTop: 0,
      difference: 3000,
    };
  },
  props: {
    showInstant: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
    this.handleFadeAndMove(!this.showInstant);
  },
  methods: {
    handleFadeAndMove(open) {
      if (open) {
        let fadeAndMove = [
          {
            opacity: 0,
            transform: `translateY(30vh)`,
          },
          {
            opacity: 1,
            transform: `translateY(0vh)`,
          },
        ];
        let wordsTiming = {
          duration: 1200,
          easing: "ease-in-out",
        };
        const firstElement = this.$refs.first;
        const secondElement = this.$refs.second;
        firstElement.animate(fadeAndMove, wordsTiming);
        secondElement.animate(fadeAndMove, wordsTiming);
      }
    },
    handleScroll() {
      let scrollTop = Math.floor(
        document.body.scrollTop ||
          document.documentElement.scrollTop ||
          window.pageYOffset
      );
      const firstElement = this.$refs.first;
      const secondElement = this.$refs.second;
      const offsetTop = this.elementOffsetTop;

      setTimeout(() => {
        this.position = scrollTop - offsetTop;
      }, 10);
      if (
        scrollTop - offsetTop < this.difference &&
        scrollTop - offsetTop > 0
      ) {
        for (
          let index = this.position;
          index < scrollTop - offsetTop;
          index++
        ) {
          firstElement.style.transform = "translateX(" + -index + "px)";
          secondElement.style.transform = "translateX(" + index + "px)";
        }
        for (
          let index = this.position;
          index > scrollTop - offsetTop;
          index--
        ) {
          firstElement.style.transform = "translateX(" + -index + "px)";
          secondElement.style.transform = "translateX(" + index + "px)";
        }
      }
    },
  },
};
</script>

<style lang="less">
.slide-word {
  &-container {
    // position: relative;
    // clear: both;
    overflow: hidden;
    &-first {
      display: block;
      padding-bottom: 6vh;
      // writing-mode: horizontal-tb;
      @media only screen and (min-width: 320px) {
        height: 30vw;
        font-size: 30vw;
        line-height: 30vw;
        letter-spacing: 8vw;
      }
      @media only screen and (min-width: 640px) {
        height: 40vw;
        font-size: 40vw;
        line-height: 40vw;
        letter-spacing: 9vw;
      }
      @media only screen and (min-width: 750px) {
        height: 40vw;
        font-size: 40vw;
        line-height: 40vw;
        letter-spacing: 8vw;
      }
      @media only screen and (min-width: 1242px) {
        height: 26vw;
        font-size: 26vw;
        line-height: 26vw;
        letter-spacing: 6vw;
      }
      padding-left: 60vw;
      white-space: nowrap;
    }
    &-second {
      margin-left: -50vw;
      @media only screen and (min-width: 320px) {
        height: 30vw;
        font-size: 30vw;
        line-height: 30vw;
        letter-spacing: 8vw;
      }
      @media only screen and (min-width: 640px) {
        height: 40vw;
        font-size: 40vw;
        line-height: 40vw;
        letter-spacing: 9vw;
      }
      @media only screen and (min-width: 750px) {
        height: 40vw;
        font-size: 40vw;
        line-height: 40vw;
        letter-spacing: 8vw;
      }
      @media only screen and (min-width: 1242px) {
        height: 26vw;
        font-size: 26vw;
        line-height: 26vw;
        letter-spacing: 6vw;
      }
      padding-right: 70vw;
      white-space: nowrap;
    }
  }
}
</style>
