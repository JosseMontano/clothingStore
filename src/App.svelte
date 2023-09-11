<script lang="ts">
  // ========= LIBS SVELTE =========
  import { Router, Route } from "svelte-routing";
  import HomePage from "./pages/Home.svelte";
</script>

<main class="container__dad">
  <div class="container__son">
    <Router>
      <Route path="/"><HomePage /></Route>
      <Route path="/login"><p>login</p></Route>
    </Router>
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
</style>
