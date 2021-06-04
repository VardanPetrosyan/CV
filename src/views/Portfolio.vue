<template lang="">
    <div id="portfolio">
        <div class="content">
            <div class="portfolio-box">
                <div class="portfolio-header">
                    <div class="language-img-box">
                        <img class="language-img" width="30px" height="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" alt="first"/>
                    </div>
                     <div class="title-box">
                         <p class="title">Laravel</p>
                    </div>
                    <div class="setting-box">
                        . <br/>
                        . <br/>
                        . <br/>
                    </div>
                </div>
                <router-link to="#" class="portfolio-item-img-box">
                    <img class="portfolio-item-img" src="https://i.pinimg.com/474x/d7/34/b1/d734b14588dea7d47f7663aac153d154.jpg" alt="first"/>
                </router-link>
                <div class="portfolio-footer">
                    <!-- <div class="thumbs-up">
                        <i class="fa fa-thumbs-up"></i>
                    </div> -->
                    <p> lorem loreml ore mlorem loremlorem loremlorem </p>
                </div>
            </div>
             <div class="portfolio-box">
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
                <router-link to="#" class="portfolio-item-img-box">
                    <img class="portfolio-item-img" src="https://i.pinimg.com/474x/d7/34/b1/d734b14588dea7d47f7663aac153d154.jpg" alt="first"/>
                </router-link>
                <div class="portfolio-footer">
                    <!-- <div class="thumbs-up">
                        <i class="fa fa-thumbs-up"></i>
                    </div> -->
                    <p> lorem loreml ore mlorem loremlorem loremlorem </p>
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
    #portfolio{
        width:100%;
        min-height:100vh;
        background-color: #3e424e;
    }
     #portfolio .content{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .portfolio-box{
        height: 100vh;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 1fr 5fr 1fr;
        margin-bottom: 20px;
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
        padding: 20px;
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
        height: 100%;
        width: 100%;
    }
    .portfolio-item-img{
        width: 100%;
        height: 100%;
        border: 1px solid white;
    }
    .portfolio-footer{
        padding: 5px;
        font-size: 14px;
        font-weight: 400;
        font-family: sans-serif;
    }
</style>