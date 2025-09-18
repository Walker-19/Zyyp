<script setup>
import Card from './Card.vue';
import Tarif from './Tarif.vue';
import NewsLetter from './NewsLetter.vue';
import Footer from './Footer.vue';
import Nav from './Nav.vue';
import Rechargeur from './Rechargeur.vue';

</script>


<template>
    <Nav />
    <div class="home">
          <div class="hero">
            <section class="hero-content">
                <article
                 v-motion
                   :initial="{ opacity: 0, y: -100 }"
                    :enter="{ opacity: 1, y: 0 }"
                class="hero-text">
                    <h1>
                        <span>
                            <span style="color: #FF6B00;" class="hand-highlight">
                                Ensemble,
                            </span>
                        </span> construisons une mobilité
                        <span style="color: #FF6B00">
                            plus propre
                        </span>
                    </h1>    
                </article>
                <article
                 v-motion
                     :initial="{ opacity: 0, y: 100 }"
                      :enter="{ opacity: 1, y: 0 }"
                      :delay="200"
                      :duration="1050"
                      class="box-subheading">
                    <h2 class="subheading">
                        <i class="mdi mdi-map-marker-radius" style="color: #FF6B00;"></i>
                        Dès janvier 2026, Montpellier bouge autrement : rapide, pratique et écologique
                    </h2>
                </article>
                <article
                    v-motion
                        :initial="{ opacity: 0, y: 100 }"
                        :enter="{ opacity: 1, y: 0 }"
                        :delay="500"
                        :duration="1100"
                class="grid">
                  <router-link to="/">

                      <button class="btn-hero">
                          <i class="mdi mdi-cellphone-arrow-down"></i>
                          Télécharger l'application
                        </button> 
                    </router-link>
                    <router-link to="/account">

                        <button class="btn-hero">
                            <i class="mdi mdi-scooter-electric"></i>
                            Se connecter
                            
                        </button> 
                    </router-link>
                </article>
                
            </section>
          </div>

            <section class="advantage">
                 <h3
                    v-motion
                    :initial="{ opacity: 0, y: 100 }"
                    :visible-once="{ opacity: 1, y: 0 }"
                    :delay="100"
                 >
                    Vos avantages avec Zypp ?
                 </h3>
                <div class="grid">
                    <Card 
                     title="Déplacez-vous librement"
                    description=" Louez et déposez votre trottinette 24h/24 dans les zones autorisées"
                    :delay="200"
                    icon="mdi mdi-scooter-electric"
                    />
                   <Card 
                        title="Gagnez du temps"
                        description="Accédez rapidement à une trottinette près de chez vous ou de votre lieu de travail"
                        icon="mdi mdi-timer-outline"
                        :delay="300"
                        />
                     <Card
                        title="Respectez l'environnement"
                        description="Réduisez votre empreinte carbone en choisissant un mode de transport écologique"
                        icon="mdi mdi-leaf"
                        :delay="400"
                        />
                       <Card 
                        title="Économisez de l'argent"
                        description="Profitez de tarifs abordables et flexibles adaptés à vos besoins de déplacement"
                        icon="mdi mdi-wallet"
                        :delay="500"
                        />
                </div>

                <p></p>
            </section>


            <section class="advice">
                <h3 class="gradient-text">
                    4 étapes pour rouler avec Zypp
                </h3>
                <div class="grid">
                    <Card 
                       title="Téléchargez l'application"
                          description="Disponible sur iOS et Android, téléchargez l'application Zypp et créez votre compte en quelques minutes."
                            icon="mdi mdi-cellphone"
                            :delay="200"
                            :height="300"/>

                    <Card
                        title="Trouvez une trottinette"
                        description="Utilisez l'application pour localiser la trottinette la plus proche de vous."
                        icon="mdi mdi-map-marker-radius"
                        :delay="300"
                        :height="300"/>
                     <Card
                        title="Déverrouillez et roulez"
                        description="Scannez le code QR sur la trottinette pour la déverrouiller et commencez votre trajet en toute simplicité."
                        icon="mdi mdi-scooter-electric"
                        :delay="400"
                        :height="300"/>
                       <Card 
                        title="Garez-la correctement"
                        description="À la fin de votre trajet, garez la trottinette dans une zone autorisée et terminez votre location via l'application."
                        icon="mdi mdi-parking"
                        :delay="500"
                        :height="300"/>
                </div>

                <button
                 v-motion
                    :initial="{ opacity: 0, y: 100 }"
                    :visible-once="{ opacity: 1, y: 0 }"
                    :delay="100"
                
                class="btn-hero" style="margin-top: 20px;">
                    <i class="mdi mdi-cellphone-arrow-down"></i>
                    Télécharger l'application
                </button>
            </section>
 
            <Tarif />
            <Rechargeur />
            <NewsLetter />
            <Footer />
    </div>

