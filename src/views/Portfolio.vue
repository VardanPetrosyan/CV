<template lang="">
    <div id="portfolio" >
        <div class="content" >
            <div class="portfolio-box" ref="mySpan" >
                <div class="portfolio-header">
                    <div class="language-img-box">
                <img class="language-img" width="30px" height="30px" v-bind:src="lngImg" alt="first"/>
                    </div>
                     <div class="title-box">
                         <p class="title">{{title}}</p>
                    </div>
                    <div class="setting-box">
                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                </div>
                <router-link to="#" class="portfolio-item-img-box" v-bind:style="{ 'background-image': 'url(' + img + ')' }">
                    <!-- <img class="portfolio-item-img" src="https://i.pinimg.com/474x/d7/34/b1/d734b14588dea7d47f7663aac153d154.jpg" alt="first"/> -->
                </router-link>
                <div class="portfolio-footer">
                    <div class="thumbs-up">
                        
                    </div>
                    <br/>
                    <p> {{description}} </p>
                </div>
            </div>
            <div class="buttons-groupe">
                <button id="prev" class="prev" @click='changeProjectPrev'>prev</button>
                <button @click='likeProject' > <i class="fa fa-heart" v-bind:style="{ 'color': like}"></i> </button>

                <button id="next" class="next" @click='changeProjectNext'>next</button>
            </div>
            

             <!-- <div class="portfolio-box " ref="mySpan2">
                <div class="portfolio-header">
                    <div class="language-img-box">
                        <img class="language-img" width="30px" height="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" alt="first"/>
                    </div>
                     <div class="title-box">
                         <p class="title">Laravel</p>
                    </div>
                    <div class="setting-box">
                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                </div>
                <router-link to="#" class="portfolio-item-img-box" style="background-image:url('https://i.pinimg.com/474x/d7/34/b1/d734b14588dea7d47f7663aac153d154.jpg')">
                    <!-- <img class="portfolio-item-img" src="https://i.pinimg.com/474x/d7/34/b1/d734b14588dea7d47f7663aac153d154.jpg" alt="first"/> -->
                <!-- </router-link>
                <div class="portfolio-footer">
                    <div class="thumbs-up">
                        <i class="fa fa-thumbs-up"></i>
                    </div>
                    <p> lorem loreml ore mlorem loremlorem loremlorem </p>
                </div>
            </div> -->
        </div>
       
    </div>
</template>
<script>
export default {
    data() {
    return {
      projectNum:0,
      count:2,
      info:[
        {
          'name':'Laravel',
          'lngImg':'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
          'img':'https://i.pinimg.com/474x/d7/34/b1/d734b14588dea7d47f7663aac153d154.jpg',
          'description':'Checkout Form. My first idea for the Vue. ...',
          'like':0,
        },
         {
          'name':'Vue Js',
          'lngImg':'https://vuejs.org/images/logo.png',
          'img':'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-argon-design-system/vue-argon-design-system.jpg',
          'description':'Recipes App. Idea number two is an app to keep your recipes in one place. ...',
          'like':1,

        },
      ],
      title:'laravel',
      lngImg:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',

      img:'https://i.pinimg.com/474x/d7/34/b1/d734b14588dea7d47f7663aac153d154.jpg',

      description:'Checkout Form. My first idea for the Vue. ...',
      like:'white'

    };
  },
  methods:{
      changeProjectPrev(){
          if(this.projectNum <= 0) {return false;}
          console.log(this.projectNum)
          this.projectNum = this.projectNum - 1

          this.title = this.info[this.projectNum].name
          this.lngImg = this.info[this.projectNum].lngImg
          this.img = this.info[this.projectNum].img
          this.description = this.info[this.projectNum].description
          if(!this.info[this.projectNum].like){
            this.like = 'white';
            return;
          }
          this.like = 'red'

      },
      changeProjectNext(){
          if(this.projectNum >= this.count-1) {return false;}
          console.log(this.projectNum)

            this.projectNum = this.projectNum + 1

            this.title = this.info[this.projectNum].name
            this.lngImg = this.info[this.projectNum].lngImg
            this.img = this.info[this.projectNum].img
            this.description = this.info[this.projectNum].description
            if(!this.info[this.projectNum].like){
                this.like = 'white';
                return;
            }
            this.like = 'red'
        },
      likeProject(){
            if(!this.info[this.projectNum].like){
                this.info[this.projectNum].like = 1
                this.like = 'red'
                return;
            }
                this.info[this.projectNum].like = 0
                this.like = 'white';
      }
  },
 
}
</script>
<style scoped>
    #portfolio{
        padding: 20px 0px;
        padding-top: 65px;
        width:100%;
        min-height:100vh;
        background-color: #3e424e;
    }
     #portfolio .content{
        margin: 0 auto;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        padding: 10px 0px;
    }
    .portfolio-box{
        /* width: 80vw; */
        width: 90%;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 10vh 70vh 20vh;
        /* margin-bottom: 20px; */
        box-shadow: inset 0px 0px 20px 0px black;
        height: 100vh;

    }
    .portfolio-header{
        width: 100%;
        display: grid;
        grid-template-columns: 2fr 5fr 1fr;
    }
    .language-img-box{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 20px;
    }
    .language-img{
        border-radius: 50%;
        width: 50px;
        height: 50px;
        object-fit: cover;
        border: 1px solid white;
    }
    .title-box{
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: .08rem;
        text-decoration: underline;
        text-decoration-color: rgb(38, 38, 38);
        text-overflow: ellipsis;
    }
    .setting-box{
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .portfolio-item-img-box{
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 5px;
        background-position: center;
        height: 100%;
        width: 95%;
        margin: 0 auto;
        box-shadow: inset 0px 0px 11px 0px black;
        display: flex;
        align-items: center;
    }
    .portfolio-item-img{
        width: 100%;
        height: 100%;
        border: 1px solid white;
    }
    .portfolio-footer{
       padding: 5px 15px;
        font-size: 14px;
        font-weight: 400;
        font-family: math;
        letter-spacing: .05rem;
        color: white;
    }
    .buttons-groupe{
        margin: 0 auto;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        box-shadow: inset 0px 0px 20px 0px black;
        padding:5px 0px;
    }
    .buttons-groupe button {
    width: 40px;
    border-radius: 50%;
    height: 40px;
    background-color: silver;
    box-shadow: inset 0px 0px 20px 0px black;
    }
    @media only screen and (max-width: 425px) {
        #portfolio .content{
            height: 98vh;
        }
      .portfolio-box{
            grid-template-rows: 10vh 60vh 12vh;
        }
    }
</style>