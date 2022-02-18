<template>
   <div>       
        <div> <NavBar/></div>   
       <div class="dashboard">  
            <div> <Sidebar/></div>   
        <div class="content">
            <router-view/>
        </div>
    </div>
   </div>
    
</template>

<script>
import Sidebar from '../utilisateurs/Sidebar.vue'
import NavBar from '../components/partials/Nav.vue'
export default {
    name: 'home',

    components: {
 
        Sidebar,
        NavBar
    }
}
</script>

<style>

.dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: #3d7dc1;
    height: 100vh;
    width: 189vw;
}

.content {
    background-color: white;
    border-radius: 10px;
    margin: 50px 6px 6px 0px;
    
    width: 67vw;
}


</style>