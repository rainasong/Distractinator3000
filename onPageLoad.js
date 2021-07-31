const availableTasks = [redditScroll, instagramClick, youtubeView];

const selectedTasks = availableTasks;

for (const task of availableTasks) {
  console.log(`Running '${task.name}'`);
  task();
}