</template>



<style  scoped>
.hand-highlight {
  position: relative;
  display: inline-block;
  padding: 0 4px;
}

.hand-highlight::before {
  content: '';
  position: absolute;
  left: -3px;
  right: -3px;
  top: -2px;
  bottom: -2px;
  border: 2px solid orange;
  border-radius: 12px 14px 10px 16px; /* irrégularité */
  transform: rotate(-1.5deg);
  pointer-events: none;
}
.grid {
    width: 100%;
    display: flex;
    gap: 20px;
    margin-top: 20px;
    justify-content: center;    
}
    .home {
        width: 100%;
        height: 100vh;
        margin-top: 80px;
    }
   
        .hero {
            width: 100%;
            height: calc(100vh - 70px);
            background-color: #F2F2F2;
            background-size: cover;
            background-position: center ;
            display: flex;
            align-items: start;
            justify-content: center;
            font-size: 48px;
            font-weight: bold;
            color: #333;
            text-align: center;
        }
        .hero-content {
            width: 100%;
            height: calc(100vh - 70px);
        }
        .hero-text {
          width: calc(100% - 40px);
        }
        .hero .box-subheading {
            width: max-content;
            margin: auto;
        }
        .hero .subheading {
            font-size: 16px;
            font-weight: 600;
            color: #666;
            border: 1px solid #FF6B00;
            padding: 0px 15px;
            height: auto;
            border-radius: 15px;
        }
        .btn-hero {
            padding: 15px 30px;
            font-size: 20px;
            background: #3C096C;
         background: linear-gradient(90deg, #913BC4, #FF6B00);
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.5s ease;
        }
        .btn-hero:hover {
            background: #FF6D00;
            color: #ffffff;
            transform: scale(1.05);
        }
        .btn-hero:hover i {
            color: #fff;
        }
     .advantage {
        width: 100%;
        min-height: 300px;
        background-color: #F2F2F2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
     }
     .advantage h3 {
        text-align: center;
        font-size: 32px;
        font-weight: bold;
        color: #333;
     }

  

        .advantage-text {
            margin-top: 20px;
            text-align: center;
        }
        .advantage-text h3 {
            font-size: 24px;
            color: #333;
            margin-bottom: 10px;
        }
        .advantage-text p {
            font-size: 16px;
            color: #666;
            line-height: 1.5;
        }

        .advice {
            width: 100%;
            min-height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 30px;
            display: flex;
        }
        .advice h3 {
            text-align: center;
            font-size: 32px;
            font-weight: bold;
            color: #333;
         }
        




       /* Mobile screen */

         @media (max-width: 768px) {
            .grid {
                flex-direction: column;
                align-items: center;
            }
            .home {
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

                .hero {
                    height: calc(100vh - 70px);
                    font-size: 25px;
                    padding: 0 10px;
                }
                .hero-text {
                    width: 100%;
                }
                .hero .box-subheading {
                    width: 100%;
                    padding: 0 10px;
                }
                .hero .subheading {
                    font-size: 14px;
                }
                .btn-hero {
                    padding: 10px 20px;
                    font-size: 16px;
                }

                .advantage h3 {
                    font-size: 24px;
                }
                .advantage {
                    width: 100%;
                }

                
         }

</style>