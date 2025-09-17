<script setup>
   import { defineProps } from 'vue';

   const props = defineProps({
       title: String,
       description: String,
       icon: String,
       delay: Number,
       height: {
              type: Number,
              default: 280
       }
   })


</script>

<template>
      <article
      :style="{ height: height + 'px' }"
                        v-motion
                        :initial="{ opacity: 0, y: 100 }"
                        :visible-once="{ opacity: 1, y: 0 }"
                        :delay="delay"
                    >
                         <div class="icon-content">
                            <i :class="icon" class="icon-advantage"></i>
                        </div>
                        <div class="advantage-text">
                                <h3>
                                    {{ title }}
                                </h3>
                                <p>
                                    {{ description }}
                                </p>
                        </div>
                    </article>
</template>

<style scoped>
article {
        position: relative;
        width: 450px;
        background-color: #ffffff;
        border: 1px solid #ddd;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: inline-block;
         }
          .icon-content {
        width: 50px;
        height: 50px;
        border-radius: 15px;
        border: 1px solid #FF7900;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffffffb1;
     }

       .icon-advantage {
            font-size: 40px;
            color: #FF7900;
            /* padding: 20px; */
            border-radius: 15px;
            /* background-color: #fff; */
            
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
        @media (max-width: 768px) {
           article {
               width: 100%;
               height: auto !important;
           }
             .advice article .advantage-text {
                 margin-top: 10px;
                }
        }    
</style>