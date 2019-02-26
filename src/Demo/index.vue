<style>
    .demo {
        background: pink;
        width: 200px;
        height: 50px;
        text-align: center;
        margin: auto;
        line-height: 50px;
    }
</style>
<template>
    <div class="demo">
        <div>
            <span>{{name}}: </span>
            <Button  @click="add" >{{number}}</Button>
        </div>
        <div>
            <Input placeholder="请输入数字" @on-change="onChange" value="value" v-model="value" />
            <span>输入框的值为{{value}}</span>
        </div>
        <div>
            <span>数字的和：</span>
            <span>{{sum}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '点击数字自增',
            number: 0,
            value: ''
        }
    },
    methods: {
        add() {
            this.number ++
        },
        onChange(e) {
            const value = Number(e.target.value);
            this.value = value ? value : 0;
        }
    },
    computed: {
        sum() {
            return this.value + this.number
        }
    }
}
</script>

