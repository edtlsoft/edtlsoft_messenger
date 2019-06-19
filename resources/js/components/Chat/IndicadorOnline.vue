<template>
    <div alt="Status" :title="online ? 'Conectado' : 'Desconectado'" 
         :class="online ? 'conectado' : 'desconectado'" >
    </div>
</template>

<script>
	export default {
        props: {
            online: Boolean
        }
    }
</script>

<style>

.conectado {
    width: 10px;
    height: 10px;
    background-color: green;
    border-radius: 50%;
}

.desconectado {
    width: 10px;
    height: 10px;
    background-color: gray;
    border-radius: 50%;
}

</style>
