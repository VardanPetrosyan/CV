<template >
    <div id="Copyright">
        <div class="logoBox">
            <img class="logo" alt="Vue logo" src="../assets/logo.png">
        </div>
        <div>
            <p>© 2023 Руслан Каро. Сайт создан на Wix.com</p>
        </div>
        <div></div>

    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #Copyright{
        width:100%;
        height:10vh;
        background-color: #363944;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        color: white;
    }
    div#Copyright>div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .logo {
        height:40px;
        width:40px;
        
    }
</style>