const VIDEO_CONTAINER_CLASS_NAME = 'tv-container';

const videoContainers = document.getElementsByClassName(
  VIDEO_CONTAINER_CLASS_NAME
);

Array.from(videoContainers).forEach(element => {
  element.remove();
});
