<template>
    <div class="home">
        <h1>{{ title }}</h1>
        <div>Limit: {{ limit }}</div>
        <button @click="addLimit">Add Limit</button><br />
        <input v-model="newNote" placeholder="Add a note" @keyup.enter="addNote" />
        <div class="notes">
            <div class="note" v-for="note in notes">
                <div><span>{{ note.text }} {{ note.created }}</span></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less" src="index.less">
</style>

<script src="index.js">
</script>