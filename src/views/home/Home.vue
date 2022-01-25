<template>
  <el-container style="width: 100%; height: 100%">
    <el-main>
      <section class="home-main-container">
        <div style="width: 160px; height: 160px" class="avatar-container">
          <img
            alt="Avatar"
            draggable="false"
            style="width: 100%; height: 100%"
            src="@/assets/img/homepage/behand_mac_x2.png"
          />
        </div>
        <div class="home-main-container-desc">
          <div class="home-main-container-desc-greeting">
            {{ $t(`homePage.greeting`) }}
          </div>
          <div
            class="home-main-container-desc-titles"
            v-html="$t(`homePage.content`)"
          ></div>
          <div class="home-main-container-desc-details">
            {{ $t(`homePage.desc`) }}
          </div>
        </div>
        <button class="about-btn">{{ $t(`homePage.button`) }}</button>
      </section>
    </el-main>
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
</template>

<script setup lang="ts"></script>
<style lang="less" scoped>
@import "./home.less";
.el-col {
  border-radius: 4px;
}

.home-main-container {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  min-height: calc((100vh - 3.6rem) - 3.6rem);
  margin: 0px auto;
  &-desc {
    &-greeting {
      margin-top: 2.5rem;
      font-weight: bold;
      font-size: 1.5rem;
    }
    &-titles {
      margin: 2.5rem 0px;
      font-weight: bold;
      font-size: 5rem;
    }
    &-details {
      margin-bottom: 4rem;
      font-weight: bold;
      font-size: 1.2rem;
      line-height: 1.5;
    }
  }
}
.avatar-container {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  background-color: hsl(var(--color-primary-hsl), 0.3);
  border-radius: 50%;
}
.about-btn {
  display: block;
  width: 10rem;
  height: 3rem;
  margin-bottom: 2rem;
  color: var(--color-background);
  font-weight: bold;
  line-height: 3rem;
  text-align: center;
  background-color: var(--color-text);
  border-radius: 1.5rem;
  user-select: none;
}
</style>
