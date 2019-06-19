<template>
    <div class="media mb-2">
        <template v-if="writtenByMe">
            <div class="media-body"> 
                <div class="card">
                    <div class="card-body">
                        <slot></slot>
                    </div>
                </div>
            </div>
            <div class="d-flex ml-3 align-self-center">
                <img :src="image" width="48" height="48" class="rounded-circle">
            </div>
        </template>
        <template v-else>
            <div class="d-flex mr-3 align-self-center">
                <img :src="image" width="48" height="48" class="rounded-circle">
            </div>
            <div class="media-body"> 
                <div class="card">
                    <div class="card-body">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            image: String,
            writtenByMe: Boolean
        },
        data() {
            return {
                
            };
        },
        mounted() {
            // console.log('Valor de writtenByMe: ', this.writtenByMe)
        }
    }
</script>
