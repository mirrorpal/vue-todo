<template>
    <section class="real-app">
        <input type="text" class="add-input" v-model="text" autofocus placeholder="请输入" @keyup.enter="addTodo" />
        <Item v-for="(todo,index) in filterTodos" :key="index" :todo="todo" @del="deleteTodo"/>
        <Tabs :filter="filter" :todos="todos" @toggle="toggleFilter" @clearAll="clearAllCompleted"/>
    </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0
export default {
    components: {
        Item,
        Tabs
    },
    data() {
        return {
            text:'',
            todos: [],
            filter:'all'
        }
    },
    computed:{
        filterTodos() {
            if(this.filter === 'all'){
                return this.todos;
            }
            const completed = this.filter === 'completed'
            return this.todos.filter(item => completed === item.completed);
        }
    },
    methods: {
        addTodo() {
            this.todos.unshift({
                id:id++,
                content:this.text,
                completed:false
            });
            this.text = '';
        },
        deleteTodo (id){
            this.todos = this.todos.filter(item => item.id !== id);
        },
        toggleFilter(state){
            this.filter = state;
        },
        clearAllCompleted(){
            this.todos = this.todos.filter(item => !item.completed);
        }
    }
}
</script>

<style lang="stylus" scoped>
    .real-app{
        width 600px
        margin 0 auto
        box-shadow 0 0 5px #666
    }
    .add-input{
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        outline: none;
        color: inherit;
        padding: 6px;
        border: 1px solid #999;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        font-smoothing: antialiased;
        padding: 16px 16px 16px 60px;
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
    }
</style>
