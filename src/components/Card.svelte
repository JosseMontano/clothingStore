<script lang="ts">
  import type { ProductsType } from "../interfaces/ProducsType";

  export let product: ProductsType;
</script>

<div class="card">
  <p class="title">Ropa</p>
  <img width="200" height="200" src={product.photo} alt={product.name} />
  <span class="name">{product.name}</span>
</div>

<style>
  .card {
    position: relative;
    border-radius: 15px;
    cursor: pointer;
  }

  .title {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: var(--secondary);
    padding: 5px;
    color: var(--white);
    border-radius: 25%;
    font-size: 12px;
  }

  img {
    border-radius: 15px;
  }

  .name {
    position: absolute;
    bottom: 5px;
    left: 10px;
    color: var(--white);
    font-size: 22px;
  }
</style>
