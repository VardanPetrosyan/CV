<template >
    <div id="ContactMe" >
        <div id="ContactMeContent" class="content" data-aos="fade-up">
            <div class="contacts">
                <div class="rightBar">
                    <h3>
                        СВЯЖИТЕСЬ СО МНОЙ
                    </h3>
                    <p>
                        Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт.
                    </p>
                    <ul>
                        <li>info@mysite.ru</li>
                        <li>+7 (495) 000-00-00</li>
                    </ul>
                    
                </div>
                <div class="leftBar">
                    <div class="firstSection">
                        <input type="text" value="" placeholder="Name" name=""/>
                        <input type="text" value="" placeholder="E-mail" name=""/>
                    </div>
                    <div class="secondSection">
                        <input type="number" value="" placeholder="Tel" name=""/>

                    </div>
                    <div class="thirdSection">
                        <textarea type="text" value="" placeholder="Massage ..." name=""/>
                    </div>
                    <div class="lastSection">
                        <button class="btn">Send</button>
                    </div>
                </div>
            </div>
            <div class="social">
                <ul>
                <li>
                    <a href="#">
                         <p>
                            In
                        </p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>
                            FB
                        </p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>
                            G
                        </p>
                    </a>
                </li>
            </ul>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #ContactMe {
           position: relative;
        width: 100%;
        min-height: 50vh;
        display: flex;
        justify-content: center;
        padding: 100px 0px;
        background-image: url("https://static.wixstatic.com/media/035244_9fd1a405d2864f3b8415885edfcd79dd~mv2.jpg/v1/fill/w_980,h_580,al_c,q_85,usm_0.66_1.00_0.01/035244_9fd1a405d2864f3b8415885edfcd79dd~mv2.webp");
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: right;
    }
    #ContactMe .content {
        position: absolute;
        top: -40%;
        left: 15%;
        width: 70%;
        min-height: 70vh;
        display: grid;
        grid-template-rows: 6fr 1fr;
        grid-template-columns: 100%;
        flex-direction: column;
        background-color: #363944;
        contain: content;

    }
    .contacts{
        max-width: 100%;
        display: grid;
        grid-template-columns: 50% 50%;
    }
    .rightBar{
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px 40px;
    }
    .rightBar ul,.rightBar li{
        list-style: none;
        padding: 0;
    }
    .leftBar{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0px 40px;
        grid-gap: 10px;
    }
    .leftBar .firstSection{
        grid-gap: 10%;
        display: grid;
        grid-template-columns: 45% 45%;
        justify-content: flex-start;
        width: 100%;
        grid-template-rows: minmax(30px,40px);
    }
    .secondSection{
        width: 100%;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: minmax(30px,40px);
    }
    .thirdSection{
        width: 100%;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: minmax(100px,150px);
    }
    .leftBar input, .leftBar textarea {
            padding: 10px 10px;
            resize: none;
            height: unset;
            width: unset;
    }
    .social{
        border-top: 1px solid #00000040;
    }
    .social ul,.social li{
        list-style:none;
        padding:3px;
        display: flex;
    }
    .social li{
        border:1px solid #ffffff65;
        transition:.3s;
        width: 20px;
        height: 20px;
        border-radius: 5px;
        margin: 0 auto;
        margin-bottom:3px; 
        background-color:#0000;
        cursor: pointer;
        transition:.3s;
        justify-content: center;
        align-items: center;
    }
    .social li:hover{
        background-color:#c0c0c06e;
        border-color:black;
    }
    .social li:hover a{
        color: black;
    }   
    .social a{
         text-decoration: none;
        color: #ffffff65;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-family: ui-sans-serif;
        transition:.3s;
    }
    .social p{
       margin:0;
    }
    @media only screen and (max-width: 768px) {
    #ContactMe .content{
        position: unset;
        width: 90%;
        grid-template-rows: 8fr 1fr;
    }
    .contacts{
        grid-template-columns: 100%;
        grid-template-rows: 50% 50%;
    }
    .rightBar h3{
        font-size: 16px;
    }
    .rightBar p,.rightBar ul{
        font-size: 14px;
    }
    .leftBar .firstSection,.secondSection{
            grid-template-rows: minmax(20px,30px);
    }
    .thirdSection{
        grid-template-rows: minmax(50px,100px);
    }
}

</style>