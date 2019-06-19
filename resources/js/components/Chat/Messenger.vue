<template>
	<div class="container-fluid" style="height: calc(100vh - 56px);">
	    <div class="row h-100 no-gutters">
	        <div class="col-xs-4">
                
                <formulario-contactos />
                <listado-contactos />
                
	        </div>
	        <div class="col-xs-8">
	            
                <conversacion-activa
	            	v-if="selectedConversation" /> 
                
	        </div>
	    </div>
	</div>
</template>

<script>

import FormularioContactos from './FormularioContactos.vue';
import ListadoContactos from './ListadoContactos.vue';

import ConversacionActiva from './ConversacionActiva.vue';

export default {
    components: {
        FormularioContactos,
        ListadoContactos,
        ConversacionActiva,
    },
    props: {
        user: Object
    },
    mounted() {
        this.$store.commit('setUser', this.user);
        
        this.$store
            .dispatch('getConversations')
            .then(() => {
                const conversationId = this.$route.params.conversationId;
                if (conversationId) {
                    const conversation = this.$store.getters.getConversationById(conversationId);
                    // console.log(conversation);
                    this.$store.dispatch('getMessages', conversation);
                }
            });

        Echo.private(`users.${this.user.id}`)
            .listen('MessageSent', data => {
                console.log(data);
                const message = data.message;
                message.written_by_me = false;    
                this.$store.commit('addMessage', message);    
                //this.addMessage(message);
            });

        Echo.join('messenger')
            .here(
                users => users.forEach(
                    user => this.changeStatus(user, true)
                )
            )
            .joining(
                user => this.changeStatus(user, true)
            )
            .leaving(
                user => this.changeStatus(user, false)  
            );
    },
    methods: {
        changeStatus(user, status) {
            const index = this.$store.state.conversations.findIndex(
                conversation => conversation.contact_id == user.id
            );
            if (index >= 0)
                this.$set(this.$store.state.conversations[index], 'online', status);
        }
    },
    computed: {
        selectedConversation() {
            return this.$store.state.selectedConversation;
        }
    }
}

</script>