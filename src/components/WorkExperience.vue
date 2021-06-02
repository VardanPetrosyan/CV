<template >
    <div id="WorkExperience">
        <div class="content">
            <div class="title-box" data-aos="fade-up">
                <h3 class="numOfTitle">03</h3><h3 class="title">WORK EXPERIENCE</h3>
            </div>

            <div class="main-box" >
                <div class="experienceItem">
                    <div class="leftBox">
                    </div>
                    <div class="verticaleLineBox">
                        <div class="verticaleLine" ></div>
                    </div>
                    <div class="rightBox" >
                        <p class="yearOfExperience" data-aos="fade-left" data-aos-duration="400">2014—2016</p>
                        <h3 class="placeOfWork" data-aos="fade-left" data-aos-duration="500">HOP!</h3>
                        <p class="job" data-aos="fade-left" data-aos-duration="600">Креативный директор</p>
                        <span class="aboutWork" data-aos="fade-left" data-aos-duration="700">
                            Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт.
                        </span>
                    </div>
                </div>
                <div class="experienceItem">
                    <div class="leftBox">
                         <p class="yearOfExperience" data-aos="fade-right" data-aos-duration="400">2014—2016</p>
                        <h3 class="placeOfWork" data-aos="fade-right" data-aos-duration="500">HOP!</h3>
                        <p class="job" data-aos="fade-right" data-aos-duration="600">Креативный директор</p>
                        <span class="aboutWork" data-aos="fade-right" data-aos-duration="700">
                            Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт.
                        </span>
                    </div>
                    <div class="verticaleLineBox">
                        <div class="verticaleLine"></div>

                    </div>
                    <div class="rightBox">
                    </div>
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
     #WorkExperience {
        position:relative;
        width:100%;
        min-height: 100vh;
        /* background-attachment: fixed; */
       
        /* background: #73767d; */
    }
    #WorkExperience .content {
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
        padding-bottom: 50vh;

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
    .experienceItem {
        display: grid;
        grid-template-columns: 2fr 1fr 2fr;
    }
    .leftBox {
     text-align: right;
     letter-spacing: .05rem;
     font-family: Arial,Helvetica,sans-serif;
    }
    .verticaleLineBox {
        display: flex;
        justify-content: center;
    }
    .verticaleLine {
        position: relative;
        width: 2px;
        height: 100%;
        /* background-color: black; */
        background: #00be7e;
    }
    .verticaleLine:after {
        content: "";
        width: 10px;
        height: 10px;
        left: -4px;
        border-radius: 50%;
        /* background-color: black; */
        position: absolute;
        background: #00be7e;

    }
    .rightBox {
        text-align: left;
        letter-spacing: .05rem;
        font-family: Arial,Helvetica,sans-serif;
    }
    .yearOfExperience{
        margin-top:0;
        color: #00be7e;
        font-size: 16px;
        font-weight: 800;
        letter-spacing: .05rem;
        font-family: Arial,Helvetica,sans-serif;
    }
    .placeOfWork{
        color: white;
        font-size: 24px;
        font-weight: 500;
    }
    .job {
        color: white;
        font-size: 16px;
        font-weight: 500;
    }
    .aboutWork {
        color: rgb(190, 199, 213);
        font-size: 16px;
        font-weight: 500;
    }
    

</style>