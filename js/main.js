const contentDragAndDrop = document.querySelector('[data-dragAndDrop]');
const sortable = Sortable.create(contentDragAndDrop, {
    chosenClass: 'chosen',
    ghostClass: "ghost"
});