<template>
  <div>
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="item in list" :key="item.imagePath">
        <!-- <img :src="{{item.imagePath}}"/> -->
        <div>
          <img :src="item.imagePath" />
        </div>
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">Home</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-email"
            ><span class="mui-badge">5</span></span
          >
          <div class="mui-media-body">Email</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">Chat</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">location</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">Search</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">Phone</div></a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.getLunbotu();
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getLunbotu() {
      this.$http.get("/banner/json").then((result) => {
        console.log(result);
        this.list = result.body.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item:nth-child(1) {
    background-color: aqua;
  }
  .mint-swipe-item:nth-child(2) {
    background-color: red;
  }
  .mint-swipe-item:nth-child(3) {
    background-color: yellow;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
