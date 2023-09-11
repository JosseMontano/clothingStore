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
    quantity: 1,
  };
  let product2 = {
    id: 2,
    name: "Product 2",
    quantity: 1,
  };
  let product3 = {
    id: 3,
    name: "Product 3",
    quantity: 1,
  };

  let product4Update = {
    id: 4,
    name: "Product 4",
    quantity: 1,
  };

  export const addCart = () => {
    cart.update((v) => [...v, product]);
    cart.update((v) => [...v, product2]);
    cart.update((v) => [...v, product3]);
  };

  export const removeCart = () => {
    cart.update((v) => {
      return v.filter((item) => item.id !== 1);
    });
  };

  export const clearCart = () => {
    cart.set([]);
  };

  export const updateCart = () => {
    cart.update((v) =>
      v.map((ele) => (ele.id === 1 ? { ...ele, quantity: 3 } : ele))
    );
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
  <button on:click={addCart}>Catch: {sectionCurrent}</button>
  <button on:click={removeCart}>Remove</button>
  <button on:click={clearCart}>Clear</button>
  <button on:click={updateCart}>Update</button>
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
