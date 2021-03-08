<template>
    <div>
		<h1>Registra ai</h1>
		<Form />
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
    components: {
      	Form
    }
}
</script>
