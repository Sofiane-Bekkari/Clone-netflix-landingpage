const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item 
function selectItem(e) {
    //Remove border
    removeBorder();
    // Remove show
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');
    //this.classList.add('show');//
    // Need to grab content form DOM
    console.log(this.id);
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

//Remove Show Function
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//Revome Border Function
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
// Listen for tab Click
tabItems.forEach(item => item.addEventListener('click',selectItem));