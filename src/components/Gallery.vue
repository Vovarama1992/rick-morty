
<script >
import { ref, onMounted, watch } from 'vue';
import searchCharacters from '../fetchers';


export default {
  props: {
    status:'alive'| "dead" | '',
    query: String,
    toSearch: Number,
    pageNum: Number
   
  },
  setup(props) {
    const cards = ref([]);
    
    const page = ref(1);
    const loadCards = async () => {
      
  try {
    
    const fetchedCards = await searchCharacters(props.query, props.status, props.pageNum);
    cards.value = fetchedCards;
  } catch (error) {
    console.error('Ошибка при загрузке изображений:', error);
  }
};
onMounted(loadCards);
 watch(
      () => props.toSearch,
      () => {
        
        loadCards();
      }
    );

    return {
      cards,
      
      page
    };
  }
};
</script>

<template>
  <div class='gallery'>
    <div v-for="(card, index) in cards" :key="index" class='card'>
      <div class='imageWrapper' >
         <img :src='card.url'>
      </div>
    <span class='span'>Name: <span class='inner'>{{ card.name }}</span> </span><br>
      <span class='span'><div class="ball"></div> <span class='inner'>{{ card.status }} - {{card.species}}</span></span><br>
      <span class='span'>Location: <span class='inner'>{{ card.loc }}</span> </span><br>
      <span class='span'>First seen in: <span class='inner'>{{ card.firstSeen }}</span></span>
  </div>
  </div>
</template>



<style scoped>
.adder {
  position: fixed;
  left: 100px;
  top: 100px;
  width: 50vw;
  height: 50vh;
  background: green;
}

.inner {
  color: rgb(176, 140, 140);
}

.ball {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: red;
}
.imageWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 68%;
    overflow: hidden;
}
.button {
    margin: 0 25%;
    width: 50%;
}
.image-wrapper img {
  width: 100%; 
  height: 100%; 
  object-fit: cover;
}
.gallery {
  
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  row-gap: 20px; 
  column-gap: 10px;
}
.card {
  width: 230px;
  height: 290px;
  background: rgb(50, 49, 49);
  color: white;
}

@media (min-width: 900px) { 
  .gallery {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
  }
  .card {
    width: 290px;
    
    
    
}
}











</style>




