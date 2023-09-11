<script lang="ts">
  // ========= LIBS SVELTE =========
  import { onMount } from "svelte";
  import CatsComponent from "./components/Cats.svelte";
  import type { ProductsType } from "./interfaces/ProducsType";
  import Card from "./components/Card.svelte";

  // ========= CATS =========
  let sectionCurrent = "Todos";
  const handleChangeCat = (cat: string) => {
    sectionCurrent = cat;
  };

  // ========= SHOW PRODUCTS =========

  let productsData: ProductsType[] = [];
  const handleGetProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/clothing");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      productsData = await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  onMount(() => {
    handleGetProducts();
  });
</script>

<main class="container__dad">
  <div class="container__son">
    <h1 class="title">Clothes Stores</h1>

    <CatsComponent {handleChangeCat} {sectionCurrent} />
    <p>Catch: {sectionCurrent}</p>
    <div class="cards">
   
      {#each productsData as product}
        <Card {product} />
      {/each}
    </div>
  </div>
</main>

<style>
  .container__dad {
    display: flex;
    justify-content: center;
  }
  .container__son {
    width: 800px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .title {
    font-size: 32px;
    font-weight: bold;
    color: #4b2b7a;
  }

  .cards{
    display: flex;
    gap:10px
  }
</style>
