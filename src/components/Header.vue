<template lang="">
        <div id="header">
            <div class="logo">
                <img class="logo" alt="Vue logo" src="../assets/logo.png">
            </div>
            <div class='nav'>
                <ul>
                    <li>
                        <router-link to="/CV" v-scroll-to="'#firstSection'">
                        <p>Home</p> 
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/CV" v-scroll-to="'#skillsSection'">   
                        <p>Skills</p> 
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/CV/portfolio" >
                        <p>Portfolio</p> 
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/CV" v-scroll-to="'#WorkExperience'">
                        <p>Experience</p> 
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/CV" v-scroll-to="'#ContactMeContent'">
                        <p>Contact Me</p> 
                        </router-link>
                    </li>
                </ul>

            </div>
        </div>
        
</template>
<script>

import VueDraggableResizable from 'vue-draggable-resizable'

export default {
    data() {
        return {
           
            showBanner: true,
            showContent:false,
            
        
        }
    },
    components: {
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
    @media only screen and (max-width: 425px) {
       #header{
           display:none
       }

    }
  
</style>