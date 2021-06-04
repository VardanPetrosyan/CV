<template >
    <div id="share" >
        <div class="content">
            <h3 class="title">Share</h3>
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
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #share[data-v-df0b9742] {
        position: relative;
        left: -60px;
        top: 100px;
        z-index: 9999;
        border: 2px solid;
        border-left: none;
        min-height: 70vh;
        border-radius: 0;
        transition: .8s;
        padding-right: 2px;
        border-top-right-radius: 20%;
        border-bottom-right-radius: 20%;
        border-right: 7px solid;
        contain: content;
    }
    #share:hover{
        left: 0px;
    }

    #share .content{
        padding:2px;
    }
    .title{
        text-decoration:underline;
        margin: 3px;
    }
    #share ul,#share li{
        list-style:none;
        padding:3px;
    }
    #share li{
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
    }
    #share li:hover{
        background-color:#c0c0c06e;
        border-color:black;
    }
    #share li:hover a{
        color: black;
    }   
    #share a{
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
    #share p{
       margin:0;
    }
</style>