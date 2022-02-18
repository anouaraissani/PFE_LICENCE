<template>
    <div class="sidebar">
        
      
        <div class="title">
             Déparement informtique      
        </div>
        <div class="menu-items">
             <router-link to="/user/TauxDeRéussite" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                   Taux de réussite des étudiants
                </div>
            </router-link>
            <router-link to="/user/EvolutionNombreEtudiants" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Evolution du nombre d’étudiants de chaque spécialité
                </div>
            </router-link>
            <router-link to="/user/nbrEtudiantObs" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Nombre d’étudiants par observation
                </div>
            </router-link>
            <router-link to="/user/nbrEtdSpec" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                   Nombre d’étudiants par spécialité 
                </div>
            </router-link>
            <router-link to="/user/etatAvancementModule" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Etat d’avancement des modules par section
                </div>
            </router-link>
             <router-link to="/user/nbrEnsGrade" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Nombre d’enseignants par grade
                </div>
            </router-link>
            <router-link to="/Login" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    logout
                </div>
            </router-link>
           
            
        </div>
    </div>
</template>

<script>
export default {
 /* name: "sidebar",
  components: {},
  
        methods: {
            logout() {

                  window.open("http://localhost:8080/user");
             
    }
    
    }*/
    }
</script>

<style scoped>

.title {
    color: white;
    font-size: 24px;
    margin-top: 90px;
    margin-bottom: 70px;
    padding-left: 80px;

}

.menu-items {
    display: flex;
    flex-direction: column;
    margin-top: 0px;
    margin-left: 0px;
}

.menu-items > * {
    margin-top: 10px;
}

.side-btn {
    border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    color: white;
    background-color: transparent;

}

.side-btn:focus {
    outline: none;
}

.side-btn.active {
    position: relative;
    background-color: white;
    color: #4e87c4;
    font-weight: 600;
    margin-left: 10px;
    border-radius: 30px 0 0 30px;
}

.side-btn.active::before {
    top: -30px;
}

.side-btn.active::after {
    bottom: -30px;
}

.side-btn.active::before, .side-btn.active::after {
    position: absolute;
    content: "";
    right: 0;
    height: 30px;
    width: 30px;
    background-color: white;
}

.side-btn.active .link-container::before {
    top: -60px;
}

.side-btn.active .link-container::after {
    bottom: -60px;
    z-index: 99;
}

.side-btn.active .link-container::before, .side-btn.active .link-container::after {
    position: absolute;
    content: "";
    right: 0px;
    height: 60px;
    width: 60px;
    border-radius: 60%;
    background-color: #3d7dc1;
}

.logout{
    color: white;
    margin-left: 320px;
    margin-top: 70px;
}
</style>