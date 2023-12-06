<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale' }">
            <slot>default content</slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["theme"],
    methods: {
        closeModal() {
            this.$emit("close");
        }
    }
};
</script>

<style>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}

.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
}

.backdrop:target .modal {
    display: block;
}

.modal h1 {
    color: red;
}

.modal p {
    font-style: normal;
}

.modal.sale {
    background: crimson;
    color: white;
}

.modal.sale h1 {
    color: white;
    border-bottom: none;
}

.modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
    display: flex;
    justify-content: center;
}

.modal .actions a {
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
}

.modal.sell .actions {
    color: white;
}

.modal.sell .actions a {
    color: white;
}
</style>
