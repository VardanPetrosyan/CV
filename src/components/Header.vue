<template lang="">
    <div class="head"> 
        <div id="header">
            <div class="logo">
                <img class="logo" alt="Vue logo" src="../assets/logo.png">
            </div>
            <div class='nav'>
                <ul>
                    <li>
                        <router-link to="/CV">
                        <p>Home</p> 
                        </router-link>
                    </li>
                    <li>
                        <a href="#" v-scroll-to="'#skillsSection'">   
                        <p>Skills</p> 
                        </a>
                    </li>
                    <li>
                        <router-link to="/CV/portfolio">
                        <p>Portfolio</p> 
                        </router-link>
                    </li>
                    <li>
                        <a href="#WorkExperience">
                        <p>Experience</p> 
                        </a>
                    </li>
                    <li>
                        <a href="#ContactMeContent">
                        <p>Contact Me</p> 
                        </a>
                    </li>
                </ul>

            </div>
        </div>
        <div class="quick-menu">
            <quick-menu :menu-count=getCount :icon-class=icons :menu-url-list=list :background-color=backgroundColor :color=color :position=position :is-open-new-tab=getIsOpenNewTab @process=print></quick-menu>
        </div>
    </div>
</template>
<script>

import quickMenu from 'vue-quick-menu'

export default {
    data() {
        return {
            showBanner: true,
            showContent:false,
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
        quickMenu
    },
   
}
</script>
<style scoped>
    
   #header {
        position:absolute;
        top:0;
        left:0;
        z-index: 2;
        width: 100%;
        height: 65px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-shadow: -1px 1px 8px 0px #00000038;
        animation: show .8s infinite forwards ;
        animation-iteration-count: 1;

    }
    @keyframes show {
        from {height: 0px;}
        to {height: 65px;}
    }
    
    .logo {
        height:40px;
        width:40px;
        
    }
    .logo, .nav{
        animation: showlogo 2s infinite forwards ;
        animation-iteration-count: 1;
    }
    @keyframes showlogo {
        from {opacity: 0;}
        to {opacity: 1;}
    }
   
   .nav ul, .nav li{
       display:flex;
       list-style:none;
   }
   .nav li{
       margin-left:5px;
   }
   .nav li a{
    text-decoration: none;
    font-size: 14px;
    color: rgb(169 179 193);
    letter-spacing: .05rem;
    transition:.3s;

   }
   .nav li a:hover{
       color:rgb(190, 199, 213);
   }
   .quick-menu{
           display:none;
    }
    .head{
        position: relative;
        z-index: 3;
    }
   @media only screen and (max-width: 425px) {
       #header{
           display:none
       }
       .quick-menu{
           display:block;
       }

    }
</style>