<template>
  <!-- 首页入口 -->
  <div class="home-entry">
    <div class="container">
      <!-- 左侧分类 -->
      <HomeCategory />
      <!-- 轮播图 -->
      <HomeBanner />
    </div>
  </div>
  <!-- 新鲜好物 -->
  <!-- <HomeNew /> -->
  <!-- 人气推荐 -->
  <!-- <HomeHot /> -->
  <!-- 品牌组件 -->
  <!-- <HomeBrand /> -->
  <!-- 产品区块 -->
  <!-- <HomeProduct /> -->
  <!-- 最新专题 -->
  <!-- <HomeSpecial /> -->
</template>

<script>
import HomeCategory from './components/home-category'
import HomeBanner from './components/home-banner'
export default {
  name: 'HomePage',
  components: { HomeCategory, HomeBanner }
}
</script>

<style lang="less" scoped></style>
