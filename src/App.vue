<template>
  <div id="app">
    <Banner 
    v-if="showBanner"
    v-on:cloas-banner="cloasBanner"
    />
    <Header v-if="showContent"/>
    <FirstSection v-if="showContent"/>
    <SkillSection v-if="showContent" />
    <div class="groupe-section" v-if="showContent">
      <Portfolio v-if="showContent"/>
      <WorkExperience v-if="showContent"/>
    </div>
    <ContactMe v-if="showContent"/>
    <Footer v-if="showContent"/>
    <Share v-if="showContent"/>

  </div>
</template>

<script>

import Banner from './components/Banner.vue'
import Share from './components/Share.vue'


import Header from './components/Header.vue'
import FirstSection from './components/FirstSection.vue'
import SkillSection from './components/SkillsSection.vue'
import Portfolio from './components/Portfolio.vue'
import WorkExperience from './components/WorkExperience.vue'
import ContactMe from './components/ContactMe.vue'
import Footer from './components/Footer.vue'




export default {
  name: 'App',
   data() {
    return {
      showBanner: true,
      showContent:false,
     
    }
  },
  components: {
    Banner,
    Header,
    FirstSection,
    SkillSection,
    Portfolio,
    WorkExperience,
    ContactMe,
    Footer,
    Share
  },
 
  methods: {
        cloasBanner(bool){
          if(bool == false){
            this.showBanner = false
            this.showContent = true
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
.circle-wrapper {
  position: relative;
  width: 50px;
  height: 50px;
  float: left;
  margin: 10px;
}

.icon {
  position: absolute;
  color: #fff;
  font-size: 30px;
  top: 25px;
  left: 25px;
  transform: translate(-50%, -50%);
}

.circle {
  position: absolute;
    top: -5px;
    left: -5px;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: 2.5px;
    background-clip: content-box;
    -webkit-animation: spin 10s linear infinite;
    animation: spin 10s linear infinite;
}

.circle-wrapper:active .circle {
  animation: spin 2s linear infinite;
}

.success {
  background-color: #4BB543;
  border: 2.5px dashed #4BB543;
}

.error {
  background-color: #CA0B00;
  border: 2.5px dashed #CA0B00;
}

.warning {
  background-color: #F0D500;
  border: 2.5px dashed #F0D500;
}

@keyframes spin { 
  100% { 
    transform: rotateZ(360deg);
  }
}

.page-wrapper {
  width: max-content;
  height: max-content;
  background-color: #0000;
  display: flex;
  align-items: center;
  justify-content: center;
}
 .btn {
    width: 150px;
    height: 50px;
    border: 1px solid #333;
    font-family: 'Cinzel', serif;
    font-size: 20px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 0;
    transition: 1s;
    }

    .btn::before, .btn::after {
    position: absolute;
    background: #eee;
    z-index: -1;
    transition: 1s;
    content: '';
    }

    .btn::before {
    height: 50px;
    width: 130px;
    }

    .btn::after {
    width: 150px;
    height: 30px;
    }

    .noselect {
    -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
    }

    .btn:hover::before {
    width: 0px;
    background: #fff;
    }

    .btn:hover::after {
    height: 0px;
    background: #fff;
    }

    .btn:hover {
    background: #fff;
    }
    .groupe-section{
        width:100%;
        min-height:200vh;
        background-image: url("https://static.wixstatic.com/media/035244_1f9f5504879f46cc90c68e323a18ea59~mv2_d_1920_3986_s_2.jpg/v1/fill/w_980,h_2909,al_c,q_90,usm_0.66_1.00_0.01/035244_1f9f5504879f46cc90c68e323a18ea59~mv2_d_1920_3986_s_2.webp");
        background-position: top;
        background-repeat: no-repeat;
        background-size: 100%;
    }
    @media only screen and (max-width: 425px) {
       .groupe-section{
         background-size: cover;
       }
}

</style>
