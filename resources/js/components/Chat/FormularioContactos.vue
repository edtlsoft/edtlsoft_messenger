<template>
    <form class="my-3 mx-2">
        <input type="text" 
            class="text-center form-control" 
            v-model="querySearch" 
            placeholder="Buscar contacto ...">
    </form>
</template>

<script>
    export default {
        computed: {
            querySearch: {
                get () {
                    return this.$store.state.querySearch;
                },
                set (value) {
                    this.$store.commit('newQuerySearch', value);
                }
            }
        }
    }
</script>