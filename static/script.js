// Life story
const target3 = document.querySelector('.target3');
const previewStory = document.querySelector('.previewStory');

target3.addEventListener('mouseenter', () => {
  previewStory.style.opacity = 1;
});

target3.addEventListener('mouseleave', () => {
  previewStory.style.opacity = 0;
});


// For Projects
const target2 = document.querySelector('.target2');
const previewProjects = document.querySelector('.previewProjects');

target2.addEventListener('mouseenter', () => {
  previewProjects.style.opacity = 1;
});

target2.addEventListener('mouseleave', () => {
  previewProjects.style.opacity = 0;
});

// For Profile
const target1 = document.querySelector('.target1');
const previewProfile = document.querySelector('.previewProfile');

target1.addEventListener('mouseenter', () => {
  previewProfile.style.opacity = 1;
});

target1.addEventListener('mouseleave', () => {
  previewProfile.style.opacity = 0;
});

// For GitHub
const target = document.querySelector('.target');
const previewGit = document.querySelector('.previewGit');

target.addEventListener('mouseenter', () => {
  previewGit.style.opacity = 1;
});

target.addEventListener('mouseleave', () => {
  previewGit.style.opacity = 0;
});