<template>
  <div >
    
    <Share />
    <Header />
    <vue-draggable-resizable :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="false">
      <div class="quick-menu">
          <quick-menu :menu-count=getCount :icon-class=icons :menu-url-list=list :background-color=backgroundColor :color=color :position=position :is-open-new-tab=getIsOpenNewTab @process=print></quick-menu>
      </div>
    </vue-draggable-resizable>


    <router-view />
    <Footer />
    
  </div>
</template>

<script>

import Share from './components/Share.vue'
import quickMenu from 'vue-quick-menu'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'



export default {
  name: 'App',
   data() {
    return {
            width: 0,
            height: 0,
            x: 0,
            y: 0,
            count:4,
            icons:["fa fa-home","fa fa-history","fa fa-cogs","fa fa-address-card"],
            list:[{isLink: true, url: "/CV/" },{'isLink':true,url:"#skillsSection"},{'isLink':true,url:"/CV/portfolio"},{'isLink':true,url:"#ContactMeContent"}],
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
    quickMenu

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
