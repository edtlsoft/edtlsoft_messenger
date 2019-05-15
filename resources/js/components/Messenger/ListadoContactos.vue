<template>
    <div class="list-group">
        <contacto 
            v-for="conversation in conversationsFiltered"
            :key="conversation.id"
            :conversation="conversation"
            :selected="isSelected(conversation)"
            @click.native="selectConversation(conversation)" 
        />                    
    </div>
</template>

<script>

import Contacto from './Contacto.vue';

export default {
    components: {
        Contacto,
    },
    methods: {
        selectConversation(conversation) {
            this.$router.push(`/chat/${conversation.id}`, () => {
                this.$store.dispatch('getMessages', conversation);
            });
        },
        isSelected(conversation) {
            if (this.selectedConversation)
                return this.selectedConversation.id === conversation.id;

            return false;
        }
    },
    computed: {
        selectedConversation() {
            return this.$store.state.selectedConversation;
        },
        conversationsFiltered() {
            return this.$store.getters.conversationsFiltered;
        }
    }
}
</script>