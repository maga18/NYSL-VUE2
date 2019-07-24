
<template>
  <div>
    <h1>{{ msg }}</h1>
<table class=fotos>

<tr>
   <td> <img :src="imagen3" /></td>

    <td> <img :src="imagen2" /></td>
</tr>
</table>
  </div>
</template>

<script>
export default {

  data() {
    return {
      msg: "Photos",
      imagen3: "img/image3.jpg",
      imagen2: "img/image2.jpg"


    };
  }
};
</script>

<style>
h1 {
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
},

 row, td {
  padding: 30px;
  text-align: left;
}

</style>
