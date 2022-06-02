const panelEl = document.querySelector('#side-panel');
const clickedItemEl = panelEl.querySelector('#clicked-item');
const itemGroupsEl = panelEl.querySelector('#item-groups');

function showClickedItemInfo(item) {
    if (item) {
        clickedItemEl.innerHTML = 'Clicked property ID: ' + item.id;
    } else {
        clickedItemEl.innerHTML = 'No Selection';
    }
}

function createGroupsSection(items, groups) {
    const markup = `
        <div class='color'>
        </div>
        <div class='name'>
        </div>
        <input type='checkbox' checked>
    `;

    groups.forEach((g) => {

        const itemsOfG = zoomWrapper.selectAll('.' + g.name);

        const gEl = document.createElement('div');
        gEl.classList.add('group-info');
        itemGroupsEl.appendChild(gEl);
        gEl.innerHTML = markup;

        gEl.querySelector('.name').innerHTML = g.name;
        gEl.querySelector('.color').style.backgroundColor = g.color;
        gEl.querySelector('input').addEventListener('click', function () {
            itemsOfG
                .attr('opacity', g.visible ? '0' : '1');
            g.visible = !g.visible;
        });
    })
}

function clearGroupsSection() {
    itemGroupsEl.innerHTML = '';
}