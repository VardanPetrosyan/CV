<template >
    <div id="skillsSection">
        <div class="content">
            <div class="title-box" data-aos="fade-up">
                <h3 class="numOfTitle">01</h3><h3 class="title">SKILLS</h3>
            </div>
            <div class="main-box" data-aos="fade-up">
                <div class="back-end" data-aos="fade-right">
                    <p data-aos="fade-down">Back-end developent</p>
                    <div class="skill-items" data-aos="fade-right">
                        <div class="skill-item">
                            <circle-slider
                                v-model="val1"
                                :min="0"
                                :max="100"
                                :step-size="1"
                                :circle-width="12"
                                :progress-width="3"
                                :knob-radius="4"
                            >
                            </circle-slider>
                            <div class="skill-value">{{ val1 }}%</div>
                            <p>PHP</p>

                        </div>
                        <div class="skill-item">
                            <circle-slider
                                v-model="val3"
                                :min="0"
                                :max="100"
                                :step-size="1"
                                :circle-width="12"
                                :progress-width="3"
                                :knob-radius="4"
                            >
                            </circle-slider>
                            <div class="skill-value">{{ val3 }}%</div>
                            <p>LARAVEL</p>
                        </div>
                    </div>
                    
                </div>
                <div class="fron-end" data-aos="fade-right">
                    <p data-aos="fade-down">Fron-end developent</p>
                    <div class="skill-items" data-aos="fade-right">
                        <div class="skill-item">
                            <circle-slider
                                v-model="val2"
                                :min="0"
                                :max="100"
                                :step-size="1"
                                :circle-width="12"
                                :progress-width="3"
                                :knob-radius="4"
                            >
                            </circle-slider>
                            <div class="skill-value">{{ val2 }}%</div>
                            <p>HTML</p>

                        </div>
                        <div class="skill-item">
                            <circle-slider
                                v-model="val4"
                                :min="0"
                                :max="100"
                                :step-size="1"
                                :circle-width="12"
                                :progress-width="3"
                                :knob-radius="4"
                            >
                            </circle-slider>
                            <div class="skill-value">{{ val4 }}%</div>
                            <p>CSS</p>

                        </div>
                        <div class="skill-item">
                            <circle-slider
                                v-model="val5"
                                :min="0"
                                :max="100"
                                :step-size="1"
                                :circle-width="12"
                                :progress-width="3"
                                :knob-radius="4"
                            >
                            </circle-slider>
                            <div class="skill-value">{{ val5 }}%</div>
                            <p>SASS</p>

                        </div>
                        <div class="skill-item">
                            <circle-slider
                                v-model="val6"
                                :min="0"
                                :max="100"
                                :step-size="1"
                                :circle-width="12"
                                :progress-width="3"
                                :knob-radius="4"
                            >
                            </circle-slider>
                            <div class="skill-value">{{ val6 }}%</div>
                            <p>BOOTSTRAP</p>

                        </div>
                        <div class="skill-item">
                            <circle-slider
                                v-model="val7"
                                :min="0"
                                :max="100"
                                :step-size="1"
                                :circle-width="12"
                                :progress-width="3"
                                :knob-radius="4"
                            >
                            </circle-slider>
                            <div class="skill-value">{{ val7 }}%</div>
                            <p>JavaScript</p>

                        </div>
                        <div class="skill-item">
                            <circle-slider
                                v-model="val8"
                                :min="0"
                                :max="100"
                                :step-size="1"
                                :circle-width="12"
                                :progress-width="3"
                                :knob-radius="4"
                            >
                            </circle-slider>
                            <div class="skill-value">{{ val8 }}%</div>
                            <p>Jquery</p>

                        </div>
                        <div class="skill-item">
                            <circle-slider
                                v-model="val9"
                                :min="0"
                                :max="100"
                                :step-size="1"
                                :circle-width="12"
                                :progress-width="3"
                                :knob-radius="4"
                            >
                            </circle-slider>
                            <div class="skill-value">{{ val9 }}%</div>
                            <p>Vue JS</p>

                        </div>
                    </div>
                </div>
                <div class="cms" data-aos="fade-right">
                    <p data-aos="fade-down">CMS</p>
                    <div class="skill-items" data-aos="fade-right">
                        <div class="skill-item">
                            <circle-slider
                                v-model="val10"
                                :min="0"
                                :max="100"
                                :step-size="1"
                                :circle-width="12"
                                :progress-width="3"
                                :knob-radius="4"
                            >
                            </circle-slider>
                            <div class="skill-value">{{ val10 }}%</div>
                            <p>PrestaShop</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>  
    </div>
