<script lang="ts">
  // ========= LIBS SVELTE =========
  import { onMount } from "svelte";
  import CatsComponent from "./components/Cats.svelte";

  // ========= CATS =========
  let sectionCurrent = "Todos";
  const handleChangeCat = (cat: string) => {
    sectionCurrent = cat;
  };

  // ========= SHOW PRODUCTS =========
  interface ProductsType {
    id: number;
    name: string;
    description: string;
    photo: string;
  }

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

    <div>
      <p>Catch: {sectionCurrent}</p>
      {#each productsData as product}
        <div>
          <img
            width="200"
            height="200"
            src={product.photo}
            alt={product.name}
          />
        </div>
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
</style>
