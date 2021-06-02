<template lang="">
    <div id="firstSection">
        <div class="content">
            <div class="about-us-info">
                <h1><span class="change-color">V</span>ardan <br/> Petrosyan <span class="change-color">.</span></h1>
                <h2 v-html="paper"></h2><span class="slash">|</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        titleText:"Full-stack web developer...",
        paper:'',
        timer:null
    }
    
    },
    mounted(){
        this.printer()
    },
    methods: {
        printer(){
          let i = -1
          this.timer = setInterval(()=>{
              i++
              const x = i%this.titleText.length 
              this.paper += this.titleText[x]
               if(i == this.titleText.length-1){
                this.stoper()
                }
            },250)
        },
           
        stoper(){
          clearInterval(this.timer)
        }
    }
}

</script>
<style scoped>
#firstSection{
    width:100%;
    height: 100vh;
    background-image: url(https://lechtech.net/wp-content/uploads/2016/02/webdevelopment-bg.jpg);
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    background-attachment: fixed;
    
}

#firstSection .content {
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6f7a8a00;
    
}
#firstSection .about-us-info{
    position:relative;
    text-align: left;
    font-size: 25px;
    color: white;
    animation: show 1s infinite forwards ;
    animation-iteration-count: 1;
}
@keyframes show {
    from {
        opacity: 0;
        top: -100px;
    }
    to {
        opacity: 1;
        top:0;
    }
}
#firstSection span.change-color {
    color: #34485d;
    
}
#firstSection .about-us-info h2{
    display: inline-block;
}
.slash{
    position: relative;
    top: -5px;
    left: 5px;
    font-size: 30px;
    animation: slash 1s infinite forwards ;
}
@keyframes slash {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>