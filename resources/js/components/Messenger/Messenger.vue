<template>
	<div class="container-fluid" style="height: calc(100vh - 56px);">
	    <div class="row h-100 no-gutters">
	        <div class="col-4">
                
                <contact-form-component></contact-form-component>
                <contact-list-component></contact-list-component>
                
	        </div>
	        <div class="col-8">
	            
                <active-conversation-component
	            	v-if="selectedConversation" /> 
                
	        </div>
	    </div>
	</div>
</template>

<script>

import contactFormComponent from './ContactFormComponent.vue';
import contactListComponent from './ContactListComponent.vue';

import activeConversationComponent from './ActiveConversationComponent.vue';

export default {
    components: {
        contactFormComponent,
        contactListComponent,
        activeConversationComponent,
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