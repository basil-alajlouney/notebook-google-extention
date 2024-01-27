<script lang="ts">
	import { deleteNote } from '../handleStorage';
	import { slide } from 'svelte/transition';
  export let contexts = [""];
  export let section = "";
  export let deletenote = (e: MouseEvent 
  & {currentTarget: EventTarget & SVGSVGElement})=>{
    let p = e.currentTarget.parentElement;
    let context = p?.querySelector("p")?.innerText;
    let index = contexts.indexOf(context!);
    contexts.splice(index, index+1);
    deleteNote(section, context!);
    contexts = contexts;
  }
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<ul transition:slide style="padding-right: 12px;">
  {#each contexts as context}
    <li>
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <p>{context}</p>
        <svg on:click={deletenote} class="trash" width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M199 103v50h-78v30h270v-30h-78v-50zm18 18h78v32h-78zm-79.002 80l30.106 286h175.794l30.104-286zm62.338 13.38l.64 8.98l16 224l.643 8.976l-17.956 1.283l-.64-8.98l-16-224l-.643-8.976zm111.328 0l17.955 1.284l-.643 8.977l-16 224l-.64 8.98l-17.956-1.284l.643-8.977l16-224l.64-8.98zM247 215h18v242h-18z"/>
        </svg>
      </div>
    </li>
  {/each}
</ul>

<style>
    .trash{
    color:red;
    transition: 0.2s;
  }
  .trash:hover{
    color:darkred;
    transition: 0.2s;
    cursor: pointer;
  }
</style>