<template>
    <div class="backdrop">
        <div class="modal">
            <p>Modal content</p>
        </div>
    </div>
</template>

<style>
    .modal{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 100;
    }
    /* .backdrop:target{
        display: block;
    } */
    .backdrop:target .modal{
        display: block;
    }

</style>