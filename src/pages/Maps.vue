<template>
  <div>
<iframe :src="katzenmaier"></iframe>
<iframe :src="greenbay"></iframe>
<iframe :src="horward"></iframe>
<iframe :src="maryorie"></iframe>
<iframe :src="north"></iframe>
<iframe :src="south"></iframe>
</div>

</template>

<script>
export default {

  data() {
  return {

   katzenmaier: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.7810520615835!2d-87.86492878454477!3d42.32586847918918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f932fbc6ba7cd%3A0xcf2bbe275c6da815!2sA+J+Katzenmaier+Elementary+School!5e0!3m2!1ses-419!2sar!4v1564008274482!5m2!1ses-419!2sar",
   greenbay: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11379.788128863976!2d-88.01906771922177!3d44.5162383258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8802e2e809b380f3%3A0x6370045214dcf571!2sGreen+Bay%2C+Wisconsin%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1564011953197!5m2!1ses-419!2sar",
   horward: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1484.2929252870113!2d-87.66401047918065!3d41.92326097932037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f852467%3A0xb6cb22b2f0358874!2sHoward+A+Yeager+Elementary!5e0!3m2!1ses-419!2sar!4v1564012412184!5m2!1ses-419!2sar",
   maryorie: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.7203115653865!2d-87.84787332033551!3d42.327163879290936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fecd0628e1bb5%3A0x9a4d5f9aafd42e02!2sMarjorie+P+Hart+Elementary+School!5e0!3m2!1ses-419!2sar!4v1564012814269!5m2!1ses-419!2sar",
   north: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11791.039398182762!2d-87.84319973022463!3d42.36895699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fed60b13aa0a7%3A0xfe6df83b0f197ed6!2sNorth+Elementary+School!5e0!3m2!1ses-419!2sar!4v1564013056235!5m2!1ses-419!2sar",
   south: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47203.09932733572!2d-87.88961192199237!3d42.317066999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880feccac2135a21%3A0x8ce88e90b96bbec1!2sSouth+Elementary+School!5e0!3m2!1ses-419!2sar!4v1564013343582!5m2!1ses-419!2sar"
    };
  }
};
</script>

<style>
iframe{

width:600;
height:450;
border:0;
display: inline;
padding-left: 30px;
padding-button: 30px;
padding-top: 30px;

}


</style>
