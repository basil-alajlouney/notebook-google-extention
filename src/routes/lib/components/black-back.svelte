<div class="black-back">
  <slot/>
</div>

<style>
  .black-back{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
  }
</style>