<script setup lang="ts">
import { init, type IJitsiMeetExternalApi } from "jitsi-iframe-sdk"
import { ref, useTemplateRef, onMounted } from "vue"

const meetingRef = useTemplateRef('meetingRef')
const meetingInstance = ref<IJitsiMeetExternalApi>()

onMounted(async () => {
   meetingInstance.value = await init(import.meta.env.VITE_JITSI_DOMAIN, {
      roomName: import.meta.env.VITE_JITSI_ROOM_NAME,
      userInfo: {
         displayName: import.meta.env.VITE_USER_NAME,
         email: import.meta.env.VITE_USER_EMAIL
      },
      parentNode: meetingRef.value
   })
})
</script>

<template>
   Hello World!
   <div ref="meetingRef" class="" style="height: 90vh;"></div>
</template>