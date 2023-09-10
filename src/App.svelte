<script lang="ts">
  import CatsComponent from "./components/Cats.svelte";

  let sectionCurrent = "Todos";

  const handleChangeCat = (cat: string) => {
    sectionCurrent = cat;
  };
</script>

<main class="container__dad">
  <div class="container__son">
    <h1 class="title">Clothes Stores</h1>

    <CatsComponent {handleChangeCat} {sectionCurrent} />

    <div>
      <p>Catch: {sectionCurrent}</p>
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
