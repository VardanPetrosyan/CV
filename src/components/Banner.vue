<template >
    <div id="banner">
        <div class="content">
            <div class="header-content">
                    <div class="page-wrapper">  
                        <div class="circle-wrapper">
                            <div class="error circle"></div>
                            <div class="icon">
                            <i class="fa fa-times"></i>
                                <font-awesome-icon icon="user-secret" />
                            </div>
                        </div>
                    </div>
            </div>
            <div class="main-content">
                <h1>Hello My Friend!</h1>
                <p>
                    Enthusiastic full stack web developer welcomes you.  <br/>
                    Here you will find my biography ... <br/>
                    
                </p>
            </div>
            <div class="footer-content">
                <button class="btn" id="Success-banner" v-on:click="$emit('cloas-banner', false)"><span class="noselect">Hello!</span></button>
            </div>
            <p style="color: #ffffff80;">The site is written in Vue JS.</p>
        </div>
    </div>
</template>
<script>
export default {
    props:['showBanner'],
}
</script>
<style scoped>
    #banner {
        width:100vw;
        height: 100vh;
        position:fixed;
        top:0;
        left:0;
        z-index: 9999;
        background-color: #00000061;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #banner .content{
    border: 1px solid;
    padding: 15px;
    max-width: 500px;
    background-color: rgb(51, 59, 80);
    color: white;
    border-radius: 5px;
    }
    #banner .content .header-content {
        display: flex;
        justify-content: center;
    }
   
    .footer-content {
        display: flex;
        justify-content: center;
    }
</style>