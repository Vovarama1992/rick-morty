<script lang='ts'>

 

export default {
  props: {
    query: String,
    status: String,
    onInputChange: Function,
    onStatusChange: Function
  },
 
   setup(props: any) {
    const handleInputChange = (e: any) => {
      const target = e.target;
      const value = target.value;
      props.onInputChange(value);
    };

    const handleStatusChange = (e: any) => {
      const target = e.target;
      const value = target.value;
      props.onStatusChange(value);
    };

    return {
      handleInputChange,
      handleStatusChange
    };
  
  }
};
</script>







<template>
                      <div class='searchZone'>
                        <p class='paragraph'>Поиск по</p>
                            <div class='fields'>
                              <div class='inputWrapper'>
                              
                                      <label htmlFor='person'></label>
                                      <input type='text' placeholder='персонажу' @change="handleInputChange"   class='input'  id='person' name='person' />
                              </div>
                              <div class='inputWrapper'>
                              <select id="status" name='status' class='select' @change="handleStatusChange"  >
        <option disabled value="">статусу</option>
        <option value="" >Без разницы</option>
        <option value="alive" >alive</option>
        <option value="dead" >dead</option>
      </select>
                                      
                              </div>
                            </div>
                              
                      </div>
</template>

<style scoped>
.searchZone {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.paragraph {
   margin-bottom: 1px;
}
.select {
  width: 98%;
  height: 58%;
  border: none;
  outline: none;
}
.fields {
  display: flex;
  padding-top: 0;

}

.inputWrapper {
    display: inline-block;
    flex-direction: row;
   
    margin: 3px 5% 5px;
    height: 30px;
    width: 180px;
    font-size: 1.5em;
    align-items: center;
   
    padding: 1px;
    border: 1px solid rgb(69, 69, 199);
    color: rgb(69, 69, 199);
    border-radius: 5px;
    
  }
.input {
        width: 68%;
        height: 48%;
        border: none;
        outline: none;
        padding-left: 10px;
    }
</style>



