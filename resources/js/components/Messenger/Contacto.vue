<template>
    <div class="list-group-item" :class="variant">
        <div class="row p-2 justify-content-center">
            <div class="text-center col-md-3 col-12">
                <img :src="conversation.contact_image" width="60" height="60" class="m-1 rounded-circle">
            </div> 
            <div class="d-none d-md-block col-6 align-self-center">
                <p class="mb-1">
                    <status-component :online="conversation.online" /> 
                    {{ conversation.contact_name }}
                </p> 
                <p class="text-muted small mb-1">{{ conversation.last_message }}</p>
            </div> 
            <div class="d-none d-md-block col-3">
                <p class="text-muted small"> -> {{ lastTime }}</p>
            </div>
        </div>
    </div>
</template>

<script>

import statusComponent from './StatusComponent.vue';

export default {
    components: {
        statusComponent,
    },
    props: {
        conversation: Object,
        selected: Boolean
    },
    computed: {
        lastTime() {
            return moment(this.conversation.last_time, "YYYY-MM-DD hh:mm:ss")
                    .locale('es').fromNow();
        },
        variant() {
            return this.selected ? 'list-group-item-info' : '';
        }
    }
}
</script>
