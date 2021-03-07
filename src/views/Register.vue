<template>
    <div class="register">
		<h1>This is a Register page</h1>
		<Form msg='fds'/>
    </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue'

export default {
    name: 'Register',
    components: {
      	Form
    }
}
</script>
