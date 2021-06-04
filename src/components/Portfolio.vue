<template >
    <div id="Portfolio">
        <div class="content">
            <div class="title-box" data-aos="fade-up">
                <h3 class="numOfTitle">02</h3><h3 class="title">PORTFOLIO</h3>
            </div>
            <div class="show-more" data-aos="fade-up">
                <span>FRESH WORKS.</span><router-link class="link-portfolio" to="/CV/portfolio">SHOW MORE ...</router-link>
            </div>

            <div class="main-box" >
                <div data-aos="fade-right" class="projectItem">
                    <a href="#" alt="projectN1" class="myProjectsHref" >
                        <img  class="myProjectsImg" width="80%"  src="https://static.wixstatic.com/media/035244_a1d752acfa6e43a9957b6d578458ebdc~mv2.jpg/v1/fill/w_327,h_320,al_c,q_80,usm_0.66_1.00_0.01/035244_a1d752acfa6e43a9957b6d578458ebdc~mv2.webp" alt="project"/>
                    </a>
                </div>
                <div data-aos="fade-up" class="projectItem">
                    <a href="#" alt="projectN1" class="myProjectsHref" >
                        <img class="myProjectsImg" width="80%"  src="https://static.wixstatic.com/media/035244_a1d752acfa6e43a9957b6d578458ebdc~mv2.jpg/v1/fill/w_327,h_320,al_c,q_80,usm_0.66_1.00_0.01/035244_a1d752acfa6e43a9957b6d578458ebdc~mv2.webp" alt="project"/>
                    </a>
                </div>
                <div data-aos="fade-left" class="projectItem">
                    <a href="#" alt="projectN1" class="myProjectsHref" >
                        <img class="myProjectsImg" width="80%"  src="https://static.wixstatic.com/media/035244_a1d752acfa6e43a9957b6d578458ebdc~mv2.jpg/v1/fill/w_327,h_320,al_c,q_80,usm_0.66_1.00_0.01/035244_a1d752acfa6e43a9957b6d578458ebdc~mv2.webp" alt="project"/>
                    </a>
                </div>

            </div>  
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #Portfolio {
        position:relative;
        width:100%;
        min-height: 100vh;
        /* background-attachment: fixed; */
       
        /* background: #73767d; */
    }
    #Portfolio .content {
        position: relative;
        top: 0;
        left: 0;
        width:100%;
        min-height: 100vh;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        background-color: #363944bf;
        padding: 20px 0px;
        contain:content;

    }
    .title-box{
    display: flex;
    justify-content: center;
    }
    .title-box h3 {
    letter-spacing: 0.1em;
    padding: 5px;
    font-size: 50px;
    font-weight: 600;
    font-family: 'arial black',arial-w01-black,arial-w02-black,'arial-w10 black',sans-serif;
    }
    .numOfTitle{
        color:#bec7d5;
    }
    .title{

    }
    .title-box,.main-box,.show-more{
    width: 90%;
    margin: 0 auto;
    }
    .show-more{
        display: flex;
        justify-content: center;
        
        
    }
    .show-more span,.show-more a{
        font-family:"open sans", sans-serif;
        font-weight:400;
        letter-spacing: 2.4px;
        line-height :43.2px;
        text-align:center;
      font-size:24px;
    }
    .show-more span{
        color:white;
    }
    .show-more .link-portfolio{
         color:rgb(190, 199, 213);
         transition:.3s;
    }
    .show-more .link-portfolio:hover{
        color:black
    }
    .main-box{
        display:flex;
        contain: content;
        padding-top: 100px;
        justify-content: center;
    }
    .projectItems{
        margin:5px;
    }
    .myProjectsImg{
        opacity:.8;
        transition:.3s;
    }
    .myProjectsImg:hover{
        opacity:1;
        width:100%;
    }
    @media only screen and (max-width: 425px) {
        #Portfolio {
            min-height: max-content;
        }
        #Portfolio .content{
            min-height: max-content;
            padding: 40px 0px;
        }
       .title-box h3{
           font-size: 39px;
       }
       .show-more span, .show-more a{
           font-size: 16px;
       }
       .projectItem img{
           width: 90%!important;
       }
    }
</style>