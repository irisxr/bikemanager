<template>
  <baidu-map class="map" :center="{lng: item.lng, lat: item.lat}" :zoom="15">
    <bm-marker :position="{lng: item.lng, lat: item.lat}" :dragging="true" @click="infoWindowOpen">
       <bm-label content="我在这里" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
    </bm-marker>
  </baidu-map>
</template>

<style scoped="">
.map {
  width: 100%;
  height: 500px;
}
</style>

<script>
import { getBikesDetailUrl } from "../api/api";
export default {
  data() {
    return {
      item: {
        lng: 24.122312,
        lat: 118.211223
      }
    };
  },
  methods: {
    getBikeDetail() {
      getBikesDetailUrl(this.$route.params).then(res => {
        this.item = res.data.data;
      });
    }
  },
  mounted() {
    this.getBikeDetail();
  }
};
</script>

