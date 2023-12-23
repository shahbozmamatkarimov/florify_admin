<template>
    <main>
      <section>
        <nav class="flex items-center w-full z-50 -mt-1 bg-[#F4F4F6] pb-10">
          <div
            class="w-full flex flex-wrap items-center h-32 -mb-10 justify-between mx-10"
          >
            <div
              class="flex items-center gap-1 self-center text-2xl font-semibold whitespace-nowrap"
            >
              <slot></slot>
              <img
                class="font-semibold text-3xl"
                src="../assets/svg/star.svg"
                alt="star"
              />
            </div>
          </div>
        </nav>
      </section>
    </main>
  </template>
  
  <script setup></script>
  
  <style lang="scss" scoped>
  label {
    cursor: pointer;
    text-transform: uppercase;
    font-size: 18px;
  }
  </style>
  