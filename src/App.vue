<template>
  <div >
    
    <Share />
    <Header />
    <vue-draggable-resizable :w="100" :h="100" :x="x" :y="y" @dragging="onDrag" @resizing="onResize" :parent="true">
      <div class="quick-menu">
          <quick-menu :menu-count=getCount :icon-class=icons :menu-url-list=list :background-color=backgroundColor :color=color :position=position :is-open-new-tab=getIsOpenNewTab @process=print></quick-menu>
      </div>
    </vue-draggable-resizable>


    <router-view />
    <Footer />
    <Banner 
    v-if="showBanner"
    v-on:cloas-banner="cloasBanner"
    />
  </div>
</template>

<script>

import Share from './components/Share.vue'
import quickMenu from 'vue-quick-menu'
import Banner from './components/Banner.vue'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'



export default {
  name: 'App',
   data() {
    return {
            showBanner: true,
            showContent:false,
            width: 0,
            height: 0,
            x: window.innerWidth-100,
            y: window.innerHeight-100,
            count:4,
            icons:["fa fa-home","fa fa-history","fa fa-cogs","fa fa-address-card"],
            list:[{isLink: true, url: "/CV/" },{'isLink':true,url:"/CV/#skillsSection"},{'isLink':true,url:"/CV/portfolio"},{'isLink':true,url:"/CV/#ContactMeContent"}],
            backgroundColor:'rgb(170 174 177)',
            color:'black',
            position:'bottom-right',
            isOpenNewTab:false,
      
    }
  },
  components: {
    Header,
    Footer ,
    Share,
    quickMenu,
    Banner,


  },
  methods:{
        onResize: function (x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        },
        onDrag: function (x, y) {
        this.x = x
        this.y = y
        },
         cloasBanner(bool){
          if(bool == false){
            this.showBanner = false
            this.showContent = true
            $emit('cloas-banner', false)
          }
        },
    }
 
 
}
</script>

<style>
body{
  padding:0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.quick-menu{
           display:none;
    }
    .handle{
      display:none!important;
    }
    .resizable {
      border: 0px!important;
      z-index: 9999!important;
      position: fixed!important;
    }
    .quick-menu .sub-menu{
      opacity: 0;
      transition: .5s;
    }
    .quick-menu.active .sub-menu{
      opacity: 1;
    }
 @media only screen and (max-width: 425px) {
       .quick-menu{
           display:block;
       }

    }

</style>
