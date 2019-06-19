<template>
    <div class="row h-100">
        <div class="col-xs-8">
            <div class="card h-100">
                <div class="card-body card-body-scroll">
                    <mensaje 
                        v-for="message in messages" :key="message.id"
                        :written-by-me="message.written_by_me"
                        :image="message.written_by_me ? myImage : selectedConversation.contact_image">

                        {{ message.content }}
                    </mensaje>
                </div>

                <div class="card-footer bg-light border-dark">
                    <div>
                        <form class="mb-0" @submit.prevent="postMessage" autocomplete="off">
                            <div role="group" class="input-group">
                                <input type="text" class="text-center form-control" id="inp-menssage" placeholder="Escribe un mensaje ..."  
                                    v-model="newMessage"> 
                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-primary">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xs-4 pt-2">
            <img :src="selectedConversation.contact_image" width="60" height="60" class="m-1 rounded-circle"> 
            <p>{{ selectedConversation.contact_name }}</p> 
            <hr> 
            <div class="custom-control custom-checkbox custom-control-inline">
                <input id="disabled-notifications" type="checkbox" autocomplete="off" true-value="true" class="custom-control-input" value="true">
                <label for="disabled-notifications" class="custom-control-label"> Desactivar notificaciones</label>
            </div>
        </div>

    </div>
</template>

<style> 
    .card-body-scroll {
        max-height: calc(100vh - 63px);
        overflow-y: auto;
    }
</style>

<script>

import Mensaje from './Mensaje.vue';

export default {
    components: {
        Mensaje,
    },
    data() {
        return {
            newMessage: ''
        };
    },
    methods: {
        postMessage() {
            this.$store.dispatch('postMessage', this.newMessage);
            this.newMessage = '';
        },
        scrollToBottom() {
            const el = document.querySelector('.card-body-scroll');
            el.scrollTop = el.scrollHeight;
        }
    },
    computed: {
        myImage() {
            return `/users/${this.$store.state.user.image}`
        },
        selectedConversation() {
            return this.$store.state.selectedConversation;
        },
        messages() {
            return this.$store.state.messages;
        }
    },
    updated() {
        this.scrollToBottom();
    }
}
</script>
