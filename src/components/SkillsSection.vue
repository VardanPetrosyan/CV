<template >
    <div id="skillsSection">
        <div class="content">
            <div class="title-box" data-aos="fade-up">
                <h3 class="numOfTitle">01</h3><h3 class="title">SKILLS</h3>
            </div>
            <div class="main-box" data-aos="fade-up">
                <div class="back-end" data-aos="fade-right">
                    <p data-aos="fade-down">Back-end developent</p>
                    <div class="skill-items">
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
                        </div>
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
                        <div class="skill-value">{{ val3 }}%</div>
                        </div>
                    </div>
                    
                </div>
                <div data-aos="fade-right">
                    <p data-aos="fade-down">Fron-end developent</p>
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
                    </div>
                </div>
                <div data-aos="fade-right">
                    <p data-aos="fade-down">Fron-end developent</p>
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
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>
<script>
import CircularSlider from '../components/CircularSlider.vue'


export default {
    data() {
        return {
            timer:null,
            val1:0,
            val2:0,
            val3:0,
        }
    },
    components: {
        CircularSlider
    },
    mounted(){
        this.printer()
    },
    methods: {
        printer(){
            let i = 1;
            let stop1 = false,
                stop2 = false,
                stop3 = false;
                
           this.timer = setInterval(()=>{
                i++
                
                if(this.val1 == 40){
                    stop1 = true
                }else{
                    this.val1 = i
                }

                if(this.val2 == 74){
                    stop2 = true
                }else{
                    this.val2 = i
                }
                
                if(this.val3 == 64){
                    stop3 = true
                }else{
                    this.val3 = i
                }

                if(stop1 == true && stop2==true && stop3==true)
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
        height: 100%;
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
    }
    .skill-value{
        color: white;
        font-weight: 900;
    }
</style>