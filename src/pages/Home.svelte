<script lang="ts">
  // ========= LIBS SVELTE =========
  import { onMount } from "svelte";
  import CatsComponent from "../components/Cats.svelte";
  import type { ProductsType } from "../interfaces/ProducsType";
  import Card from "../components/Card.svelte";
  import { getApi } from "../helpers/fetch";
  import { cart } from "../store/cart";

  let product = {
    id: 1,
    name: "Product 1",
  };

  export const addCart = () => {
    cart.update((carts) => {
      return [...carts, { product, quantity: 1 }];
    });
  };

  // ========= CATS =========
  let sectionCurrent = "Todos";
  const handleChangeCat = (cat: string) => {
    sectionCurrent = cat;
  };

  // ========= SHOW PRODUCTS =========
  let productsData: ProductsType[] = [];
  const handleGetProducts = async () => {
    productsData = await getApi("clothing");
  };
  onMount(() => {
    handleGetProducts();
  });
</script>

<div>
  <h1 class="title">Clothes Stores</h1>

  <CatsComponent {handleChangeCat} {sectionCurrent} />
  <p on:click={addCart}>Catch: {sectionCurrent}</p>
  <div class="cards">
    {#each productsData as product}
      <Card {product} />
    {/each}

    {#each $cart as item (item.id)}
    <li>{item.name} (Quantity: {item.quantity})</li>
  {/each}
  </div>
</div>

<style>
  .title {
    font-size: 32px;
    font-weight: bold;
    color: var(--primary);
  }

  .cards {
    display: flex;
    gap: 10px;
  }
</style>
