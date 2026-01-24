<template>
  <div
    class="container-box container-icons"
    role="list"
    aria-label="Tecnologías"
  >
    <!-- 🟨 Lenguajes -->
    <Icon icon="mdi:language-html5" title="HTML5" role="listitem" />
    <Icon icon="mdi:language-css3" title="CSS3" role="listitem" />
    <Icon icon="mdi:language-javascript" title="JavaScript" role="listitem" />
    <Icon icon="mdi:language-java" title="Java" role="listitem" />

    <!-- 🗄️ Bases de datos -->
    <Icon icon="simple-icons:postgresql" title="PostgreSQL" role="listitem" />
    <Icon icon="simple-icons:mysql" title="MySQL" role="listitem" />
    <Icon icon="simple-icons:mongodb" title="MongoDB" role="listitem" />
    <Icon icon="simple-icons:supabase" title="Supabase" role="listitem" />
    <Icon icon="simple-icons:firebase" title="Firebase" role="listitem" />
    <Icon icon="simple-icons:microsoftsqlserver" title="SQL Server" role="listitem" />
    <Icon icon="simple-icons:prisma" title="Prisma" role="listitem" />

    <!-- ⚙️ Frameworks y tools -->
    <Icon icon="mdi:vuejs" title="Vue.js" role="listitem" />
    <Icon icon="mdi:nuxt" title="Nuxt.js" role="listitem" />
    <Icon icon="simple-icons:angular" title="Angular" role="listitem" />
    <Icon icon="simple-icons:express" title="Express.js" role="listitem" />
    <Icon icon="mdi:nodejs" title="Node.js" role="listitem" />
    <Icon icon="simple-icons:springboot" title="Spring Boot" role="listitem" />
    <Icon icon="simple-icons:bootstrap" title="Bootstrap" role="listitem" />
    <Icon icon="simple-icons:git" title="Git" role="listitem" />
    <Icon icon="simple-icons:docker" title="Docker" role="listitem" />
    <Icon icon="simple-icons:postman" title="Postman" role="listitem" />
    <Icon icon="simple-icons:visualstudiocode" title="VS Code" role="listitem" />
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style scoped lang="scss">
/* Base card */
.container-box {
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  }
}

/* Tech Icons Card */
.container-icons {
  width: 320px;
  height: 320px;
  background: #5f3e2f;
  padding: 20px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-auto-rows: 50px;
  justify-items: center;
  align-items: center;
  gap: 12px;

  overflow-y: auto;

  /* 🔥 scrollbar invisible */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE / Edge viejo */
}

/* Chrome / Edge / Safari */
.container-icons::-webkit-scrollbar {
  display: none;
}

/* Icons */
.container-icons svg {
  width: 36px;
  height: 36px;
  color: white;
  transition: transform 0.2s ease;
}

.container-icons svg:hover {
  transform: scale(1.2);
}

/* 📱 Responsive */

</style>
