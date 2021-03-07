<template>
    <div>
		<h1>Registra ai</h1>
		<Form msg='fds meu parcero'/>
        <input v-model="message" placeholder="Me edite">
        <button v-on:click="f(message)">clica ae</button>
        <p>A mensagem é: {{ message }}</p>
    </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue'

const f = (a) => {
    console.log(a)
}

export default {
    name: 'register',
    data() {
        return {
            message: 'Test'
        }
    },
    components: {
      	Form
    },
    methods: {
        f
    }
}
</script>
