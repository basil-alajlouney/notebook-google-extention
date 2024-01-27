<script lang="ts">
	import Section from './lib/components/section.svelte';
	import Header from './lib/components/header.svelte';
  import { sections, setSections, addSection, addNote, deleteNote } from './lib/handleStorage';
  import { onMount } from 'svelte';
  let lunched = false;
  let data:any;
  let keys:any;
  onMount(()=>{
    // localStorage.removeItem("sections");
    setSections();
    console.log();
    lunched = true;
    data = JSON.parse(localStorage.getItem("sections")!);
    keys = Object.keys(data);
  });
</script>
  <Header bind:sections={keys}/>
  {#if lunched}
  <div class="section-wrapper">
    {#each keys ?? [] as section}
      <Section title={section} notes={data[section]}/>
    {/each}
  </div>
  {/if}
<style>
  .section-wrapper{
    padding-top: 16px;
    height: calc(100% - 72px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }
  .section-wrapper::-webkit-scrollbar{
    width: 8px;
    /* background-color: rgba(255, 255, 255, 0.2); */
  }
  .section-wrapper::-webkit-scrollbar-thumb{
    background-color: rgba(255 ,255 ,255,0.4);
  }
  *{
      font-family:Tahoma, 'Segoe UI', Geneva, Verdana, sans-serif;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      --font:#e7decc
    }
</style>