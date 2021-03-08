<template>
	<div>
		<h1>Formulário de qualquer coisa</h1>
        <!-- <form @submit='checkForm' action='/fodase' method='post'> -->
        <form @submit='checkForm'>
            <p>
                {{ requestInfo }}
            </p>
            <p v-if='errors.length'>
                <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
                <ul>
                    <li v-for='error in errors' :key='error'>
                        {{ error }}
                    </li>
                </ul>
            </p>
            <p>
                <input id='nome' type='text' name='nome' v-model='name' placeholder='Nome'>
                <input id='idade' type='number' name='idade' min='0' v-model='age' placeholder='Idade'>
                <input id='anime' type='text' name='anime' v-model='anime' placeholder='Anime maneiro'>
                <select
                    id='movie'
                    v-model='selectedMovie'
                    name='movie'
                >
                <option v-for='movie in movies' :value='movie.id' :key='movie.name' v-show='movie.id !== 0'>
                    {{movie.name}}
                </option>
                </select>
            </p>
            <p>
                <input
                    type='submit'
                    value='Enviar'
                >
            </p>
        </form>
	</div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Form',
        data() {
            return {
                errors: [],
                requestInfo: null,
                name: null,
                age: null,
                anime: null,
                selectedMovie: 0,
                movies: [{id: 0, name: 'Selecione o pior'}, {id: 1, name: 'Star Wars'}, {id: 2, name: 'Senhor dos Anéis'}, {id:3, name: 'Lanterna Verde'}]
            }
        },
        methods: {
            checkForm (e) {
                if (this.name && this.age && this.anime && this.selectedMovie) {
                    axios.post('http://localhost:3000/register', {name: this.name, age: this.age, anime: this.anime, movie: this.selectedMovie})
                    .then(response => (
                        this.requestInfo = response.data
                    ))
                    // e.preventDefault()
                }

                this.errors = []

                if (!this.name) {
                    this.errors.push('O nome é obrigatório.')
                }
                if (!this.age) {
                    this.errors.push('A idade é obrigatória.')
                }
                if (!this.anime) {
                    this.errors.push('O anime é obrigatório.')
                }
                if (!this.selectedMovie) {
                    this.errors.push('Você precisa selecionar o filme.')
                }

                e.preventDefault()
            }
        }
    }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0
    }
    li {
        display: inline-block;
        margin: 0 10px
    }
    a {
        color: #42b983;
    }
</style>