</template>
<script>


export default {
    data() {
        return {
            timer:null,
            val1:0,
            val2:0,
            val3:0,
            val4:0,
            val5:0,
            val6:0,
            val7:0,
            val8:0,
            val9:0,
            val10:0,

        }
    },
    components: {
    },
    mounted(){
        this.printer()
    },
    methods: {
        printer(){
            let i = 1;
            let stop1 = false,
                stop2 = false,
                stop3 = false,
                stop4 = false,
                stop5 = false,
                stop6 = false,
                stop7 = false,
                stop8 = false,
                stop9 = false,
                stop10 = false;

                
           this.timer = setInterval(()=>{
                i++
                
                if(this.val1 == 60){
                    stop1 = true
                }else{
                    this.val1 = i
                }

                if(this.val2 == 90){
                    stop2 = true
                }else{
                    this.val2 = i
                }
                
                if(this.val3 == 50){
                    stop3 = true
                }else{
                    this.val3 = i
                }

                if(this.val4 == 90){
                    stop4 = true
                }else{
                    this.val4 = i
                }

                if(this.val5 == 50){
                    stop5 = true
                }else{
                    this.val5 = i
                }

                if(this.val6 == 80){
                    stop6 = true
                }else{
                    this.val6 = i
                }

                 if(this.val7 == 60){
                    stop7 = true
                }else{
                    this.val7 = i
                }

                if(this.val8 == 70){
                    stop8 = true
                }else{
                    this.val8 = i
                }

                 if(this.val9 == 30){
                    stop9 = true
                }else{
                    this.val9 = i
                }

                if(this.val10 == 50){
                    stop10 = true
                }else{
                    this.val10 = i
                }


                if(stop1 == true && stop2==true && stop3==true && stop4==true && stop5==true && stop6==true && stop7==true && stop8==true && stop9==true && stop10==true)
                {
                    this.stoper()
                }
            },35)
        },
        stoper(){
          clearInterval(this.timer)
        }
    }
   
}
</script>
<style scoped>
    #skillsSection {
        position:relative;
        width:100%;
        min-height: 100vh;
        background-image: url("https://static.wixstatic.com/media/035244_9f46dd7c6e524eef94172c670fff1913~mv2_d_1920_1343_s_2.jpg/v1/fill/w_980,h_1250,al_c,q_85,usm_0.66_1.00_0.01/035244_9f46dd7c6e524eef94172c670fff1913~mv2_d_1920_1343_s_2.webp");
        background-attachment: fixed;
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
    }
    #skillsSection .content {
        position: relative;
        top: 0;
        left: 0;
        width:100%;
        min-height: 100vh;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        background-color: #36394469;
        padding: 20px 0px;
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
    .title-box,.main-box{
    width: 90%;
    margin: 0 auto;
    }
    .main-box{
        text-align: left;
    }
    .main-box p{
    color: white;
    border-bottom: 1px solid;
    inline-size: 100%;
    font-size: 20px;
    font-weight: 600;
    }
    .skill-items{
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(100px,150px));
    }
    .skill-item{
        width: max-content;
        text-align: center;
        position: relative;
    }
    .skill-value{
        color: white;
        font-weight: 900;
        position: absolute;
        top: 23%;
        left: 30%;
    }
     @media only screen and (max-width: 425px) {
       .title-box h3{
            font-size: 30px;
       }
       .main-box p{
           font-size: 16px;
       }
       svg {
            width: 90px!important;
            height: 90px!important;
       }

    }
</style>