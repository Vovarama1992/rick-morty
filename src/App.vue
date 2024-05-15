<script setup>
import { ref, onMounted } from 'vue';
import { counter } from './fetchers';
import Search from './components/Search.vue';
import Gallery from './components/Gallery.vue';


const status = ref('');
const query = ref('');
const page = ref(1);
const count = ref(1);
const totalPages = ref(1);

const handleInputChange = (newQuery) => {
      query.value = newQuery;
      console.log("query: " + query.value + " status " + status.value);
    };

    const handleStatusChange = (newStatus) => {
      status.value = newStatus;
      console.log("query: " + query.value + " status " + status.value);
    };
    async function startCount() {
           totalPages.value = await counter(query.value, status.value);
           count.value++; 
           console.log("total: " + totalPages.value);
    }
    function moveRight() {
        page.value++;
        console.log("page: " + page.value);
        count.value++;
    }
    function moveLeft() {
           page.value--;
            console.log("page: " + page.value);
           count.value++;
    }


</script>
<template>
        <div class='searchZone'>
            <div class='horizontal'>
                <button class='arrow left' @click='moveLeft' :disabled='page < 2'></button>
                <Search :initialQuery='query' :initialStatus='status' :onInputChange="handleInputChange"
                      :onStatusChange="handleStatusChange"/>
                      <button class='arrow right' @click='moveRight' :disabled="page >= totalPages"></button>
            </div>
            <button @click="startCount" class='button'>Применить</button>
        </div>
        
        <Gallery :status='status' :query='query' :pages='totalPages' :pageNum='page' :toSearch='count'/>
        
</template>

<style scoped>
.horizontal {
    display: flex;
    flex-direction: row;
}
.arrow {
    width: 20px;
    height: 20px;
    background-size: contain; 
     background-repeat: no-repeat; 
     background-position: center;
     margin: 40px 0;
    
}
.left {
    background-image: url('src/components/icons/left.png');
}
.right {
    background-image: url('src/components/icons/right.png');
}
.inputWrapper {
    display: flex;
    flex-direction: row;
    
    margin: 5px 35%;
    height: 30px;
    width: 30%;
    font-size: 1.5em;
    align-items: center;
   
    padding: 1px;
    
    color: rgb(69, 69, 199);
    border-radius: 5px;
    
  }
 .searchZone {
    display: flex;
    flex-direction: column;
    align-items: center;
 }
.input {
        width: 98%;
        height: 98%;
        border: none;
        outline: none;
        padding-left: 10px;
    }

</style>

