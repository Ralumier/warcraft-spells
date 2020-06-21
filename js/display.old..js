// Util
function addEventListenerToAll(selector, event, handler) {
    $elements = $buttons = document.querySelectorAll(selector);

    for (let i = 0; i < $elements.length; i++) {
        let $element = $elements[i];
        $element.addEventListener(event, handler);
    }
}

// Button
const groupFunctions = {};

function createButton(id, imgUrl, imgAlt, linkUrl, linkText, group, data = undefined) {

    $button = document.createElement('div');
    $button.classList.add('button');
    $button.setAttribute('id', id);
    $button.setAttribute('group', group)
    if (data) {
        $button.setAttribute('data', data);
    }

    $button.addEventListener('click', buttonHandler);
    let image = `<img src="${imgUrl}" alt="${imgAlt}">`
    let caption = linkUrl
        ? `<a class="caption" href="${linkUrl}" target="_blank">${linkText}</a>`         
        : `<span class="caption">${linkText}</span>`

    $button.innerHTML = `${image}\n${caption}\n`;

    return $button;
}

function buttonHandler(e) {

    let target = e.currentTarget;

    if (target) {

        let group = target.getAttribute('group');

        let $racials = Array.from(document.querySelectorAll(`.button[group="${group}"]`));

        $racials.forEach(r => r.classList.remove('selected'))

        target.classList.add('selected')

        if (groupFunctions[group]) {
            groupFunctions[group](target);
        }
    }
}


// Layout
function createLayout() {
    return `
<div id="main">
    <div id="races"></div>
    <div id="classes"></div>
    <div id="race-info">                
        <div id="race-info-spells">
        </div>
    </div>
    <div id="class-info"></div>
</div>`;
}


// Populate
function populateRaces() {
    $groups = document.createDocumentFragment();

    $groups.appendChild(createRaceGroup('alliance-core', Race.Alliance.Core.All));
    $groups.appendChild(createRaceGroup('alliance-allied', Race.Alliance.Allied.All));
    $groups.appendChild(createRaceGroup('horde-core', Race.Horde.Core.All));
    $groups.appendChild(createRaceGroup('horde-allied', Race.Horde.Allied.All));
    $groups.appendChild(createRaceGroup('neutral', Race.Neutral.All));

    $races = document.getElementById('races')
    $races.innerHTML = '';
    $races.appendChild($groups);
}

function createRaceGroup(group, races) {
    $group = document.createElement('div');
    $group.setAttribute('id', `races-${group}`);

    for (const race of races) {
        $group.appendChild(createRaceButton(race));
    }

    return $group;
}

function createRaceButton(race) {
    return createButton(`race-${race.name}`,
        race.getIconPath(),
        race.name,
        race.getLink(),
        race.name,
        'races',
        race.getAlphaName()
    );
}

groupFunctions['races'] = function populateRacials($race) {
    const raceName = $race.getAttribute('data');

    const race = Race[raceName];

    $tree = document.createDocumentFragment();

    for (let a of race.abilities) {
        $button = createButton(a.name, a.getIconPath(), a.name, a.getLink(), a.name, 'racial');

        $tree.appendChild($button);
    }

    let $racials = document.getElementById('race-info');
    $racials.innerHTML = '';
    $racials.appendChild($tree);
}


// Main
function main() {

    document.body.innerHTML = createLayout();

    populateRaces();
}

main();