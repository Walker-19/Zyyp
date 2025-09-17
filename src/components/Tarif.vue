<script setup lang="ts">
</script>


<template>

    <section
    v-motion
    :initial="{opacity: 0, y: 150}"
    :visible-once="{opacity: 1, y:0}"    
    
    class="rates">
        <div class="bloc-img">
            <img src="https://asset-prod.france.fr/Place_de_la_Come_die_Ret_OT_Montpellier_da18f11144.jpg" alt="">
            <div class="traject">
                <div style="display: flex;">
                    <div class="start">
                        <i class="mdi mdi-map-marker"></i>
                        <span>
                            Place de la Comédie
                        </span>
                    </div>
                        <div 
                            class="middle"
                        >
                        <div class="icon">
                            <span>
                                ---
                            </span> 
                         <i class="mdi mdi-scooter-electric"></i>
                            <span>
                                ---
                            </span>
                        </div>        
                        </div>
                     <div class="end">
                        <i class="mdi mdi-map-marker"></i>
                        <span>
                            Jardin des Plantes
                        </span>
                    </div>
                </div>
                <div class="prev">
                        <span>Temps estimé: 5min</span>
                        <span>
                            Coût du trajet: 
                           <span style="background-color: #FF7900; color: #fff; padding: 2px; border-radius: 5px; font-weight: bold;">1,75 €</span> 
                        </span>
                </div>
            </div>
        </div>
        <div class="text-rates">
            <h2>
            Dès janvier 2026, plus de 1000 trottinettes électriques Zypp envahiront Montpellier !
        </h2>
        <ul>
            <li>

               <span>-</span> Roulez librement, vite et écologique dans toute la ville.
            </li>
            <li>
                <span>-</span> Tarification simple et transparente : 1€ la prise en main + 0,15¢/min.
            </li>
            <li>
                <span>-</span> Abonnements mensuels et annuels pour les utilisateurs fréquents.
            </li>
            <button class="btn-explore">
                Découvrir nos tarifs
                <i class="mdi mdi-arrow-right"></i>
            </button>
        </ul>

        </div>
        
    </section>
</template>

<style scoped>
    .rates {
        width: 100%;
        padding: 40px;
        display: flex;
        flex-direction: row;
        align-items: start;
        gap: 20px;
    }
    /* .rates div {
        flex: 1;
        position: relative;
        
    } */
    .rates img {
        position: relative;
        width: 100%;
        border-radius: 15px;
        object-fit: cover;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .bloc-img {
        width: 50%;
        position: relative;
    }
    .traject {
        width: calc(100% - 40px);
        min-height: 70px;
        position: absolute;
        bottom: 70px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 10px;
        border-radius: 5px;
        
    }
    .traject .start {
        width: calc(100% / 3);
        height: 50px;
        border-radius: 5px;
        border: 1px solid #dcdcdc;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .traject .start i {
        color: #12be09;
        font-size: 20px;
    }
     .traject .end i {
        color: #f00606;
        font-size: 20px;
    }
    .traject .middle {
        width: calc(100% / 3);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: #FF7900;
        font-size: 20px;
    }
    .middle .text {
        font-size: 12px;
    }
    .traject .end {
        width: calc(100% / 3);
        height: 50px;
        border-radius: 5px;
        border: 1px solid #dcdcdc;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        font-weight: 700;
    }
    .text-rates {
        width: 50%;
        height: auto;
    }

    .rates h2 {
        font-size: 28px;
        color: #333;
        text-align: center;
    }
    .rates ul {
        list-style-type: disc;
        padding-left: 20px;
        font-size: 18px;
        color: #000000;
    }
    .rates ul li {
        margin-bottom: 10px;
        list-style: none;
    }
    .prev {
        width: calc(100% - 70px);
        height: max-content;
        color: #000000;
        padding-bottom: 2px;
        margin: auto;
        display: flex;
        backdrop-filter: blur(10px);
        border-bottom: 1px solid #FF7900;
        font-weight: 500;
        justify-content: space-around;
    }
    .prev span {
        font-size: 16px;
        font-weight: 500;
    }
    .btn-explore {
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 16px;
        color: #fff;
        background: linear-gradient(90deg, #3C096C, #31263E);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.3s ease;
    }   
    .btn-explore i {
        font-size: 20px;
    }
    .btn-explore:hover {
        background: linear-gradient(90deg, #31263E, #3C096C);
        box-shadow: 0 4px 15px rgba(60, 9, 108, 0.4);
    }

    @media (max-width: 768px) {
        .rates {
            flex-direction: column;
            padding: 20px;
        }
        .text-rates {
            order: 1;
        }
        .bloc-img {
            order: 2;
        }
        .bloc-img, .text-rates {
            width: 100%;
        }
        .traject {
            width: calc(100% - 20px);
            bottom: 20px;
            font-size: 14px !important;
        }
    }
</style>